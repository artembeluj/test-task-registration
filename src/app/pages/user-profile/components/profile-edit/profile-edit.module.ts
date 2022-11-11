import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileEditComponent } from './profile-edit.component';
import { ProfileEditRoutingModule } from './profile-edit-routing.module';
import {  ProfileDataModule } from 'src/app/pages/components/profile-data/profile-data.module';

@NgModule({
  declarations: [
    ProfileEditComponent
  ],
  imports: [
    CommonModule,
    ProfileEditRoutingModule,
     ProfileDataModule
  ]
})
export class ProfileEditModule { }
