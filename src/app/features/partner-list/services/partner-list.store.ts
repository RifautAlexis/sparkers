import { computed, inject, Injectable, signal } from '@angular/core';
import { State } from '../../../shared/models/state';
import { Partner } from '../models/partner';
import { Status } from '../../../shared/models/status';
import { HttpPartnerListService } from './htpp-partner-list.service';

const initialState: State<Partner[]> = {
    status: Status.Loading,
    data: undefined,
};

@Injectable({
    providedIn: 'root'
})
export class PartnerListStoreService {
    private readonly httpPartnerListService = inject(HttpPartnerListService);

    private readonly _state = signal<State<Partner[]>>(initialState);

    // Selectors
    status = computed(() => this._state().status);
    partners = computed(() => this._state().data);

    init(): void {
        this.getPartners();
    }

    private getPartners(): void {
        this._state.update(data => ({
            ...data,
            status: Status.Loading,
        }));

        this.httpPartnerListService.getPartners().subscribe(
            data => {
                this._state.set({
                    status: Status.Success,
                    data
                });
            },
            error => {
                this._state.set({
                    status: Status.Error,
                    data: undefined
                });
            }
        );
    }
}