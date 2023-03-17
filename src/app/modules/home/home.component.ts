import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IBreadCrumb } from 'src/app/shared/model';
import { BreadcrumbService } from 'src/app/shared/services/breadcrumb.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private breadcrumbService: BreadcrumbService
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.breadcrumbService.updateBreadCrumb(data as IBreadCrumb);
    });
  }
}
