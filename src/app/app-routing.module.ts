import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepositsComponent } from './deposits/deposits.component';
import { WithdrawalComponent } from './withdrawal/withdrawal.component';
import { CommonModule } from '@angular/common';
import { CoinsComponent } from './deposits/coins/coins.component';
import { NotesComponent } from './deposits/notes/notes.component';
import { HomeComponent } from './home/home.component';
import { BycoinsComponent } from './withdrawal/bycoins/bycoins.component';
import { BynotesComponent } from './withdrawal/bynotes/bynotes.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  {
    path: 'deposits', component: DepositsComponent,
    // nested child routes 
    children: [
      { path: 'coins', component: CoinsComponent },
      { path: 'notes', component: NotesComponent }
    ]
  },
  {
    path: 'withdrawal', component: WithdrawalComponent,
    children: [
      { path: 'coins', component: BycoinsComponent },
      { path: 'notes', component: BynotesComponent }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
