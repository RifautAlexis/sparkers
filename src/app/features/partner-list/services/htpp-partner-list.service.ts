import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Partner } from '../models/partner';

@Injectable({
    providedIn: 'root'
})
export class HttpPartnerListService {
    private readonly http = inject(HttpClient);

    getPartners(): Observable<Partner[]> {
        return this.http.get<Partner[]>(`979d68df-a634-439a-a759-f5449137ec5f`);
    }
}