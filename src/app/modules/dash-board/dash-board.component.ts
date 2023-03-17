import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DashboardViewMode } from 'src/app/shared/constant';
import { IBreadCrumb } from 'src/app/shared/model';
import { BreadcrumbService } from 'src/app/shared/services/breadcrumb.service';
import { HelperService } from 'src/app/shared/services/helper.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss'],
})
export class DashBoardComponent implements OnInit {
  readonly localeStoreKey = 'DashboardViewMode';
  viewModes = [
    { icon: 'fas fa-grip-vertical', mode: DashboardViewMode.Grid },
    { icon: 'fas fa-grip-horizontal', mode: DashboardViewMode.Table },
  ];

  currentMode!: number;

  public get DashboardViewMode(): typeof DashboardViewMode {
    return DashboardViewMode;
  }

  constructor(
    private helperService: HelperService,
    private route: ActivatedRoute,
    private breadcrumbService: BreadcrumbService
  ) {}

  ngOnInit(): void {
    this.currentMode = Number(
      this.helperService.getConfigCaching(this.localeStoreKey)
    );
    if (!this.currentMode) {
      this.helperService.updateConfigCaching(
        this.localeStoreKey,
        DashboardViewMode.Grid.toString()
      );
    }
    this.route.data.subscribe((data) => {
      this.breadcrumbService.updateBreadCrumb(data as IBreadCrumb);
    });
  }

  updateModeView($evt: number): void {
    this.currentMode = $evt;
    this.helperService.updateConfigCaching(
      this.localeStoreKey,
      $evt.toString()
    );
  }
}
