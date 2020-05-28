export class Person {
    private fname:string;
    private lname:string;
    private age:number;

    constructor(fname:string, lname:string, age:number) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
    }
    // getters
    getFName():string {
        return this.fname;
    }
    getLName():string {
        return this.lname;
    }
    getAge():number {
        return this.age;
    }
    // setters
    setFName(fname:string):void {
        this.fname = fname;
    }
    setLName(lname:string):void {
        this.lname = lname;
    }
    setAge(age:number):void {
        this.age = age;
    }
}
