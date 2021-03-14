import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { MeetupService } from './meetup.service';

@Component({
  selector: "app-root",
  template: `
    <app-toolbar></app-toolbar>
    <app-banner></app-banner>

    <main class="content" role="main">
      <section>
        <h2>Communauté</h2>
        <p>Notre focus au travers du groupe :</p>
        <app-slider></app-slider>
      </section>

      <section>
        <h2>Prochain évènement</h2>
        <article *ngIf="upcomingEvent$ | push as event; else placeholder">
          <div class="card">
            <a [href]="event.link">{{ event.name }}</a>
            <div [innerHTML]="event.description"></div>
          </div>
        </article>
        <ng-template #placeholder>
          <div class="card">
            <p class="placeholder">Pas d'évènement prévu prochainement, patience.</p>
          </div>
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
    </main>

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

      .card a {
        font-weight: bold;
        display: block;
        margin-bottom: 8px;
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
