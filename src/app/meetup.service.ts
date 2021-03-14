import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { PlatformService } from "./platform.service";

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

  constructor(private http: HttpClient, private platform: PlatformService) {}

  getUpcomingEvent(): Observable<Meetup | null> {
    if (this.platform.isPlatformBrowser() === false) {
      return this.http
        .get<Meetup[]>(this.baseUrl + "/Angular-Lyon/events")
        .pipe(map(([meetup]) => meetup));
    }

    return this.http
      .jsonp<{ data: Meetup[] }>(
        this.baseUrl + "/Angular-Lyon/events",
        "callback"
      )
      .pipe(map(({ data: [meetup] }) => meetup));
  }

  getPastEvents(): Observable<Meetup[]> {
    if (this.platform.isPlatformBrowser() === false) {
      return this.http.get<Meetup[]>(
        this.baseUrl + "/Angular-Lyon/events?status=past"
      );
    }

    return this.http
      .jsonp<{ data: Meetup[] }>(
        this.baseUrl + "/Angular-Lyon/events?status=past",
        "callback"
      )
      .pipe(map(({ data }) => data));
  }
}
