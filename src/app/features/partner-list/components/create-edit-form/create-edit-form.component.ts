import { Component, inject } from '@angular/core';
import { NZ_DRAWER_DATA, NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzInputModule } from 'ng-zorro-antd/input';
import { AbstractControl, FormControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { COUNTRY } from '../../../../shared/models/country';
import { Partner } from '../../models/partner';

@Component({
  selector: 'app-partner-create',
  standalone: true,
  templateUrl: './create-edit-form.component.html',
  imports: [NzFormModule, NzSelectModule, NzDatePickerModule, NzInputModule, ReactiveFormsModule, NzButtonModule],
})
export class CreateEditFormComponent {
  private readonly drawerRef = inject(NzDrawerRef<string>);
  private readonly fb = inject(NonNullableFormBuilder)

  nzData: Partner | undefined = inject(NZ_DRAWER_DATA);

  countries: { label: string; value: string }[] = Object.entries(COUNTRY).map(
    ([value, label]) => ({ value, label })
  );

  userForm: FormGroup<{
    name: FormControl<string>;
    reference: FormControl<string>;
    locale: FormControl<string>;
    expirationTime: FormControl<Date>;
  }>;

  constructor() {
    this.userForm = this.fb.group({
        name: [this.nzData?.name ?? '', [Validators.required]],
        reference: [this.nzData?.reference ?? '', [Validators.required]],
        locale: [this.nzData?.locale ?? '', [Validators.required]],
        expirationTime: [
            this.nzData?.expirationTime ? new Date(this.nzData?.expirationTime) : new Date(),
            [Validators.required]
        ],
    });

    if(!!!this.nzData?.expirationTime) {
        this.userForm.controls.expirationTime?.setValidators(this.notBeforeTodayValidator);
    }
  }

  disabledDate = (current: Date): boolean => current.getTime() <= new Date().getTime();

  notBeforeTodayValidator: ValidatorFn = (control: AbstractControl) => {
    if(!(control && control.value)) {
        return null;
    }
    
    if (control.value.getTime() <= new Date().getTime()) {
      return { error: true, notBeforeToday: true };
    }
    return null;
  };

  submitForm(): void {
    this.drawerRef.close(this.userForm.value);
  }

  resetForm(e: MouseEvent): void {
    e.preventDefault();
    this.userForm.reset();
  }

  close(): void {
    this.drawerRef.close(undefined);
  }
}
