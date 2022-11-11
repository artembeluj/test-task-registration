import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";

@Injectable()
export class AuthGuard implements CanActivate {
	constructor(
		private router: Router
	) { }

	public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		const isAuthenticated = !!localStorage.getItem('user');

		if (!isAuthenticated) {
			this.router.navigateByUrl('/registration');
			return false;
		}
		return true;
	}
}