import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Subject, timer } from 'rxjs';

@Component({
  selector: 'app-profile-creating-dialog',
  templateUrl: './profile-creating-dialog.component.html',
  styleUrls: ['./profile-creating-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileCreatingDialogComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();

  constructor(
    private matDialogRef: MatDialogRef<ProfileCreatingDialogComponent>,
  ) {
    matDialogRef.addPanelClass('profile-creating-popup');
  }

  public ngOnInit(): void {
    timer(5000).subscribe(() =>
      this.close()
    );
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }


  public close(): void {
    this.matDialogRef.close();
  }

}
