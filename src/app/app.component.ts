import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  importance = true;
  emails1: any = ['bIll@micro.com']
  bill = {
    email: 'bill@microsoft.com',
    importance: false,
    subject: 'test',
    content: 'this is a test'}
  user ={
    email: 'user@mail.com',
    importance: false,
    subject: 'test',
    content: 'this is also test'
  }
  newUser ={
    email: 'leah@lovelace.com',
    importance: 'High',
    subject: 'test',
    content: 'this is also test'
  }
  timmy ={
    email: 'timmy@mail.com',
    importance: 'High',
    subject: 'The new Microsoft Windows XI is about to release',
    content: "This was a joke everyone uses Mac now"
  }
}
