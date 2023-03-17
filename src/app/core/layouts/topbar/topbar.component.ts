import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IBreadCrumb } from 'src/app/shared/model';
import { BreadcrumbService } from 'src/app/shared/services/breadcrumb.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent implements OnInit {
  @Input() navBarState = true;
  breadCrumbData$!: Observable<IBreadCrumb | null>;

  constructor(private breadcrumbService: BreadcrumbService) {}

  ngOnInit(): void {
    this.breadCrumbData$ = this.breadcrumbService.breadCrumb$;
  }
}
