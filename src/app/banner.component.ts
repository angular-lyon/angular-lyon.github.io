import { CommonModule } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  NgModule,
  OnInit,
} from "@angular/core";

@Component({
  selector: "app-banner",
  template: ` <div class="cover" role="img"></div>
    <div class="content" role="main">
      <div class="card highlight-card">
        <img alt="Angular Logo" class="logo" src="/assets/angular.svg" />
        <p>
          Animée par des développeurs passionnés, la communauté Angular Lyon se
          concentre sur le partage d'expèrience, d'erreurs, et des bonnes
          pratiques.
        </p>
      </div>
    </div>`,
  styles: [
    `
      :host {
        display: block;
      }

      .content {
        margin-top: -50px;
      }

      .highlight-card {
        background-color: #1976d2;
        text-align: center;
        color: white;
        border: none;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: auto;
        max-width: 650px;
        min-width: 30%;
        line-height: 28px;
        font-size: 1.2rem;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
        padding: 1.2rem 16px 16px;
      }

      .logo {
        position: absolute;
        width: 136px;
        top: -115px;
        filter: drop-shadow( 0px 3px 4px rgba(0, 0, 0, .7));
      }

      .cover {
        background-image: url("/assets/cover_800.jpg");
        background-image: -webkit-image-set(
          url("/assets/cover_1200.jpg") 1x,
          url("/assets/cover_1900.jpg") 2x,
          url("/assets/cover_2400.jpg") 3x,
          url("/assets/cover_3200.jpg") 4x
        );
        background-image: image-set(
          url("/assets/cover_1200.jpg") 1x,
          url("/assets/cover_1900.jpg") 2x,
          url("/assets/cover_2400.jpg") 3x,
          url("/assets/cover_3200.jpg") 4x
        );
        background-position: 50% 50%;
        background-repeat: no-repeat;
        background-size: cover;
        height: 524px;
      }

      @media screen and (max-width: 767px) {
        .cover .card-container > * {
          width: 100%;
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BannerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

@NgModule({
  imports: [CommonModule],
  declarations: [BannerComponent],
  exports: [BannerComponent],
})
export class BannerModule {}
