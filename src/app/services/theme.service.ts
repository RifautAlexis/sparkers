import { computed, Injectable, signal } from '@angular/core';
import { ThemeType } from '../shared/models/theme-type';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  currentTheme = signal(ThemeType.Default);

  isLightTheme = computed(() => this.currentTheme() === ThemeType.Default);

  loadTheme(firstLoad: boolean = true): Promise<Event> {
    const theme = this.currentTheme();

    if (firstLoad) {
      document.documentElement.classList.add(theme);
    }

    return new Promise<Event>((resolve, reject) => {
      this.loadCss(`${theme}.css`, theme).then(
        (res) => {
          if (!firstLoad) {
            document.documentElement.classList.add(theme);
          }

          this.removeUnusedTheme(this.reverseTheme(theme));
          resolve(res);
        },
        (rej) => reject(rej)
      );
    });
  }

  toggleTheme(): Promise<Event> {
    this.currentTheme.set(this.reverseTheme(this.currentTheme()));
    return this.loadTheme(false);
  }

  private reverseTheme(theme: ThemeType): ThemeType {
    return theme === ThemeType.Default ? ThemeType.Dark : ThemeType.Default;
  }

  private removeUnusedTheme(theme: ThemeType): void {
    document.documentElement.classList.remove(theme);
    const removedThemeStyle = document.getElementById(theme);

    if (removedThemeStyle) {
      document.head.removeChild(removedThemeStyle);
    }
  }

  private loadCss(url: string, id: string): Promise<Event> {
    return new Promise<Event>((resolve, reject) => {
      const style = document.createElement('link');
      style.rel = 'stylesheet';
      style.href = url;
      style.id = id;
      style.onload = resolve;
      style.onerror = reject;
      document.head.append(style);
    });
  }
}
