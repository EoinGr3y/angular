import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'courses',
  template: `
      <h2>{{ getTitle() }}</h2>
      <img [src]="imageUrl" />
      <ul>
        <li *ngFor="let course of courses">
          {{ course }}
        </li>
        <button [style.backgroundColor]="buttonActive ? 'blue' : 'white'" class="btn btn-primary" [class.active]="buttonActive">Save</button>
        <div (click)="onDivClick($event)">
          <button (click)="onSave($event)" class="btn btn-primary">Click</button>
        </div>
        <div>
          <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
        </div>
      </ul>
  `
})
export class CoursesComponent {
  title = "List of courses";
  courses;
  imageUrl = "";
  colSpan = 2;
  buttonActive = true;
  email = "eoin@example.com";

  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }

  getTitle() {
    return this.title;
  }

  onDivClick($event) {
    console.log("Div was clicked", $event);
  }

  onSave($event) {
    $event.stopPropagation();
    console.log("Button was clicked.", $event);
  }

  onKeyUp() {
    console.log(this.email);
  }

}