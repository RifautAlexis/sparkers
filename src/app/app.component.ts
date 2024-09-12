import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NgOptimizedImage } from '@angular/common'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NzLayoutModule, NzMenuModule, NgOptimizedImage],
  templateUrl: './app.component.html',
})
export class AppComponent { }
