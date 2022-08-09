import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myfirstngproject';

  firstname:string="Nikhil pratap singh";
  Role:string="trainee at lti ";
  Today:Date=new Date();
}
