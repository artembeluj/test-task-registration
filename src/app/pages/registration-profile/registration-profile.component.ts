import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from '@services/auth.service';
import { BREADCRUMBS_REGISTRATION } from '@shared/constants/registration.constant';
import { Breadcrumb } from '@shared/interfaces/breadcrumb.interface';
import { User } from '@shared/interfaces/user.interface';
import { Subject, filter, map, switchMap, takeUntil } from 'rxjs';
import { ProfileCreatingDialogComponent } from '../components/dialogs/profile-creating-dialog/profile-creating-dialog.component';
import { ValidateModalComponent } from '../components/validate-modal/validate-modal.component';



@Component({
  selector: 'app-registration-profile',
  templateUrl: './registration-profile.component.html',
  styleUrls: ['./registration-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegistrationProfileComponent implements OnDestroy {
  public registrationBreadcrumbs: Breadcrumb[] = BREADCRUMBS_REGISTRATION;
  private destroy$: Subject<void> = new Subject<void>();

  constructor(
    private matDialog: MatDialog,
    private authService: AuthService,
    private router: Router
  ) { }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public save(user: User): void {
    this.matDialog.open(ValidateModalComponent).afterClosed().pipe(
      filter((result: boolean) => result),
      map(() => this.authService.saveUserData(user)),
      switchMap(() => this.matDialog.open(ProfileCreatingDialogComponent).afterClosed()),
      takeUntil(this.destroy$)
    ).subscribe(() => {
      this.router.navigateByUrl('/profile')
    })
  }


}
