import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Size, Color} from '@shared/enums/button.enum';


@Component({
  selector: 'app-validate-modal',
  templateUrl: './validate-modal.component.html',
  styleUrls: ['./validate-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ValidateModalComponent {
    public buttonSize: Size = Size.big;
    public buttonColor: Color= Color.blue;

    constructor(private matDialogRef: MatDialogRef<ValidateModalComponent>,) {}

    public closeModal(): void {
      this.matDialogRef.close(true);
    }

}
