import { LayoutHeaderComponent } from '../layout-header/layout-header.component';
import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
   CommonModule,
    RouterModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    LayoutHeaderComponent
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
@ViewChild('sidenav') sidenav!: MatSidenav;
  
  navItems = [
    { name: 'Dashboard', icon: 'dashboard', link: '/layout/dashboard' },
    { name: 'Leaves Reuests', icon: 'person', link: '/layout/leave-request-list/1' },
  ];

}
