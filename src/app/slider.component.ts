import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, NgModule, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

import { AutofocusModule } from './autofocus.directive';

@Component({
  selector: "app-slider",
  template: `
    <div class="card-container">
      <div
        *ngFor="let slide of slides; let index = index"
        tabindex="0"
        class="card"
        [autofocus]="index === activeIndex ? true : false"
        (click)="setActive(index)"
      >
        <span class="icon">{{ slide.icon }}</span>
        <span>{{ slide.description }}</span>
      </div>
    </div>

    <div class="details">
      {{ slides[activeIndex].detail }}
    </div>
  `,
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
        background: #fff;
        box-shadow: 0 2px 10px rgb(0 0 0 / 11%);
        outline: none;
      }

      .details {
        text-align: center;
        margin: 20px 0;
        font-size: 1.4rem;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SliderComponent implements OnInit, OnDestroy {
  slides = [
    {
      value: "discussions",
      description: "Discussions libres.",
      detail: "Des discussions libres pour les gurus, les rookies ou simplement les curieux.",
      icon: "👥",
    },
    {
      value: "talks",
      description: "Talks sur des sujets associés à Angular.",
      detail: "Des talks à propos d'Angular et son écosystème.",
      icon: "🗣",
    },
    {
      value: "workshops",
      description: "Workshops autour d'Angular.",
      detail: "La pratique d'un sujet en particulier au travers de travaux guidés.",
      icon: "🛠",
    },
    {
      value: "bring-your-problem",
      description: "Ramène ton problème.",
      detail: "On réfléchi à une solution ensemble, puis on propose un workshop pour le résoudre.",
      icon: "🐞",
    },
  ];

  activeIndex = 0;

  slideSub: Subscription;

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.slideSub = interval(5_000)
      .pipe(
        tap(() => {
          this.setActive(
            this.activeIndex + 1 > this.slides.length - 1
              ? 0
              : this.activeIndex + 1
          );
          this.cd.detectChanges();
        })
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.slideSub.unsubscribe();
  }

  setActive(index: number): void {
    this.activeIndex = index;
  }
}

@NgModule({
  imports: [CommonModule, AutofocusModule],
  declarations: [SliderComponent],
  exports: [SliderComponent],
})
export class SliderModule {}
