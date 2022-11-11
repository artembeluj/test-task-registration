import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-details-user',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserDetailsComponent {
  @Input() icon!: string;
  @Input() value!: string;
  @Input() title!: string;
}
