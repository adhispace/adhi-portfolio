import { Inject, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ACTIVE_THEME, Theme, THEMES } from './symbols';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  public themeSubject$ = new Subject();

  constructor(
    @Inject(THEMES) public themes: Theme[],
    @Inject(ACTIVE_THEME) public activeTheme: string
  ) { }

  getActiveTheme() {
    const activeTheme = this.themes.find(theme => theme.name === this.activeTheme);
    return activeTheme;
  }

  setActiveTheme(theme: string) {
    this.activeTheme = theme;
    this.themeSubject$.next(this.getActiveTheme());
  }
}
