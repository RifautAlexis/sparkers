import { inject, Injectable } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Injectable({providedIn: 'root'})
export class NotificationService {
    private readonly notification = inject(NzNotificationService);
    
    openSuccess(message: string = ''): void {
        this.notification.create(
            'success',
            'Success',
            !!message ? message : 'Your request was successful',
            {
                nzPauseOnHover: true,
                nzStyle: {
                    backgroundColor: '#ccffcc',
                },
            },
          );
    }
    
    openError(message: string = ''): void {
        this.notification.create(
            'error',
            'Error',
            !!message ? message : 'An error occurred',
            {
                nzPauseOnHover: true,
                nzStyle: {
                    backgroundColor: '#ffbfbf',
                },
            },
          );
    }
}