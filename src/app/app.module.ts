import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from 'src/app/core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { ToastrModule } from "ngx-toastr";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    CoreModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(
      {
        timeOut: 3000,
        positionClass: 'toast-center-center',
        preventDuplicates: true,
      }
    ),
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
