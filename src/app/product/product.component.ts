import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productname:string="Dairy milk";
  price:any=50.50;
  quantity:any=100;
  mfd:Date=new Date();
  Amount:any=this.price;
  product_name: string[]=['parle-g' , 'marrie-gold' , 'diamond']

  products:Product[]=[

    {productname:'Dove',price:34,mfd:new Date(1,2.2020),quantity:20},
  
    {productname:'Lyril',price:39,mfd:new Date(3,2.2020),quantity:40},
  
    {productname:'Surf excel',price:78,mfd:new Date(11,2.2020),quantity:120},
  
    {productname:'Frooti',price:20,mfd:new Date(1,5.2022),quantity:20},
  
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
