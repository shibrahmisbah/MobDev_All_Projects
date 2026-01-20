import { Component } from '@angular/core';
import {Student} from './myClasses/student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'thirdApp';

  bio: Student = {sname: "Ann C", sid: 991123456, 
                  slogin: "cadgeran", semail: "ann.cadger@sheridancollege.ca"}
}
