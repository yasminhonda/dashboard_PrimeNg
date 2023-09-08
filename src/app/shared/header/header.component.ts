import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      { icon: 'pi pi-fw pi-home', routerLink: ['/home'] },
      { icon: 'pi pi-fw pi-calendar', routerLink: ['/calendar'] },
      { icon: 'pi pi-fw pi-user', routerLink: ['/profile'] },
      { icon: 'pi pi-fw pi-cog', routerLink: ['/config'] }
    ];
  }

}
