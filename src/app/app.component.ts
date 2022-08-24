import { Component } from '@angular/core';
import {
  DrawerItem,
  DrawerPosition,
  DrawerSelectEvent,
} from '@progress/kendo-angular-layout';
import { User } from 'src/app/core/modules/auth/interfaces/user.interface';
import { AuthService } from 'src/app/core/modules/auth/services/auth.service';
import {
  Notification,
  NotificationService,
} from './core/services/notification/notification.service';
import { Router } from "@angular/router";

@Component({
  selector: 'cosap-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  title = 'rapid-example-ui';

  public checked = true;

  private user: User = {
    username: 'krish',
    email: 'krishanthad@fortude.co',
    defaultCompany: 200,
  };
  inbox: Notification[] = [];
  ngOnInit(): void {}
  ngOnDestroy(): void {
    this._notificationService.close();
  }
  constructor(
    private _notificationService: NotificationService,
    private _authService: AuthService,
    private router: Router
  ) {
    this._authService.setUser(this.user);
    this._notificationService.connect();
    this._notificationService.inbox.subscribe((notification) => {
      this.inbox.push(notification);
    });
    this.items = this.mapItems(router.config);
    this.items[0].selected = true;
  }
  public onSelect(ev: DrawerSelectEvent): void {
    this.router.navigate([ev.item.path]);
  }

  public mapItems(routes: any[], path?: string): any[] {
    return routes.map((item) => {
      return {
        text: item.text,
        icon: item.icon,
        path: item.path ? item.path : "",
      };
    });
  }
  connect() {
    this._notificationService.connect();
  }
  checkConnectionState() {
    let status = this._notificationService.getConnectionStatus();
  }
  syncInbox() {
    this._notificationService.syncInbox();
  }
  deleteMessage(id: string) {
    this._notificationService.deleteNotification(id);
  }
  disconnect() {
    this._notificationService.close();
  }

  public expanded = false;

  public position: DrawerPosition = 'end';

  public items: Array<any> = [];

  public switchExpanded(): void {
    this.expanded = !this.expanded;
  }
}
