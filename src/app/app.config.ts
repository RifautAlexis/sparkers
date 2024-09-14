import {
  ApplicationConfig,
  provideZoneChangeDetection,
  importProvidersFrom,
  LOCALE_ID,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { en_US, provideNzI18n } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import fr from '@angular/common/locales/fr';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { appInitializerProvider } from './services/app-initializer.service';
import { httpIntercptor } from './interceptors/http.interceptors';
import { errorInterceptor } from './interceptors/error.interceptor';
import { authorizationIntercptor } from './interceptors/authorization.interceptor';

registerLocaleData(fr);

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideNzI18n(en_US),
    importProvidersFrom(FormsModule),
    provideAnimationsAsync(),
    provideHttpClient(withInterceptors([
      httpIntercptor,
      authorizationIntercptor,
      errorInterceptor,
    ])),
    ...appInitializerProvider,
    {
      provide: LOCALE_ID, useValue: 'fr-FR'
    },
  ],
};
