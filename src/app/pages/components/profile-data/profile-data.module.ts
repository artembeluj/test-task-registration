import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileInfoComponent } from './profile-data.component';
import { SharedModule } from '@shared/shared.module';
import { AvatarModule } from 'src/app/pages/components/avatar/avatar.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormElementsModule } from 'src/app/pages/components/form-elements/form-elements.module';

@NgModule({
  declarations: [
    ProfileInfoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AvatarModule,
    ReactiveFormsModule,
    FormElementsModule
  ],
  exports: [
    ProfileInfoComponent
  ]
})
export class  ProfileDataModule { }
