import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FlagSelect } from '@shared/interfaces/select.interface';
import { UserService } from '@services/userData.service';
import { Color, Size } from '@shared/enums/button.enum';
import { Breadcrumb } from '@shared/interfaces/breadcrumb.interface';
import { map, Observable, startWith, Subject } from 'rxjs';
import { EMAIL_PATTERN } from '@shared/constants/email-pattern.constant';
import { User } from '@shared/interfaces/user.interface';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile-data',
  templateUrl: './profile-data.component.html',
  styleUrls: ['./profile-data.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileInfoComponent implements OnInit, OnDestroy {
  @Output() public onSave: EventEmitter<User> = new EventEmitter<User>();
  @Input() public breadcrumbs?: Breadcrumb[];
  @Input() public title!: string;
  @Input() public user?: User;
  public buttonSize: Size = Size.big;
  public buttonColor: Color= Color.blue;
  public nameCounties!: string[];
  public flags!: FlagSelect[];
  public filteredNames$!: Observable<string[]>;
  public userForm!: FormGroup;
  private destroy$: Subject<void> = new Subject<void>();

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private cdr: ChangeDetectorRef,
    private toastr: ToastrService,
  ) { }

  public ngOnInit(): void {
    this.initForm();

    this.userService.getCountriesData().subscribe((countries) => {
      this.nameCounties = countries
      this.startFilter();
      this.cdr.markForCheck();
    });
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public showError(): void {
  this.toastr.error('You cannot edit email or phone number. ' +
    'Please reach out to support team if you have any queries.', '', {
      timeOut: 3000,
      closeButton: true,
      messageClass: 'error-message-wrapper'
    });
  }

  public setUserPhoto(photo: string): void {
    this.userForm.get('userPhoto')?.setValue(photo);
  }

  public save(): void {
    this.markAllAsDirty();

    if (this.userForm.invalid) return;

    this.onSave.emit(this.userForm.getRawValue());
  }

  private startFilter(): void {
    this.filteredNames$ = this.userForm.get('country')!.valueChanges.pipe(
      startWith(''),
      map((value: string) => {
        return this._filter(value || '')
      }),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.nameCounties?.filter((country: string) => country.toLowerCase().includes(filterValue));
  }

  private markAllAsDirty(): void {
    Object.keys(this.userForm.controls).forEach(key => {
      this.userForm.get(key)!.markAsDirty();
    });
  }

  private initForm(): void {
    this.userForm = this.formBuilder.group({
      userName: ['', [Validators.required]],
      email: ['', [EMAIL_PATTERN, Validators.required]],
      codeCountry: [{ title: '🇺🇸', value: '+1' }],
      phone: ['', [Validators.required, Validators.minLength(9)]],
      birthDate: ['', [Validators.required]],
      country: ['', [Validators.required]],
      webSite: [''],
      userPhoto: ['']
    });

    if (this.user) {
      this.userForm.patchValue(this.user);
    }
  }
}
