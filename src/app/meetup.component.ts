import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, NgModule, OnInit } from '@angular/core';

import { Meetup } from './meetup.service';

@Component({
  selector: "app-meetup",
  template: `
    <article class="card">
      <a [href]="event.link">{{ event.name }}</a>
      <div [innerHTML]="event.description"></div>
    </article>
  `,
  styles: [
    `
      .card a {
        font-weight: bold;
        display: block;
        margin-bottom: 8px;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MeetupComponent implements OnInit {
  @Input() event: Meetup;

  constructor() {}

  ngOnInit(): void {}
}

@NgModule({
  imports: [CommonModule],
  declarations: [MeetupComponent],
  exports: [MeetupComponent],
})
export class MeetupModule {}
