import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './core/layouts/main-layout/main-layout.component';
import { DashBoardComponent } from './modules/dash-board/dash-board.component';
import { HomeComponent } from './modules/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/recommend',
        pathMatch: 'full',
      },
      {
        path: 'recommend',
        component: DashBoardComponent,
        data: { breadcrumb: 'KPI Dashboard' },
      },
      {
        path: 'home',
        component: HomeComponent,
        data: { breadcrumb: 'HomePage' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
