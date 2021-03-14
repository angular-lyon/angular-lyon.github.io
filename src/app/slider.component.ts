import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';
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
        class="card"
        role="button"
        tabindex="0"
        [attr.aria-pressed]="index === activeIndex ? true : false"
        [autofocus]="index === activeIndex ? true : false"
        (click)="setActive(index)"
      >
        <span class="icon">{{ slide.icon }}</span>
        <p>{{ slide.description }}</p>
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
        justify-content: center;
      }

      .card:first-child {
        margin-left: 0;
      }

      .card:last-child {
        margin-right: 0;
      }

      .card {
        display: flex;
        flex-direction: column;
        flex-basis: 180px;
        text-align: center;
        cursor: pointer;
      }

      .icon {
        display: block;
        margin-bottom: 8px;
        text-align: center;
        font-size: 22px;
      }

      .card:focus {
        transform: translateY(-3px);
        background: #fff;
        box-shadow: 0 2px 10px rgb(0 0 0 / 11%);
        outline: none;
      }

      .details {
        margin: 20px 0;
        font-size: 1.4rem;
        font-style: italic;
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
      detail:
        "Des discussions libres pour les gurus, les rookies ou simplement les curieux.",
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
      detail:
        "La pratique d'un sujet en particulier au travers de travaux guidés.",
      icon: "🛠",
    },
    {
      value: "bring-your-problem",
      description: "Ramène ton problème.",
      detail:
        "On réfléchi à une solution ensemble, puis on propose un workshop pour le résoudre.",
      icon: "🐞",
    },
  ];

  activeIndex = 0;

  timer$ = interval(5_000).pipe(
    tap(() => {
      this.setActive(
        this.activeIndex + 1 > this.slides.length - 1 ? 0 : this.activeIndex + 1
      );
      this.cd.detectChanges();
    })
  );

  slideSub: Subscription;

  constructor(
    private cd: ChangeDetectorRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.timer$.subscribe();
    }
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.slideSub && this.slideSub.unsubscribe();
    }
  }

  setActive(index: number): void {
    this.activeIndex = index;
    this.slideSub && this.slideSub.unsubscribe();
    this.slideSub = this.timer$.subscribe();
  }
}

@NgModule({
  imports: [CommonModule, AutofocusModule],
  declarations: [SliderComponent],
  exports: [SliderComponent],
})
export class SliderModule {}
