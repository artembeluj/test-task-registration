import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormDatepickerComponent } from './form-datepicker/form-datepicker.component';
import { FormInputComponent } from './form-input/form-input.component';
import { FormAutocompleteComponent } from './form-autocomplete/form-autocomplete.component';
import { SharedModule } from '@shared/shared.module';
import { FormSelectComponent } from './form-select/form-select.component';
import { IConfig, NgxMaskModule } from 'ngx-mask';

const maskConfigFunction: () => Partial<IConfig> = () => {
  return {
    validation: true,
  };
};

@NgModule({
  declarations: [
    FormDatepickerComponent,
    FormInputComponent,
    FormAutocompleteComponent,
    FormSelectComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    NgxMaskModule.forRoot(maskConfigFunction),
  ],
  exports: [
    FormDatepickerComponent,
    FormInputComponent,
    FormAutocompleteComponent,
    FormSelectComponent
  ]
})
export class FormElementsModule { }
