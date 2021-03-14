import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: "app-root",
  template: `
    <app-toolbar></app-toolbar>
    <app-banner></app-banner>

    <main class="content" role="main">
      <router-outlet></router-outlet>
    </main>

    <footer>
      <span>Communauté Angular Lyon.</span>
    </footer>
  `,
  styles: [
    `
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
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  ngOnInit() {}
}
