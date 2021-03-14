import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule, OnInit } from '@angular/core';
import { PushModule } from '@rx-angular/template';

import { MeetupService } from './meetup.service';
import { SliderModule } from './slider.component';

@Component({
  selector: "app-home",
  template: `<section>
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
          <p class="placeholder">
            Pas d'évènement prévu prochainement, patience.
          </p>
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
    </section>`,
  styles: [
    `
      :host {
        width: 100%;
        display: block;
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
export class HomeComponent implements OnInit {
  upcomingEvent$ = this.meetupService.getUpcomingEvent();
  pastEvents$ = this.meetupService.getPastEvents();

  constructor(private meetupService: MeetupService) {}

  ngOnInit(): void {}
}

@NgModule({
  imports: [CommonModule, PushModule, SliderModule],
  declarations: [HomeComponent],
  exports: [HomeComponent],
})
export class HomeModule {}
