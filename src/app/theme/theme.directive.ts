import { Directive, ElementRef, OnInit } from '@angular/core';
import { Theme } from './symbols';
import { ThemeService } from './theme.service';

@Directive({
  selector: '[app-theme]'
})
export class ThemeDirective implements OnInit {

  constructor(
    public themeService: ThemeService,
    public elementRef: ElementRef
  ) { }

  ngOnInit() {
    const activeTheme = this.themeService.getActiveTheme();
    if (activeTheme) {
      this.updateTheme(activeTheme);
    }
    this.themeService.themeSubject$.subscribe((theme: any) => {
      this.updateTheme(theme);
    });
  }

  updateTheme(theme: Theme) {
    for (const key in theme.properties) {
      this.elementRef.nativeElement.style.setProperty(key, theme.properties[key]);
    }
  }

}
