import { Status } from './../../shared/models/status';
import { Component, effect, inject, signal } from '@angular/core';
import { PartnerListStoreService } from './services/partner-list.store';
import { NzTableModule } from 'ng-zorro-antd/table';
import { Partner } from './models/partner';
import { ColumnDefinition } from '../../shared/models/column-definition';
import { COUNTRY } from '../../shared/models/country';
import { CountryPipe } from '../../shared/models/pipelines/country.pipe';
import { DatePipe } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { FormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  standalone: true,
  templateUrl: './partner-list.component.html',
  styles: [
    `
      [nz-icon] {
        font-size: 20px;
      }
    `,
  ],
  imports: [NzTableModule, CountryPipe, DatePipe, NzIconModule, FormsModule, NzInputModule],
})
export class PartnerListComponent {
  readonly store = inject(PartnerListStoreService);

  searchValue = signal('');
  visible = signal(true);
  listOfDisplayData: Partner[] = [];

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
      width: null,
    },
    {
      name: 'Reference',
      sortOrder: null,
      sortFn: (a: Partner, b: Partner) =>
        a.reference.localeCompare(b.reference),
      listOfFilter: [],
      filterFn: null,
      sortDirections: ['ascend', 'descend', null],
      filterMultiple: true,
      width: null,
    },
    {
      name: 'Country',
      sortOrder: null,
      sortFn: (a: Partner, b: Partner) =>
        COUNTRY[a.locale].localeCompare(COUNTRY[b.locale]),
      listOfFilter: Object.values(COUNTRY).map((country) => ({
        text: country,
        value: country,
      })),
      filterFn: (countriesSelected: string[], item: Partner) =>
        countriesSelected.some(
          (countrySelected) => countrySelected === COUNTRY[item.locale]
        ),
      sortDirections: ['ascend', 'descend', null],
      filterMultiple: true,
      width: null,
    },
    {
      name: 'Expiration Date',
      sortOrder: null,
      sortFn: (a: Partner, b: Partner) =>
        a.expirationTime.localeCompare(b.expirationTime),
      listOfFilter: [],
      filterFn: null,
      sortDirections: ['ascend', 'descend', null],
      filterMultiple: true,
      width: null,
    },
    {
      name: 'Actions',
      sortOrder: null,
      sortFn: null,
      listOfFilter: [],
      filterFn: null,
      sortDirections: [null],
      filterMultiple: false,
      width: '100px',
    },
  ];

  constructor() {
    this.store.init();

    effect(() => {
      this.listOfDisplayData = this.store.partners() ?? [];
    });

    effect(() => {
      if(!!this.store.partners()) {
        this.listOfDisplayData = this.search(this.searchValue());
      }
    });
  }

  search(searchValue: string): Partner[] {
    return this.store.partners()!.filter((item: Partner) => item.name.toLocaleLowerCase().indexOf(searchValue.toLocaleLowerCase()) !== -1);
  }

  reset(_: MouseEvent): void {
    this.searchValue.set('');
  }

  onPageIndexChange(pageIndex: number): void {
    this.store.getPartners(pageIndex, this.store.pageSize());
  }

  onPageSizeChange(pageSize: number): void {
    this.store.getPartners(this.store.pageIndex(), pageSize);
  }
}
