import { CommonModule } from '@angular/common';
import { AfterViewInit, Directive, ElementRef, Input, NgModule } from '@angular/core';

@Directive({
  selector: "[autofocus]",
})
export class AutofocusDirective implements AfterViewInit {
  private focus = false;

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    if (this.focus) {
      this.el.nativeElement && this.el.nativeElement.focus();
    }
  }

  @Input() set autofocus(condition: boolean) {
    this.focus = condition !== false;
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [AutofocusDirective],
  exports: [AutofocusDirective],
})
export class AutofocusModule {}
