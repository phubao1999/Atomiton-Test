import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { DashBoardComponent } from './modules/dash-board/dash-board.component';
import { HomeComponent } from './modules/home/home.component';
import { DashboardHeaderComponent } from './modules/dash-board/dashboard-header/dashboard-header.component';

@NgModule({
  declarations: [AppComponent, DashBoardComponent, HomeComponent, DashboardHeaderComponent],
  imports: [BrowserModule, AppRoutingModule, CoreModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
