import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { Partner } from './models/partner';

@Component({
    standalone: true,
    templateUrl: './partner-list.component.html',
    imports: [JsonPipe],
})
export class PartnerListComponent implements OnInit {
    private readonly http = inject(HttpClient);

    partners = signal<Partner[]>([]);

    ngOnInit(): void {
        this.http.get<any>(`979d68df-a634-439a-a759-f5449137ec5f`).subscribe((response) => {
            console.log(response);
            this.partners.set(response);
        });
    }
}
