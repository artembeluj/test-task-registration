import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { RedirectGuard } from './core/guards/redirect.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'registration',
    pathMatch: 'full',
  },
  {
    path: 'registration',
    loadChildren: () => import('./pages/registration-profile/registration-profile.module').then(m => m.RegistrationProfileModule),
    canActivate: [RedirectGuard]
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/user-profile/user-profile.module').then(m => m.UserProfileModule),
    canActivate: [AuthGuard]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    paramsInheritanceStrategy: 'always',
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule],
  providers: [AuthGuard, RedirectGuard]
})
export class AppRoutingModule {
}
