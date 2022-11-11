import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '@services/userData.service';
import { Color} from '@shared/enums/button.enum';
import { BannerSize } from '@shared/enums/title.enum';
import { BehaviorSubject } from 'rxjs';
import { User } from '@shared/interfaces/user.interface';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileViewComponent implements OnInit {
  public userData$: BehaviorSubject<User | null> = this.userService.currentuserData$;
  public buttonColor: Color= Color.lightGray;
  public titleSize: BannerSize = BannerSize.big;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  public ngOnInit(): void {
    this.userService.getCurrentUser();
  }

  public navigateToEdit(): void {
    this.router.navigateByUrl('profile/edit')
  }

}
