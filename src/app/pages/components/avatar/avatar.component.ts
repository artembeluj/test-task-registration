import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { FORMATS, PHOTO_SIZE } from './constants/profile-picture.constant';
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AvatarComponent {
  @Input() public avatar?: string;
  @Output() public emitPhoto: EventEmitter<string> = new EventEmitter<string>();
  public maxFileSize: number = PHOTO_SIZE;
  private formats: string[] = FORMATS;

  constructor(
    private cdr: ChangeDetectorRef,
    private toastr: ToastrService,
  ) {}

  public choosePhoto(selectedPhoto?: any): void {
    if (!this.isValidatePhoto(selectedPhoto?.target.files[0])) return;

    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.avatar = (fileReader.result as string);
      this.emitPhoto.emit(fileReader.result as string);
      this.cdr.markForCheck();
    };

    fileReader.readAsDataURL(selectedPhoto.target.files[0]);
  }

  public deletePhoto(): void {
    this.avatar = '';
    this.emitPhoto.emit('');
  }

  private isValidatePhoto(file: File): boolean {
    if (file.size / 1024 / 1024 >= this.maxFileSize) {
      this.showError('Invalid size');
      return false;
    }
    if (!this.formats.includes(file.type.split('/')[1])) {
      this.showError('Invalid format');
      return false;
    }

    return true;
  }

  public get possibleFormats(): string {
    return '.' + this.formats.join(', .')
  }

  private showError(error: string): void {
    this.toastr.error(error,'',{
    })
  }
}
