import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { TopbarComponent } from './layouts/topbar/topbar.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavbarComponent, TopbarComponent, MainLayoutComponent],
  exports: [NavbarComponent, TopbarComponent, MainLayoutComponent],
  imports: [CommonModule, RouterModule],
})
export class CoreModule {}
