import { computed, inject, Injectable, signal } from '@angular/core';
import { StateWithPagination } from '../../../shared/models/state';
import { Partner } from '../models/partner';
import { Status } from '../../../shared/models/status';
import { HttpPartnerListService } from './htpp-partner-list.service';
import { state } from '@angular/animations';
import { Observable } from 'rxjs';
import { NotificationService } from '../../../shared/services/notification.service';

const initialState: StateWithPagination<Partner[]> = {
    status: Status.Loading,
    data: undefined,
    pagination: {
        pageIndex: 1,
        pageSize: 10,
        total: 0,
    }
};

@Injectable({
    providedIn: 'root'
})
export class PartnerListStoreService {
    private readonly httpPartnerListService = inject(HttpPartnerListService);
    private readonly notification = inject(NotificationService);

    private readonly _state = signal<StateWithPagination<Partner[]>>(initialState);

    // Selectors
    status = computed(() => this._state().status);
    partners = computed(() => this._state().data);
    pageIndex = computed(() => this._state().pagination.pageIndex);
    pageSize = computed(() => this._state().pagination.pageSize);
    total = computed(() => this._state().pagination.total);

    init(): void {
        this.getPartners();
    }

    getPartners(pageIndex: number = 1, pageSize: number = 10): void {

        let offset = pageIndex === 1 ? 0 : (pageIndex * pageSize) - pageSize;

        this._state.update(data => ({
            ...data,
            status: Status.Loading,
            pagination: {
                ...data.pagination,
                pageIndex: data.pagination.pageSize !== pageSize || offset >= data.pagination.total ? 1 : pageIndex,
                pageSize,
            }
        }));

        if(offset >= this.total()) {
            offset = 0;
        } 
    
        this.httpPartnerListService.getPartners(
            offset,
            pageSize
        ).subscribe(
            data => {
                this._state.update(state => ({
                    ...state,
                    status: Status.Success,
                    data,
                    pagination: {
                        ...state.pagination,
                        total: data.length
                    }
                }));
            },
            error => {
                this._state.update(state => ({
                    ...state,
                    status: Status.Error,
                    data: undefined
                }));
            }
        );
    }

    deletePartner(partnerId: number): void {
        this.httpPartnerListService.deletePartner(partnerId).subscribe(
            (_) => {
                this.getPartners(this.pageIndex(), this.pageSize());
                this.notification.openSuccess();
            },
            (error) => {
                console.error(error);
            }
        );
    }
}