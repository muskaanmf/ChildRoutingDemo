import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepositsComponent } from './deposits/deposits.component';
import { WithdrawalComponent } from './withdrawal/withdrawal.component';
import { CoinsComponent } from './deposits/coins/coins.component';
import { NotesComponent } from './deposits/notes/notes.component';
import { HomeComponent } from './home/home.component';
import { BycoinsComponent } from './withdrawal/bycoins/bycoins.component';
import { BynotesComponent } from './withdrawal/bynotes/bynotes.component';

@NgModule({
  declarations: [
    AppComponent,
    DepositsComponent,
    WithdrawalComponent,
    CoinsComponent,
    NotesComponent,
    HomeComponent,
    BycoinsComponent,
    BynotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
