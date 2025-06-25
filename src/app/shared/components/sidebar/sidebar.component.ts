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


  goTo(link: string) {
    this.activeRoute = link;
    this.router.navigateByUrl(`/${link}`);
  }



}
