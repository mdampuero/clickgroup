import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { LayoutComponent } from './layout/layout.component';
import { BackOfficeModuleRoutingModule } from './backoffice-routing.module';

@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    BackOfficeModuleRoutingModule
  ],
  bootstrap: [LayoutComponent]
})
export class BackofficeModule { }
