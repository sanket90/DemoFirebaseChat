import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ChatScreenService {
  MESSAGES : FirebaseListObservable<any>;

  constructor(private _db: AngularFireDatabase) {
    this.MESSAGES = this._db.list('/messages')
  }

  sendMessageToFirebase(msg) { this.MESSAGES.push({"text":msg, "time": new Date()}) }

  getMessages() { return this.MESSAGES }
}
