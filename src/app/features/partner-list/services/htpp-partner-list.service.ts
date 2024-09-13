import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Partner } from '../models/partner';

@Injectable({
    providedIn: 'root'
})
export class HttpPartnerListService {
    private readonly http = inject(HttpClient);

    getPartners(offset: number = 0, limit: number = 10): Observable<Partner[]> {
        return this.http.get<Partner[]>(
            `c7d86698-7bf2-4968-b0f7-2f1d83635869`,// `979d68df-a634-439a-a759-f5449137ec5f`,
            {
                params: {
                    offset: offset.toString(),
                    limit: limit.toString()
                }
            }
        );
    }

    deletePartner(id: number): Observable<void> {
        return this.http.delete<void>(`c7d86698-7bf2-4968-b0f7-2f1d83635869/${id}`);//`979d68df-a634-439a-a759-f5449137ec5f/${id}`);
    }
}