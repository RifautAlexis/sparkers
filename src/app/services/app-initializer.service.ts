import { APP_INITIALIZER, FactoryProvider } from "@angular/core";
import { ThemeService } from "./theme.service";

export const appInitializerProvider: FactoryProvider[] = [
    {
        provide: APP_INITIALIZER,
        useFactory: (themeService: ThemeService) => async () => {
            return await themeService.loadTheme();
        },
        deps: [ThemeService],
        multi: true,
    }
];