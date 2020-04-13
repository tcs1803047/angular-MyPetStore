import { Component, OnInit } from '@angular/core';

import { messages } from '../messages';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {

  messages = messages;

  constructor() { }

  ngOnInit() {
  }

}