import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.scss'],
})
export class DashboardHeaderComponent implements OnInit {
  buttonActions = [
    { icon: 'fab fa-react', name: 'Green Liquor', id: 'greenLiquor' },
    { icon: 'fas fa-star-of-david', name: 'FS', id: 'fs' },
    { icon: 'fas fa-database', name: 'Tank 1', id: 'tank1' },
    { icon: 'fas fa-database', name: 'Tank 2', id: 'tank2' },
    { icon: 'fas fa-database', name: 'Tank 3', id: 'tank3' },
  ];
  currentParams!: string;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      if (!params['id']) {
        this.navigateRecommend(this.buttonActions[0].id);
        this.currentParams = this.buttonActions[0].id;
      } else {
        this.currentParams = params['id'];
      }
    });
  }

  navigateRecommend(id: string): void {
    this.router.navigate(['/recommend'], { queryParams: { id } });
  }
}
