import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { PlatformService } from './platform.service';

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

  /** Weird trick used below :
   *  Because of CORS restrictions jsonp is used in dev without prerender.
   *  In production only one GET request is executed on the server-side during the prerender process
   *  because of the TransferHttpCacheModule, it would prevent sending another GET request client-side
   *  and fail for CORS reasons. */
  getUpcomingEvent(): Observable<Meetup | null> {
    if (this.platform.isPlatformBrowser() && environment.production === false) {
      return this.http
        .jsonp<{ data: Meetup[] }>(
          this.baseUrl + "/Angular-Lyon/events",
          "callback"
        )
        .pipe(map(({ data: [event] }) => event ?? null));
    }

    return this.http
      .get<Meetup[]>(this.baseUrl + "/Angular-Lyon/events")
      .pipe(map(([event]) => event ?? null));
  }

  getPastEvents(): Observable<Meetup[]> {
    if (this.platform.isPlatformBrowser() && environment.production === false) {
      return this.http
        .jsonp<{ data: Meetup[] }>(
          this.baseUrl + "/Angular-Lyon/events?status=past",
          "callback"
        )
        .pipe(map(({ data }) => data));
    }

    return this.http.get<Meetup[]>(
      this.baseUrl + "/Angular-Lyon/events?status=past"
    );
  }
}
