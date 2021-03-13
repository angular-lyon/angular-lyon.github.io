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

      <input type="hidden" #selection />

      <div class="card-container">
        <div
          class="card card-small"
          (click)="selection.value = 'discussions'"
          tabindex="0"
        >
          <span>Discussions libres.</span>
        </div>

        <div
          class="card card-small"
          (click)="selection.value = 'talks'"
          tabindex="0"
        >
          <span>Talks sur des sujets associés à Angular.</span>
        </div>

        <div
          class="card card-small"
          (click)="selection.value = 'workshops'"
          tabindex="0"
        >
          <span>Workshops autour d'Angular.</span>
        </div>

        <div
          class="card card-small"
          (click)="selection.value = 'bring-your-problem'"
          tabindex="0"
        >
          <span>Ramène ton problème.</span>
        </div>
      </div>

      <div class="details" [ngSwitch]="selection.value">
        <span *ngSwitchDefault>Des discussions libres.</span>
        <span *ngSwitchCase="'talks'"
          >Des talks à propos d'Angular et son écosystème.</span
        >
        <span *ngSwitchCase="'workshops'"
          >La pratique au travers de travaux guidés.</span
        >
        <span *ngSwitchCase="'bring-your-problem'"
          >On réfléchi à une solution, puis on propose un workshop pour le
          résoudre.</span
        >
      </div>

      <h2>Prochain évènement</h2>
      <div class="card-container" *ngIf="upcomingEvent as event">
        <div class="card">
          <a [href]="event.link">{{ event.name }}</a>
          <p [innerHTML]="event.description"></p>
        </div>
      </div>

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
        margin-top: 48px;
        padding: 2rem 0;
        display: flex;
        align-items: center;
        justify-content: center;
        line-height: 20px;
        background-color: #eee;
        width: 100%;
      }

      footer a {
        display: flex;
        align-items: center;
      }

      .card-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-top: 16px;
      }

      .past-events {
        display: flex;
      }

      .past-events > * {
        width: 40%;
      }

      .details {
        margin: 20px 0;
      }

      .card-container .card:not(:last-child) {
        margin-right: 0;
      }

      .card-container .card {
        cursor: pointer;
      }

      .card-container .card:hover {
        transform: translateY(-3px);
        box-shadow: 0 4px 10px rgba(black, 0.12);
      }
    `,
  ],
})
export class AppComponent implements OnInit {
  title = "angular-lyon";

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
