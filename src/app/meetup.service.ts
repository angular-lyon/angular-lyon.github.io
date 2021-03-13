import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Meetup {
  link: string;
  name: string;
  description: string;
}

@Injectable({
  providedIn: "root",
})
export class MeetupService {
  private baseUrl = "https://api.meetup.com";

  constructor(private http: HttpClient) {}

  getUpcomingEvent(): Observable<Meetup> {
    return this.http
      .jsonp<{ data: Meetup[] }>(
        this.baseUrl + "/Angular-Lyon/events",
        "callback"
      )
      .pipe(map(({ data: [meetup] }) => meetup));
  }

  getPastEvents(): Observable<Meetup[]> {
    return this.http
      .jsonp<{ data: Meetup[] }>(
        this.baseUrl + "/Angular-Lyon/events?status=past",
        "callback"
      )
      .pipe(map(({ data }) => data));
  }
}
