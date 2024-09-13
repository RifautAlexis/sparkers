import { Component, input, output } from '@angular/core';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { Observable } from 'rxjs';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
    selector: 'app-confirm-async',
    standalone: true,
    templateUrl: './confirm-async.component.html',
    imports: [NzPopconfirmModule, NzButtonModule, NzIconModule]
})
export class ConfirmAsyncComponent {
    confirmed = output<void>();

    readonly title = 'Are you sure delete this partner ?';
}
