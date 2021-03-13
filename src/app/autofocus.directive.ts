import { CommonModule } from '@angular/common';
import { AfterViewInit, Directive, ElementRef, Input, NgModule, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: "[autofocus]",
})
export class AutofocusDirective implements OnChanges {
  @Input() autofocus: boolean = false;

  constructor(private el: ElementRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.autofocus.currentValue === true) {
      this.el.nativeElement && this.el.nativeElement.focus({ preventScroll: true });
    }
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [AutofocusDirective],
  exports: [AutofocusDirective],
})
export class AutofocusModule {}
