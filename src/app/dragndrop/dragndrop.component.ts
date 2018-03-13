import { Component, OnInit } from '@angular/core';
import { FormGroup,  Validators, FormBuilder } from '@angular/forms'


@Component({
  selector: 'app-dragndrop',
  templateUrl: './dragndrop.component.html',
  styleUrls: ['./dragndrop.component.css']
})
export class DragndropComponent implements OnInit {
  public userForm:FormGroup;
  Gender=['Male','Female'];
  constructor(private fb:FormBuilder) {
    this.userForm = fb.group({
        firstName: ['',Validators.compose([Validators.required,Validators.maxLength(20)])],
        lastName: ['',Validators.compose([Validators.required,Validators.maxLength(20)])],
        age: ['',Validators.compose([Validators.required])],
        gender: ['Male',Validators.compose([Validators.required])]
    })
   }

  ngOnInit() {
     this.userData = this.userDetails;
  }
  public userDetails = [{
    firstName:'john',
    lastName:'d',
    age:'20',
    gender:'Male'
  },{
    firstName:'kate',
    lastName:'daniel',
    age:'24',
    gender:'Female'
  },{
    firstName:'priya',
    lastName:'j',
    age:'26',
    gender:'Female'
  }];
public search;
public userData:any;
public addUser:boolean = false;

onSearch(event:string){
  this.userData=this.userDetails.filter((user)=>{
    return (user.firstName.indexOf(event)!=-1)||
    (user.lastName.indexOf(event)!=-1)||
    (user.age.indexOf(event)!=-1)||
    (user.gender.indexOf(event)!=-1)
  })
}
onSubmit(event:any){
  //console.log(event.value);
  this.userDetails.push(event.value);
  this.userData=this.userDetails;
  this.search="";
  this.userForm.reset();
  this.addUser=false;
}
addDetails(){
 this.addUser=true;
}

}
