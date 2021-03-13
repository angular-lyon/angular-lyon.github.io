import { CommonModule } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  NgModule,
  OnInit,
} from "@angular/core";

@Component({
  selector: "app-toolbar",
  template: ` <div class="toolbar" role="banner">
    <div class="brand">
      <img width="40" alt="Angular Logo" src="/assets/angular_white.svg" />
      <strong>Angular Lyon</strong>
    </div>
    <div class="spacer"></div>
    <span>Nous retrouver</span>
    <div class="socials">
      <a
        aria-label="Angular Lyon on Twitter"
        href="https://twitter.com/angular_lyon"
        title="Twitter de Angular Lyon"
      >
        <img src="/assets/twitter.svg" alt="Twitter icon" />
      </a>
      <a
        aria-label="Angular Lyon on Slack"
        href="https://angular-lyon.slack.com/"
        title="Slack de Angular Lyon"
      >
        <img src="/assets/slack.svg" alt="Slack icon" />
      </a>
      <a
        aria-label="Angular Lyon on GitHub"
        href="https://github.com/angular-lyon"
        title="GitHub de Angular Lyon"
      >
        <img src="/assets/github.svg" alt="GitHub icon" />
      </a>
    </div>
  </div>`,
  styles: [
    `
      .toolbar {
        height: 60px;
        display: flex;
        align-items: center;
        background-color: #191919;
        color: white;
      }

      .socials {
        margin-right: 16px;
        margin-left: 8px;
      }

      .socials img {
        height: 22px;
        width: 22px;
        margin: 0 6px;
      }

      .brand {
        display: flex;
        align-items: center;
        margin: 0 16px;
      }

      .brand img {
        margin-right: 8px;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

@NgModule({
  imports: [CommonModule],
  declarations: [ToolbarComponent],
  exports: [ToolbarComponent],
})
export class ToolbarModule {}
