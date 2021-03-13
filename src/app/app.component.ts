import { Component, OnInit } from "@angular/core";

import { MeetupService } from "./meetup.service";

@Component({
  selector: "app-root",
  template: `
    <app-toolbar></app-toolbar>
    <app-banner></app-banner>

    <div class="content" role="main">
      <h2>Communauté</h2>
      <p>Notre focus au travers du groupe:</p>

      <app-slider></app-slider>

      <h2>Prochain évènement</h2>

      <div
        class="card-container"
        *ngIf="upcomingEvent as event; else noUpcomingEvent"
      >
        <div class="card">
          <a [href]="event.link">{{ event.name }}</a>
          <p [innerHTML]="event.description"></p>
        </div>
      </div>

      <ng-template #noUpcomingEvent>
        <p>Pas d'évènement prévu prochainement.</p>
      </ng-template>

      <h2>Évènements passés</h2>
      <div class="card-container" *ngFor="let event of pastEvents">
        <div class="card">
          <a [href]="event.link">{{ event.name }}</a>
          <p [innerHTML]="event.description"></p>
        </div>
      </div>
    </div>

    <footer>
      <span>Communauté Angular Lyon.</span>
    </footer>
  `,
  styles: [
    `
      :host {
        width: 100%;
        display: block;
      }

      footer {
        margin-top: 28px;
        padding: 2rem 0;
        display: flex;
        align-items: center;
        justify-content: center;
        line-height: 20px;
        background-color: #eee;
        width: 100%;
      }

      .card-container:last-child .card {
        margin-bottom: 0;
      }

      footer a {
        display: flex;
        align-items: center;
      }

      .past-events {
        display: flex;
      }

      .past-events > * {
        width: 40%;
      }
    `,
  ],
})
export class AppComponent implements OnInit {
  upcomingEvent = null;
  pastEvents = [];

  constructor(private meetup: MeetupService) {}

  async ngOnInit() {
    const [upcomingEvent, pastEvents] = await Promise.all([
      this.meetup.getUpcomingEvent(),
      this.meetup.getPastEvents(),
    ]);
    this.upcomingEvent = upcomingEvent.data[0];
    this.pastEvents = pastEvents.data;
  }
}
