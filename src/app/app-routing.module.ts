import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProtocolsComponent } from './protocols/protocols.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProtocolDetailComponent} from './protocol-detail/protocol-detail.component';
import {OsiComponent} from './osi/osi.component';
import {OsiDetailsComponent} from './osi-details/osi-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'protocols', component: ProtocolsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: ProtocolDetailComponent},
  { path: 'osi', component: OsiComponent},
  { path: 'osi/detail/:id', component: OsiDetailsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
