import { Component, OnInit } from '@angular/core';
import { CardcomponentComponent } from '../cardcomponent/cardcomponent.component';
import { NgFor,NgIf } from '@angular/common';
import { Glav } from '../cardcomponent/servs.service';
import { CourseService } from '../cardcomponent/servs.service'; 
type card = {
  id: number;
  title: string
  TextP: string
}
@Component({
  selector: 'app-glav',
  imports: [CardcomponentComponent, NgFor, NgIf],
  templateUrl: './glav.component.html',
  styleUrl: './glav.component.scss',
  providers: [CourseService]
})
export class GlavComponent implements OnInit {
  courses:Array<Glav> = []
  constructor(private servs:CourseService){}

  ngOnInit(){
    this.courses= this.servs.getCourses()
  }
}
