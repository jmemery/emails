import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  importance = true;
  emails1: any = ['bill@micro.com', 'user@email.com']
  emails = {
    email: 'bill@microsoft.com',
    importance: false,
    subject: 'test',
    content: 'this is a test'}
}
