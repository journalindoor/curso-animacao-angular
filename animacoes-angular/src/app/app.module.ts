import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BumblebeeVanillaComponent } from './bumblebee-vanilla/bumblebee-vanilla.component';
import { FuriaAngularComponent } from './furia-angular/furia-angular.component';

@NgModule({
  declarations: [
    AppComponent,
    BumblebeeVanillaComponent,
    FuriaAngularComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
