import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartIteam :any=[]
  public productlist = new BehaviorSubject<any>([]);

  constructor() { }

  gerproducts(){
    return this.productlist.asObservable();
  }
  setproduct(product:any){ 
    this.cartIteam.push(...product);
    this.productlist.next(product);
  }
  addtocart(product:any){
    this.cartIteam.push(product);
    this.productlist.next(this.cartIteam);
    this.gettotalprice();
    console.log(this.cartIteam)
  }
  gettotalprice() : number {
    let grandtotal = 0;
    this.cartIteam.map((a:any)=>{
      grandtotal += a.unitPrice;
    })
    return grandtotal;
  }
  removecart(product:any){
    this.cartIteam.map((a:any,index:any)=>{
      if(product.id === a.id){
        this.cartIteam.splice(index,1);
      }
    })
    this.productlist.next(this.cartIteam);
  }


  removeallcart(){
    this.cartIteam=[]
    this.productlist.next(this.cartIteam);
  }
}
