import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from '../../modules/auth/services/auth.service';
import { Message } from './interface/message.interface';
import { DateTime } from 'luxon';

export interface Notification {
  receivedat: string;
  message: Message;
}

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private _socket?: WebSocket;
  private isClosebyUser = false;
  //inbox: Notification[] = [];
  inbox = new Subject<Notification>();

  constructor(private _authService: AuthService) {}

  public connect() {
    if (this._socket?.readyState !== WebSocket.OPEN) {
      this._socket = new WebSocket(environment.notificationServerUri);
    }

    this._socket.onopen = (event) => {
      console.log('onopen:: new connecion opened');
      this.subscribe();
      this.isClosebyUser = false;
    };

    this._socket.onmessage = (event) => {
      console.log('new message received', event);
      if (event.origin !== environment.notificationOrigin) {
        console.error('notification origin is not verified');
        throw new Error(
          'incoming socket message from unverified origin. abort'
        );
      }
      const notification: Notification = {
        receivedat: DateTime.now().toLocaleString(
          DateTime.DATETIME_FULL_WITH_SECONDS
        ),
        message: JSON.parse(event.data),
      };
      this.inbox.next(notification);
    };

    this._socket.onerror = (event) => {
      console.error('error on notification service :', event);
    };
    this._socket.onclose = (event) => {
      console.warn('socket connection closed', event);
      if (!this.isClosebyUser) {
        this.connect();
      }
    };
  }
  private subscribe() {
    let user = this._authService.getUsername();
    if (!user) {
      throw new Error('Signed in user cannot be found');
    }
    let data = {
      action: 'subscribe',
      data: { userId: user, type: 'private' },
    };

    if (this._socket?.readyState === WebSocket.OPEN) {
      this._socket.send(JSON.stringify(data));
    } else {
      console.error(
        'cannot send the message. connection status is ',
        this._socket?.readyState
      );
    }
  }
  public deleteNotification(id: string) {
    let user = this._authService.getUsername();
    if (!user) {
      throw new Error('Signed in user cannot be found');
    }
    let data = {
      action: 'deleteMessage',
      data: { userId: user, id: id },
    };

    if (this._socket?.readyState === WebSocket.OPEN) {
      this._socket.send(JSON.stringify(data));
    } else {
      console.error(
        'cannot send the message. connection status is ',
        this._socket?.readyState
      );
    }
  }
  public syncInbox() {
    let user = this._authService.getUsername();
    if (!user) {
      throw new Error('Signed in user cannot be found');
    }
    let data = {
      action: 'syncInbox',
      data: { userId: user },
    };

    if (this._socket?.readyState === WebSocket.OPEN) {
      this._socket.send(JSON.stringify(data));
    } else {
      console.error(
        'cannot send the message. connection status is ',
        this._socket?.readyState
      );
    }
  }
  public send(data: any) {
    if (this._socket?.readyState === WebSocket.OPEN) {
      this._socket.send(JSON.stringify(data));
    } else {
      console.error(
        'cannot send the message. connection status is ',
        this._socket?.readyState
      );
    }
  }
  public getConnectionStatus() {
    let state;
    if (!this._socket) {
      return 'UNDEFINED';
    }
    switch (this._socket?.readyState) {
      case 0:
        state = 'CONNECTING';
        break;
      case 1:
        state = 'OPEN';
        break;
      case 2:
        state = 'CLOSING';
        break;
      case 3:
        state = 'CLOSED';
        break;
    }
    return state;
  }
  public close() {
    this.isClosebyUser = true;
    this._socket?.close();
  }
}
