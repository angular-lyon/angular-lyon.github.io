import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule, OnInit } from '@angular/core';
import { PushModule } from '@rx-angular/template';

import { MeetupModule } from './meetup.component';
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
      <!-- Note: push pipe work only using the 'native' strategy server side. -->
      <app-meetup
        *ngIf="upcomingEvent$ | push: 'native' as event; else placeholder"
        [event]="event"
      >
      </app-meetup>
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
      <app-meetup
        *ngFor="let event of pastEvents$ | push: 'native'"
        [event]="event"
      >
      </app-meetup>
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
  imports: [CommonModule, PushModule, SliderModule, MeetupModule],
  declarations: [HomeComponent],
  exports: [HomeComponent],
})
export class HomeModule {}
