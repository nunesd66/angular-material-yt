import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { LoggedRoutingModule } from './logged-routing.module';
import { MaterialModule } from '../material.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { PraiasComponent } from './components/praias/praias.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    SidenavComponent,
    ToolbarComponent,
    PraiasComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    LoggedRoutingModule,
    MaterialModule
  ]
})
export class LoggedModule { }
