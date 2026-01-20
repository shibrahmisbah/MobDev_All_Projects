import { Component, OnInit, Input } from '@angular/core';
import {Student} from '../myClasses/student';
import {MYCLASSES} from 'src/assets/data/myClasses';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @Input() bio!: Student;

  myclasses = MYCLASSES;

  onClickMe(index: number) {
    alert(
      `
      CLASS: ${this.myclasses[index].cname}
      ROOM: ${this.myclasses[index].room}
      DAY OF WEEK: ${this.myclasses[index].dow}
      `
    )
  }

  changeStyles1() {
    document.getElementById("styletest1")!.style.backgroundColor = 'orange';
  }

  changeStyles2() {
    document.getElementById("styletest2")!.style.color = 'magenta';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
