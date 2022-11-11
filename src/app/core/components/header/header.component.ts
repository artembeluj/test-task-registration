import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { Router } from '@angular/router';
import { AuthService } from '@services/auth.service';
import { UserService } from '@services/userData.service';
import { Size, Color} from '@shared/enums/button.enum';
import { User } from '@shared/interfaces/user.interface';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('hamburguerX', [
      state('hamburguer', style({})),
      state(
        'topX',
        style({
          transform: 'rotate(45deg)',
          transformOrigin: 'left',
          padding: '0px',
        })
      ),
      state(
        'hide',
        style({
          opacity: 0,
        })
      ),
      state(
        'bottomX',
        style({
          transform: 'rotate(-45deg)',
          transformOrigin: 'left',
          padding: '0px',
        })
      ),
      transition('* => *', [animate('0.2s')]),
    ]),
  ],
})

export class HeaderComponent {
  public userData$: BehaviorSubject<User | null> = this.userService.currentuserData$;
	public isShowMenu: boolean = false;
	public buttonSize: Size = Size.medium;
	public buttonColor: Color= Color.darkGray;
  public shouldHideMobileLinks: boolean = true;

  public toggleMobileHeader(): void {
    this.shouldHideMobileLinks = !this.shouldHideMobileLinks;
  }
	constructor(
		private userService: UserService,
		private authService: AuthService,
		private router: Router
	) { }

	public toggleMobileMenu(): void {
		this.isShowMenu = !this.isShowMenu;
	}

	public logout(): void {
		this.authService.logout();
		this.router.navigateByUrl('/registration');
	}
}
