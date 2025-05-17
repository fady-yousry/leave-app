import { Component } from '@angular/core';
import { SharedTableComponent } from '../../../../shared/components/shared-table/shared-table.component';
import { LeaveRequestService } from '../../services/leave-request.service';
import { Router } from '@angular/router';
import { LeaveRequest } from '../../models/LeaveRequest.model';
import { LoaderComponent } from '../../../../shared/components/loader/loader.component';

@Component({
  selector: 'app-leave-requests-list',
  standalone: true,
  imports: [SharedTableComponent, LoaderComponent],
  templateUrl: './leave-requests-list.component.html',
  styleUrl: './leave-requests-list.component.scss',
})
export class LeaveRequestsListComponent {
  loading = false;
  currentPage = 1;
  pageSize = 10;
  searchTerm: any;
  filter: any = 'all';
  leaveRequests: LeaveRequest[] = [];

  constructor(
    private leaveRequestService: LeaveRequestService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getLeavesReqList();

    // Simulate fetching data from an API
    this.leaveRequests = [
      {
        id: 1,
        employeeName: 'John Doe',
        startDate: '2023-10-01',
        endDate: '2023-10-05',
        reason: 'Vacation',
        remaining: 10,
        status: 'pending',
      },
      {
        id: 2,
        employeeName: 'Jane Smith',
        startDate: '2023-10-10',
        endDate: '2023-10-12',
        reason: 'Sick Leave',
        remaining: 8,
        status: 'approved',
      },
      {
        id: 3,
        employeeName: 'Alice Johnson',
        startDate: '2023-10-15',
        endDate: '2023-10-20',
        reason: 'Personal Leave',
        remaining: 5,
        status: 'declined',
      },
      {
        id: 4,
        employeeName: 'Bob Brown',
        startDate: '2023-11-01',
        endDate: '2023-11-04',
        reason: 'Family Emergency',
        remaining: 7,
        status: 'approved',
      },
      {
        id: 5,
        employeeName: 'Carol White',
        startDate: '2023-11-10',
        endDate: '2023-11-14',
        reason: 'Maternity Leave',
        remaining: 20,
        status: 'pending',
      },
      {
        id: 6,
        employeeName: 'David Wilson',
        startDate: '2023-11-15',
        endDate: '2023-11-18',
        reason: 'Conference',
        remaining: 12,
        status: 'approved',
      },
      {
        id: 7,
        employeeName: 'Emily Clark',
        startDate: '2023-11-20',
        endDate: '2023-11-25',
        reason: 'Vacation',
        remaining: 9,
        status: 'declined',
      },
      {
        id: 8,
        employeeName: 'Frank Moore',
        startDate: '2023-11-26',
        endDate: '2023-11-27',
        reason: 'Sick Leave',
        remaining: 6,
        status: 'approved',
      },
      {
        id: 9,
        employeeName: 'Grace Hall',
        startDate: '2023-11-28',
        endDate: '2023-11-30',
        reason: 'Personal Leave',
        remaining: 4,
        status: 'pending',
      },
      {
        id: 10,
        employeeName: 'Henry Allen',
        startDate: '2023-12-01',
        endDate: '2023-12-05',
        reason: 'Vacation',
        remaining: 10,
        status: 'approved',
      },
      {
        id: 11,
        employeeName: 'Isabella Young',
        startDate: '2023-12-06',
        endDate: '2023-12-08',
        reason: 'Medical Leave',
        remaining: 8,
        status: 'pending',
      },
      {
        id: 12,
        employeeName: 'Jack King',
        startDate: '2023-12-09',
        endDate: '2023-12-11',
        reason: 'Sick Leave',
        remaining: 5,
        status: 'declined',
      },
      {
        id: 13,
        employeeName: 'Karen Wright',
        startDate: '2023-12-12',
        endDate: '2023-12-15',
        reason: 'Training',
        remaining: 15,
        status: 'approved',
      },
      {
        id: 14,
        employeeName: 'Leo Scott',
        startDate: '2023-12-16',
        endDate: '2023-12-18',
        reason: 'Religious Holiday',
        remaining: 11,
        status: 'pending',
      },
      {
        id: 15,
        employeeName: 'Mia Green',
        startDate: '2023-12-19',
        endDate: '2023-12-23',
        reason: 'Vacation',
        remaining: 7,
        status: 'declined',
      },
    ];
  }

  getLeavesReqList() {
    this.loading = true;
    let body = {
      page: this.currentPage,
      page_size: this.pageSize,
      search: this.searchTerm,
      filter: {
        status: this.filter,
      },
    };

    this.leaveRequestService.getLeavesReqList(body).subscribe({
      next: (res: any) => {
        this.leaveRequests = res?.data?.leaveRequests?.data;
        this.loading = false;
      },
      error: (err: any) => {
        this.loading = false;
      },
    });
  }

  gotoAddLeaveRequest() {
    this.router.navigate(['layout/leave-request-add']);
  }

  viewLeaveRequest(id: string) {
    this.router.navigate([`layout/leave-request-view/${id}`]);
  }

  selectedFilter(filter: any) {
    this.filter = filter;
    this.getLeavesReqList();
  }

  handleApprove(row: any) {
    // Send approve to API
    // this.getLeavesReqList();
    // or update the list from response
  }

  handleDecline(row: any) {
    // Send decline to API
    // this.getLeavesReqList();
    // or update the list from response
  }
}
