import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { LeaveRequestService } from '../../services/leave-request.service';

@Component({
  selector: 'app-leave-request-add',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatButtonModule,
    MatCardModule,
    CommonModule,
  ],
  templateUrl: './leave-request-add.component.html',
  styleUrl: './leave-request-add.component.scss',
})
export class LeaveRequestAddComponent {
  leaveForm!: FormGroup;
  minDate: Date;
  maxDate: Date;
  submitted = false;
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private leaveRequestService: LeaveRequestService
  ) {
    this.minDate = new Date();
    this.maxDate = new Date();
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.leaveForm = this.fb.group(
      {
        employeeName: [
          '',
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(50),
          ],
        ],
        startDate: ['', [Validators.required]],
        endDate: ['', [Validators.required]],
        reason: [
          '',
          [
            Validators.required,
            Validators.minLength(10),
            Validators.maxLength(500),
          ],
        ],
      },
      { validators: this.dateRangeValidator }
    );
  }

  // Custom validator to ensure end date is after start date
  dateRangeValidator(formGroup: FormGroup) {
    const startDate = formGroup.get('startDate')?.value;
    const endDate = formGroup.get('endDate')?.value;

    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);

      if (end < start) {
        formGroup.get('endDate')?.setErrors({ dateRange: true });
        return { dateRange: true };
      }
    }
    return null;
  }

  // Convenience getter for easy access to form fields
  get f() {
    return this.leaveForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.leaveForm.invalid) {
      return;
    }
    this.loading = true;
    this.leaveRequestService.getLeavesReqList(this.leaveForm.value).subscribe({
      next: (res: any) => {
        // route to get view page with id from response and reset form
        this.loading = false;
      },
      error: (err: any) => {
        this.loading = false;
      },
    });
  }

  resetForm(): void {
    this.submitted = false;
    this.leaveForm.reset();
  }
}
