import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
const noop = () => { };

@Component({
  selector: 'app-form-datepicker',
  templateUrl: './form-datepicker.component.html',
  styleUrls: ['./form-datepicker.component.scss', '../../form-elements/form-elements.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: FormDatepickerComponent,
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormDatepickerComponent implements ControlValueAccessor {
  @Input() public title!: string;
  @Input() public placeholder!: string;
  @Input() public isRequired?: boolean;
  @Input() public isError!: boolean;
  @Input() public disabled?: boolean;
  public today: Date = new Date();
  public isOpened: boolean = false;
  public registerOnTouched: () => void = noop;

  private onChange: (_: any) => void = noop;
  private _value: any;

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public pickerOpen(): void {
    this.isOpened = true;
  }

  public pickerClose(): void {
    this.isOpened = false;
  }

  public get value(): any {
    return this._value;
  }

  @Input() public set value(val: any) {
    this._value = val;
    this.onChange(this._value);
  }

  public writeValue(value: any): void {
    this.value = value;
  }
}