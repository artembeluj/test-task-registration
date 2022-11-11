import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationProfileComponent } from './registration-profile.component';
import { RegistrationRoutingModule } from './registration-profile-routing.module';
import { SharedModule } from '@shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoadingSpinnerModule } from '@shared/components/loading-spinner/loading-spinner.module';
import { FormElementsModule } from '../components/form-elements/form-elements.module';
import { ProfileCreatingDialogComponent } from '../components/dialogs/profile-creating-dialog/profile-creating-dialog.component';
import {  ProfileDataModule } from '../components/profile-data/profile-data.module';
import { AvatarModule } from '../components/avatar/avatar.module';
import { ValidateModalModule } from '../components/validate-modal/validate-modal.module';


@NgModule({
  declarations: [
    RegistrationProfileComponent,
    ProfileCreatingDialogComponent
  ],
  imports: [
    CommonModule,
    RegistrationRoutingModule,
    SharedModule,
    AvatarModule,
    ValidateModalModule,
    FormElementsModule,
    ReactiveFormsModule,
    LoadingSpinnerModule,
     ProfileDataModule
  ]
})
export class RegistrationProfileModule { }
