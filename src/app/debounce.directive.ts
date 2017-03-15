import { Directive, Input, Output, EventEmitter } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[ngModel][debounce]',
})
export class DebounceDirective {
  @Output()
  public onDebounce = new EventEmitter<any>();

  @Input('debounce')
  public debounceTime: number = 500;

  constructor(public model: NgControl) {
  }

  ngOnInit() {
    this.model.valueChanges
      .debounceTime(this.debounceTime)
      .distinctUntilChanged()
      .subscribe(modelValue => {
        if (modelValue) {
          this.onDebounce.emit(modelValue);
        }
      });
  }
}
