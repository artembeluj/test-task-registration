import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FlagSelect } from '../../../../shared/interfaces/select.interface';
const noop = () => { };

@Component({
  selector: 'app-form-select',
  templateUrl: './form-select.component.html',
  styleUrls: ['./form-select.component.scss', '../../form-elements/form-elements.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: FormSelectComponent,
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormSelectComponent implements ControlValueAccessor {
  @Input() public title?: string;
  @Input() public placeholder!: string;
  @Input() public isError!: boolean;
  @Input() public errorMessage!: string;
  @Input() public isRequired?: boolean;
  @Input() public disabled?: boolean;
  public flags: {value: string, title: string} [] = [
  {title: '🇺🇸', value: '+1'},
  {title: '🇵🇪', value: '+2'},
  {title: '🇭🇹', value: '+3'}
]

  private _value!: FlagSelect;

  public get value(): FlagSelect {
    return this._value;
  }

  @Input() public set value(val: FlagSelect) {
    this._value = val;
    this.onChange(this._value);
  }

  public compareObjects(current: FlagSelect, compare: FlagSelect): boolean {
    return current.value === compare.value;
  }

  public registerOnTouched: () => void = noop;
  public onChange: (_: any) => void = noop;

  public writeValue(value: FlagSelect): void {
    this.value = value;
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }
}
