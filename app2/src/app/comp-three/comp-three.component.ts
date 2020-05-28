import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service';
import { Person } from '../person';

@Component({
  selector: 'app-comp-three',
  templateUrl: './comp-three.component.html',
  styleUrls: ['./comp-three.component.css']
})
export class CompThreeComponent implements OnInit {

  peeps:Person[];

  constructor(private personService:PersonService) { }

  ngOnInit(): void {
    this.peeps = this.personService.getPersonInfo("Mike");
    this.delay(4000).then(any => {return this.peeps});

  }

}
