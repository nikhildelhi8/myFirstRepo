import { Component, OnInit } from '@angular/core';
import { Friend } from '../models/Friends';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {


  friends:Friend[]=[

    {name:'Nitin' , contact:8860862416 , email:'n@gmail.com',photo:'assets/images/img1.jfif'},
  
    
    {name:'Nikhil' , contact:84343 , email:'n@gmail.com',photo:'assets/images/img2.jfif'},
    
    {name:'ajay' , contact:882232 , email:'n@gmail.com',photo:'assets/images/img3.jfif'},
    
    {name:'sanjay' , contact:883332 , email:'n@gmail.com',photo:'assets/images/img4.jfif'},
    
    {name:'nikita' , contact:886086 , email:'n@gmail.com',photo:'assets/images/img5.jfif'},
  
  ];

  constructor() { }

  a:number=12;
  b:number=10;

  ngOnInit(): void {
  }

}
