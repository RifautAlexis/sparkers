import { Status } from './../../shared/models/status';
import { Component, inject, signal } from '@angular/core';
import { PartnerListStoreService } from './services/partner-list.store';
import { NzTableModule, } from 'ng-zorro-antd/table';
import { Partner } from './models/partner';
import { ColumnDefinition } from "../../shared/models/column-definition";

@Component({
    standalone: true,
    templateUrl: './partner-list.component.html',
    imports: [NzTableModule],
})
export class PartnerListComponent {
    readonly store = inject(PartnerListStoreService);

    Status = Status;

    columnDefinitions: ColumnDefinition<Partner>[] = [
        {
            name: 'Name',
            sortOrder: 'ascend',
            sortFn: (a: Partner, b: Partner) => a.name.localeCompare(b.name),
            listOfFilter: [],
            filterFn: null,
            sortDirections: ['ascend', 'descend', null],
            filterMultiple: true,
        },
        {
            name: 'Reference',
            sortOrder: null,
            sortFn: (a: Partner, b: Partner) => a.name.localeCompare(b.name),
            listOfFilter: [],
            filterFn: null,
            sortDirections: ['ascend', 'descend', null],
            filterMultiple: true,
        },
        {
            name: 'Country',
            sortOrder: null,
            sortFn: null, // (a: Partner, b: Partner) => a.name.localeCompare(b.name),
            listOfFilter: [],
            filterFn: null, // (list: Partner[], item: Partner) => list.filter((partner) => partner.country === item.country)
            sortDirections: ['ascend', 'descend', null],
            filterMultiple: true,
        },
        {
            name: 'Expiration Date',
            sortOrder: null,
            sortFn: (a: Partner, b: Partner) => a.name.localeCompare(b.name),
            listOfFilter: [],
            filterFn: null,
            sortDirections: ['ascend', 'descend', null],
            filterMultiple: true,
        },
    ];

    constructor() {
        this.store.init();
    }
}
