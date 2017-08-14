import { Component, OnInit } from '@angular/core';
import { ChatScreenService } from './chat-screen.service'

@Component({
  selector: 'app-chat-screen',
  templateUrl: './chat-screen.component.html',
  styleUrls: ['./chat-screen.component.css'],
  providers: [ChatScreenService]
})
export class ChatScreenComponent implements OnInit {
  msg;
  msgList;

  constructor(private _service : ChatScreenService) { }

  ngOnInit() { this.msgList = this._service.getMessages() }

  sendMessage() { 
    console.log(this.msg);
    this._service.sendMessageToFirebase(this.msg) 
    this.msg = "";
  }

}
