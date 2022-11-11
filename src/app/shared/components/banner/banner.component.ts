import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Size, Color} from '@shared/enums/button.enum';
import { BannerButtonShow, BannerSize } from '../../enums/title.enum';
import { Breadcrumb } from '../../interfaces/breadcrumb.interface';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BannerComponent {
  @Output() public onClick: EventEmitter<void> = new EventEmitter<void>();
  @Input() public titleSize: BannerSize = BannerSize.default;
  @Input() public title?: string;
  @Input() public breadcrumbList?: Breadcrumb[];
  @Input() public buttonText?: string;
  @Input() public buttonIcon?: string;
  @Input() public buttonShowOnMedia: BannerButtonShow = BannerButtonShow.lg;
  @Input() public buttonSize: Size = Size.small;
  @Input() public buttonColor: Color= Color.lightBlue;

}
