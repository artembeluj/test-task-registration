import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationProfileComponent } from './registration-profile.component';

const routes: Routes = [
  {
    path: '',
    component: RegistrationProfileComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationRoutingModule {
}