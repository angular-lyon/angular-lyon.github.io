import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { MeetupService } from './meetup.service';

@Component({
  selector: "app-root",
  template: `
    <app-toolbar></app-toolbar>
    <app-banner></app-banner>

    <div class="content" role="main">
      <section>
        <h2>Communauté</h2>
        <p>Notre focus au travers du groupe :</p>
        <app-slider></app-slider>
      </section>

      <section>
        <h2>Prochain évènement</h2>
        <article *ngIf="upcomingEvent$ | push as event; else noUpcomingEvent">
          <div class="card">
            <a [href]="event.link">{{ event.name }}</a>
            <p [innerHTML]="event.description"></p>
          </div>
        </article>
        <ng-template #noUpcomingEvent>
          <p>Pas d'évènement prévu prochainement.</p>
        </ng-template>
      </section>

      <section>
        <h2>Évènements passés</h2>
        <article *ngFor="let event of pastEvents$ | push">
          <div class="card">
            <a [href]="event.link">{{ event.name }}</a>
            <p [innerHTML]="event.description"></p>
          </div>
        </article>
      </section>
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

      .card {
        margin: 12px 0;
      }

      section h2 {
        margin-top: 0;
        margin-bottom: 12px;
      }

      app-slider,
      section {
        margin-top: 38px;
      }

      section:first-child {
        margin-top: 58px;
      }

      section:last-child .card {
        margin-bottom: 0;
      }

      .past-events {
        display: flex;
      }

      .past-events > * {
        width: 40%;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  upcomingEvent$ = this.meetupService.getUpcomingEvent();
  pastEvents$ = this.meetupService.getPastEvents();

  constructor(private meetupService: MeetupService) {}

  ngOnInit() {}
}
