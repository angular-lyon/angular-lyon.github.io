import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MeetupService {
  private baseUrl = 'https://api.meetup.com';

  constructor(private http: HttpClient) {}

  getUpcomingEvent(): Promise<any> {
    return this.http.jsonp(this.baseUrl + '/Angular-Lyon/events', 'callback').toPromise();
  }

  getPastEvents(): Promise<any> {
    return this.http.jsonp(this.baseUrl + '/Angular-Lyon/events?status=past', 'callback').toPromise();
  }
}
