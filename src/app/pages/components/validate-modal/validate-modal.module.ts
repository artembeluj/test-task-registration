import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormElementsModule } from 'src/app/pages/components/form-elements/form-elements.module';
import { ValidateModalComponent } from './validate-modal.component';

@NgModule({
  declarations: [
    ValidateModalComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormElementsModule,
    ReactiveFormsModule,
  ],
  exports: [
    ValidateModalComponent,
  ]
})
export class ValidateModalModule { }
