import { Component, OnInit } from '@angular/core';
import { MeetupService } from './meetup.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-lyon';

  upcomingEvent = null;
  pastEvents = [];

  constructor(private meetup: MeetupService) {}

  async ngOnInit() {
    const [ upcomingEvent, pastEvents ] = await Promise.all([
      this.meetup.getUpcomingEvent(),
      this.meetup.getPastEvents()
    ]);
    this.upcomingEvent = upcomingEvent.data[0];
    this.pastEvents = pastEvents.data;
  }
}
