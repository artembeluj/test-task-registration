import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Size, Color} from '../../enums/button.enum';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  @Input() public buttonSize: Size = Size.medium;
  @Input() public iconPosition:'right'|'left' = 'left';
  @Input() public buttonColor: Color= Color.darkGray
  @Input() public disabledButton = false;
  @Input() public icon?: string;
  @Input() public text?: string;
  @Input() public isFullWidth?: boolean = false;
}
