import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
//import { EventEmitter } from 'events';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public successClass = "text-success";
  public dangerClass = "text-danger";
  public infoClass = "text-info";
  public email = "alrahat2017@gmail.com";
  public myId = "testId";
  public isDisabled= true;
  public displayName=false;
  public fruits= ["apple","banana","orange"];
  //data receiving from parent component (app)
  @Input() public parentData;
  //We don't have parent component selector in child component.So,we have to use events for this.
  //Creating an event that we can send to parent

  @Output() public childEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }
  onClick(){
    alert('You have clicked Success Button');
  }
  showEmail(){
    return "Your email is " + this.email;
  }
  fireEvent(){
    this.childEvent.emit('this is a message');
  }

}
