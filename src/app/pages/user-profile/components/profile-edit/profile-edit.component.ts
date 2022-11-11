import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '@services/userData.service';
import { BehaviorSubject } from 'rxjs';
import { User } from '@shared/interfaces/user.interface';
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileEditComponent implements OnInit {
  public userData$: BehaviorSubject<User | null> = this.userService.currentuserData$;

  constructor(
    private userService: UserService,
    private router: Router,
    private toastr: ToastrService,
  ) { }

  public ngOnInit(): void {
    this.userService.getCurrentUser();
  }

  public update(user: User): void {
    this.userService.updateUser(user);
    this.toastr.success('Profile updated successfully', '',
      {
        timeOut: 3000,
        closeButton: true,
        messageClass: 'message-wrapper'
      });
    this.router.navigateByUrl('profile/view');
  }
}
