import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Partner } from '../models/partner';
import { getRandomErrorUrl, randomOccuringError } from '../../../shared/utils';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class HttpPartnerListService {
  private readonly http = inject(HttpClient);

  getPartners(offset: number = 0, limit: number = 10): Observable<Partner[]> {
    const url = randomOccuringError()
      ? '84432d36-9bc2-4815-9bbc-2bbe16ba1b49' // 500
      : 'c7d86698-7bf2-4968-b0f7-2f1d83635869';

    return this.http.get<Partner[]>(
      `${url}`,
      {
        params: {
          offset: offset.toString(),
          limit: limit.toString(),
        },
      }
    );
  }

  deletePartner(id: number): Observable<void> {
    const url = randomOccuringError()
      ? getRandomErrorUrl([
          '84432d36-9bc2-4815-9bbc-2bbe16ba1b49', // 500
          '5470d0f8-ac90-4c7b-952a-c6f9d61daeb0', //404
        ])
      : 'fbd8edd7-5a27-4c2b-ad8b-067397a9f7f1';

    return this.http.delete<void>(`${url}/${id}`);
  }

  createPartner(toCreate: Partial<Partner>): Observable<Partner> {
    const url = randomOccuringError()
      ? getRandomErrorUrl([
          '84432d36-9bc2-4815-9bbc-2bbe16ba1b49', // 500
          '2f8920c5-2ea7-4b0b-90a5-7df109b19049', // 400
        ])
      : '1b3a5a95-a0c8-4e3c-b734-2fe099f4a7d0';

    return this.http.post<Partner>(`${url}`, {
      name: toCreate.name,
      reference: toCreate.reference,
      locale: toCreate.locale,
      expirationTime: formatDate(toCreate.expirationTime!, 'yyyy-MM-ddTHH:mm:ss+00:00', 'en'),
    });
  }

  updatePartner(toEdit: Partner): Observable<Partner> {
    const url = randomOccuringError()
      ? getRandomErrorUrl([
          '84432d36-9bc2-4815-9bbc-2bbe16ba1b49', // 500
          '2f8920c5-2ea7-4b0b-90a5-7df109b19049', // 400
          '5470d0f8-ac90-4c7b-952a-c6f9d61daeb0', //404
        ])
      : '47e8e99b-f146-4897-88bd-b9752d9e130f';

    return this.http.put<Partner>(`${url}/${toEdit.id}`, {
      name: toEdit.name,
      reference: toEdit.reference,
      locale: toEdit.locale,
      expirationTime: formatDate(toEdit.expirationTime, 'yyyy-MM-ddTHH:mm:ss+00:00', 'en'),
    });
  }
}
