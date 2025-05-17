import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-shared-table',
  standalone: true,
  imports: [CommonModule, FormsModule, MatCardModule],
  templateUrl: './shared-table.component.html',
  styleUrl: './shared-table.component.scss',
})
export class SharedTableComponent {
  @Input() data: any[] = [];

  @Output() approve = new EventEmitter<any>();
  @Output() decline = new EventEmitter<any>();
  @Output() rowClicked = new EventEmitter<any>();
  @Output() filterChanged = new EventEmitter<any>();

  columns: string[] = ['name', 'from', 'to', 'reason', 'remaining', 'actions'];
  statusOptions: any[] = ['pending', 'approved', 'declined'];
  filteredData: any[] = [];

  searchText = '';
  selectedStatus = '';
  pageSize = 5;
  currentPage = 1;

  ngOnInit() {
    this.applyFilter();
  }

  applyFilter() {
    const lower = this.searchText.toLowerCase();
    this.filteredData = this.data.filter((row) => {
      const matchesSearch =
        row.employeeName.toLowerCase().includes(lower) ||
        row.reason.toLowerCase().includes(lower);
      const matchesStatus = this.selectedStatus
        ? row.status === this.selectedStatus
        : true;
      return matchesSearch && matchesStatus;
    });
    this.currentPage = 1;
  }

  onStatusChange() {
    this.applyFilter();
    this.filterChanged.emit(this.selectedStatus);
  }

  paginatedData(): any[] {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.filteredData.slice(start, start + this.pageSize);
  }

  hasNextPage(): boolean {
    return this.currentPage * this.pageSize < this.filteredData.length;
  }

  nextPage() {
    if (this.hasNextPage()) this.currentPage++;
  }

  prevPage() {
    if (this.currentPage > 1) this.currentPage--;
  }

  onApprove(row: any) {
    this.approve.emit(row);
  }

  onDecline(row: any) {
    this.decline.emit(row);
  }
}
