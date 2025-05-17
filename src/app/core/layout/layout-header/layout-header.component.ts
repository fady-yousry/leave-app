import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-layout-header',
  standalone: true,
  imports: [],
  templateUrl: './layout-header.component.html',
  styleUrl: './layout-header.component.scss',
})
export class LayoutHeaderComponent {
  constructor() {}

  ngOnInit() {}

  showLogOut = false;

  onLogOut() {
    localStorage.clear();
    sessionStorage.clear();
  }
}
