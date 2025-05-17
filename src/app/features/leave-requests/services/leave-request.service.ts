import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LeaveRequestService {
  apiUrl = `${environment.url}/api/`;

  constructor(private http: HttpClient) {}

  getLeavesReqList(body: any) {
    return this.http.post(this.apiUrl + `leaves/getLeavesReqList`, body);
  }

  getLeaveReqById(id: number) {
    return this.http.get(this.apiUrl + `leaves/getrequestById?id=${id}`);
  }

  createLeaveRequest(body: any) {
    return this.http.post(this.apiUrl + `leaves/createLeaveRequest`, body);
  }
}
