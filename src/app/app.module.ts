// Import angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Import components propios
import { AppComponent } from './app.component';
import { ErrorPageComponent } from './shared/error-page/error-page.component';

// Import modulos propios
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
