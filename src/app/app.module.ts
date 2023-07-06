import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChennaiinterviewComponent } from './chennaiinterview/chennaiinterview.component';
import { DigitinsuranceComponent } from './digitinsurance/digitinsurance.component';
import { NPSTComponent } from './npst/npst.component';
import { TibilsolutionsComponent } from './tibilsolutions/tibilsolutions.component';
import { BodyComponent } from './body/body.component';

@NgModule({
  declarations: [
    AppComponent,
    ChennaiinterviewComponent,
    DigitinsuranceComponent,
    NPSTComponent,
    TibilsolutionsComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
