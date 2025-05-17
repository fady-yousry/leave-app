import { Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout/layout.component';

export const routes: Routes = [
  {
    path: 'layout',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'leave-request-list/:page',

        loadComponent: () =>
          import(
            './features/leave-requests/components/leave-requests-list/leave-requests-list.component'
          ).then((m) => m.LeaveRequestsListComponent),
      },
      {
        path: 'leave-request-view/:id',
        loadComponent: () =>
          import(
            './features/leave-requests/components/leave-request-view/leave-request-view.component'
          ).then((m) => m.LeaveRequestViewComponent),
      },
      {
        path: 'leave-request-add',
        loadComponent: () =>
          import(
            './features/leave-requests/components/leave-request-add/leave-request-add.component'
          ).then((m) => m.LeaveRequestAddComponent),
      },
      {
        path: 'dashboard',
        loadComponent: () =>
          import(
            './features/dashboard/components/dashboard/dashboard.component'
          ).then((m) => m.DashboardComponent),
      },
    ],
  },
  { path: '', redirectTo: 'layout', pathMatch: 'full' },
  {
    path: '**',
    loadComponent: () =>
      import('./shared/components/not-found/not-found.component').then(
        (m) => m.NotFoundComponent
      ),
  },
];
