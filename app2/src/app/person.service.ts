import { Injectable } from '@angular/core';
import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
    private personArr:Person[] = [
    new Person("John", "Smith", 30),
    new Person("Mike", "Jordan", 50),
    new Person("Leo", "Nile", 20)
    ];
  constructor() { }

  getPersonInfo(name:string):Person[] {
    return this.personArr.filter((firstname)=>{
      return firstname.getFName().toLowerCase().includes(name.toLowerCase());
    });
  }

  async delay(ms: number) {
    await new Promise(resolve => setTimeout(()=>resolve(), ms));
  }

}
