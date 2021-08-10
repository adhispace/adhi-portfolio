import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from '../theme/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  activeTheme: any;
  openMenu = true;

  constructor(public themeService: ThemeService, public router: Router) { }

  ngOnInit(): void {
    this.activeTheme = this.themeService.getActiveTheme();
  }

  toggleTheme() {
    if (this.activeTheme.name === 'dark') {
      this.themeService.setActiveTheme('light');
    }
    else {
      this.themeService.setActiveTheme('dark');
    }
    this.activeTheme = this.themeService.getActiveTheme();
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }

}
