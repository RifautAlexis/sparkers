import { ThemeService } from './services/theme.service';
import { Component, computed, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NgOptimizedImage } from '@angular/common'
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NzLayoutModule, NzMenuModule, NgOptimizedImage, NzIconModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  readonly themeService = inject(ThemeService);

  themeIcon = computed(() => (this.themeService.isLightTheme() ? 'sun' : 'moon'));

  toggleTheme() {
    this.themeService.toggleTheme().then();
  }
}
