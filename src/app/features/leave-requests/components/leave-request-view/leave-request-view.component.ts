import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { LeaveRequestService } from '../../services/leave-request.service';
import { LoaderComponent } from "../../../../shared/components/loader/loader.component";


@Component({
  selector: 'app-leave-request-view',
  standalone: true,
  imports: [MatCardModule, LoaderComponent],
  templateUrl: './leave-request-view.component.html',
  styleUrl: './leave-request-view.component.scss',
})
export class LeaveRequestViewComponent {
  leaveRequest: any = {
    id: 1,
    employeeName: 'John Doe',
    startDate: '2023-10-01',
    endDate: '2023-10-05',
    reason: 'Vacation',
    remaining: 10,
    status: 'pending',
  };
  loading: boolean = false;

  constructor(
    private router: Router,
    private leaveRequestService: LeaveRequestService
  ) {}

  ngOnInit() {
    // Simulate fetching data from an API
    this.leaveRequest = {
      id: 1,
      employeeName: 'John Doe',
      startDate: '2023-10-01',
      endDate: '2023-10-05',
      reason: 'Vacation',
      remaining: 10,
      status: 'pending',
    };
  }

  getLeaveRequestDetails(id: number) {
    this.loading = true;

    this.leaveRequestService.getLeaveReqById(id).subscribe({
      next: (res: any) => {
        this.leaveRequest = res?.data?.leaveRequest?.data;
        this.loading = false;
      },
      error: (err: any) => {
        this.loading = false;
      },
    });
  }

  backToList() {
    this.router.navigate(['/layout/leave-request-list/1']);
  }
}
