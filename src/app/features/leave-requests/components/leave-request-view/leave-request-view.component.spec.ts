import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveRequestViewComponent } from './leave-request-view.component';

describe('LeaveRequestViewComponent', () => {
  let component: LeaveRequestViewComponent;
  let fixture: ComponentFixture<LeaveRequestViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeaveRequestViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaveRequestViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
