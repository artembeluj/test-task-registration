import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileViewRoutingModule } from './profile-view-routing.module';
import { SharedModule } from '@shared/shared.module';
import { ProfileViewComponent } from './profile-view.component';
import { UserDetailsComponent } from './components/user/user-details.component';

@NgModule({
  declarations: [
    ProfileViewComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    ProfileViewRoutingModule,
    SharedModule
  ]
})
export class ProfileViewModule { }
