import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../theme/theme.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  activeTheme: any;

  constructor(public themeService: ThemeService) { }

  ngOnInit(): void {
    this.activeTheme = this.themeService.getActiveTheme();

    this.themeService.themeSubject$.subscribe(theme => this.activeTheme = theme);
  }

}
