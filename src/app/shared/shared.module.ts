import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ButtonComponent } from './components/button/button.component';
import { BannerComponent } from './components/banner/banner.component';
import { UserNamePipe } from './pipes/user-name.pipe';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    ButtonComponent,
    BannerComponent,
    UserNamePipe,

  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    MaterialModule
  ],
  exports: [
    ButtonComponent,
    BannerComponent,
    UserNamePipe,
    MaterialModule
  ]
})
export class SharedModule { }
