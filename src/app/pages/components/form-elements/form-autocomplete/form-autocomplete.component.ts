import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
const noop = () => { };

@Component({
  selector: 'app-form-autocomplete',
  templateUrl: './form-autocomplete.component.html',
  styleUrls: ['./form-autocomplete.component.scss', '../../form-elements/form-elements.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: FormAutocompleteComponent,
      multi: true
    }
  ],
})
export class FormAutocompleteComponent implements ControlValueAccessor {
  @Input() public title?: string;
  @Input() public placeholder!: string;
  @Input() public isError!: boolean;
  @Input() public errorMessage!: string;
  @Input() public isRequired?: boolean;
  @Input() public parameters!: string[];
  @Input() public disabled?: boolean;

  private _value!: string;

  public get value(): string {
    return this._value;
  }

  @Input() public set value(val: string) {
    this._value = val;
    this.onChange(this._value);
  }

  public registerOnTouched: () => void = noop;
  public onChange: (_: any) => void = noop;

  public writeValue(value: any): void {
    this.value = value;
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }
}
