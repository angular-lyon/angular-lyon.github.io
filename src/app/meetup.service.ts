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

  /** Lil' trick used here:
   *  because of CORS restrictions this code work only server-side,
   *  using the TransferHttpCacheModule the client does not send another request. */
  getUpcomingEvent(): Observable<Meetup | null> {
    return this.http
      .get<Meetup[]>(this.baseUrl + "/Angular-Lyon/events")
      .pipe(map(([firstEvent]) => firstEvent ?? null));
  }

  getPastEvents(): Observable<Meetup[]> {
    return this.http.get<Meetup[]>(
      this.baseUrl + "/Angular-Lyon/events?status=past"
    );
  }
}
