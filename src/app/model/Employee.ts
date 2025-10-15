export class Employee{
    empId:number;
    Name:string;
    city:string;
    state:string;
    emailId:string;
    contactNo:string;
    address:string;

    constructor(empId:number,Name:string,city:string,state:string,emailId:string,contactNo:number,address:string){
        this.empId= 0;
        this.Name='';
        this.city= '';
        this.state='';
        this.emailId= '';
        this.contactNo= '';
        this.address= '';
    }
}
