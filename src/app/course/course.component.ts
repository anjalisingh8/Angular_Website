import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  course = [
    {'id':1,'name':'Learn Java','description':'Java is an object-oriented programming language that produces software for multiple platforms. When a programmer writes a Java application, the compiled code (known as bytecode) runs on most operating systems (OS), including Windows, Linux and Mac OS. ... Java was developed in the mid-1990s by James A.','image':'../../assets/java.png'},
    {'id':2,'name':'Learn Python','description':'Python is an interpreted, object-oriented, high-level programming language with dynamic semantics. ... Pythons simple, easy to learn syntax emphasizes readability and therefore reduces the cost of program maintenance. Python supports modules and packages, which encourages program modularity and code reuse.','image':'../../assets/python.png'},
    {'id':3,'name':'Learn Angular','description':'Angular is a platform and framework for building single-page client applications using HTML and TypeScript. Angular is written in TypeScript. It implements core and optional functionality as a set of TypeScript libraries that you import into your applications.','image':'../../assets/angular.png'},
    {'id':4,'name':'Learn React','description':'React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”. React has a few different kinds of components, but well start with React.Component subclasses: class ShoppingList extends React.','image':'../../assets/react.png'}

  ]
}
