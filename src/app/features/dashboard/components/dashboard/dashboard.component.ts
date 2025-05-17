import { Component } from '@angular/core';
import { Statistics } from '../../models/Statistics.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  leavesList: Statistics[] = [];
  ngOnInit() {
    this.leavesList = [
      { title: 'Annual', total_leaves: 15, taken_leaves: 10 },
      { title: 'Emergency', total_leaves: 6, taken_leaves: 2 },
      { title: 'Sick', total_leaves: 90, taken_leaves: 4 },
    ];
  }

  getRemaining(leave: Statistics): number {
    return leave.total_leaves - leave.taken_leaves;
  }

  getPercentage(leave: Statistics): number {
    return Math.round((leave.taken_leaves / leave.total_leaves) * 100);
  }
}
