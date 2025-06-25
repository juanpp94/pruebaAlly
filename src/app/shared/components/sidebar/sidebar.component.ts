import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  routes: any[] = [ {title: 'Dashboard', link: '/'},{title: 'Weather', link: 'weather'},{title:'Usuarios',link: 'users'}];

  activeRoute: string = 'weather'

  constructor(private router: Router) {}

  ngOnInit() {
    this.activeRoute = this.router.url.slice(1);
  }

  goTo(link: string) {
    this.activeRoute = link;
    this.router.navigateByUrl(`/${link}`);
  }

  logout() {
    localStorage.removeItem('isLogin');
    this.router.navigateByUrl('/auth/login');
  }



}
