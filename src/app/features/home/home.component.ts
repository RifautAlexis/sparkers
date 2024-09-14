import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    imports: [FormsModule, NzButtonModule, NzInputModule],
})
export class HomeComponent {
    onSubmit(form: NgForm) {
        console .log('Form Submitted :', form.value);
    }
}
