import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule, OnInit } from '@angular/core';

import { AutofocusModule } from './autofocus.directive';

@Component({
  selector: "app-slider",
  template: ` <input type="hidden" #selection />
    <div class="card-container">
      <div
        *ngFor="let slide of slides; let first = first"
        tabindex="0"
        class="card"
        [autofocus]="first ? true : false"
        (click)="active = slide.value"
      >
        <span class="icon">{{ slide.icon }}</span>
        <span>{{ slide.description }}</span>
      </div>
    </div>

    <div class="details" [ngSwitch]="active">
      <span *ngSwitchDefault>Des discussions libres.</span>
      <span *ngSwitchCase="'talks'">
        Des talks à propos d'Angular et son écosystème.
      </span>
      <span *ngSwitchCase="'workshops'">
        La pratique au travers de travaux guidés.
      </span>
      <span *ngSwitchCase="'bring-your-problem'"
        >On réfléchi à une solution, puis on propose un workshop pour le
        résoudre.
      </span>
    </div>`,
  styles: [
    `
      :host {
        display: block;
      }

      .card-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-top: 16px;
      }

      .card {
        display: flex;
        flex-direction: column;
        cursor: pointer;
      }

      .icon {
        text-align: center;
        font-size: 18px;
      }

      .card:focus {
        transform: translateY(-2px);
        box-shadow: 0 2px 10px rgb(0 0 0 / 11%);
        outline: none;
      }

      .details {
        margin: 20px 0;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SliderComponent implements OnInit {
  slides = [
    { value: "discussions", description: "Discussions libres.", icon: '👥' },
    { value: "talks", description: "Talks sur des sujets associés à Angular.", icon: '🗣' },
    { value: "workshops", description: "Workshops autour d'Angular.", icon: '🛠' },
    { value: "bring-your-problem", description: "Ramène ton problème.", icon: '🐞' },
  ];

  active = this.slides[0].value;

  ngOnInit(): void {}
}



@NgModule({
  imports: [CommonModule, AutofocusModule],
  declarations: [SliderComponent],
  exports: [SliderComponent],
})
export class SliderModule {}
