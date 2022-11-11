import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'view',
    pathMatch: 'full'
  },
  {
    path: 'view',
    loadChildren: () => import('./components/user-profile-view/profile-view.module').then(m => m.ProfileViewModule)
  },
  {
    path: 'edit',
    loadChildren: () => import('./components/profile-edit/profile-edit.module').then(m => m.ProfileEditModule)
  }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserProfileRoutingModule {
}