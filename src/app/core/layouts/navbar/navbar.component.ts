import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { INavBar } from 'src/app/shared/model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public navbarItems: INavBar[] = [
    { icon: 'fa-brands fa-angular', url: '/home' },
    { icon: 'fas fa-chart-bar', url: '/recommend' },
    { icon: 'far fa-dot-circle', url: '' },
    { icon: 'far fa-user', url: '' },
    { icon: 'fas fa-file', url: '' },
  ];
  public href: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.href = this.router.url;
  }

  navigate(url: string) {
    this.router.navigate([url]);
    this.href = url;
  }
}
