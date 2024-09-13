import { COUNTRY } from './../country';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'country',
    standalone: true,
})
export class CountryPipe implements PipeTransform {
    transform(value: string): any {
        if(!value) return 'Unknown';

        const country = COUNTRY[value];

        return country ? country : 'Unknown';
    }
}