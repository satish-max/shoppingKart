import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/share/cart.service';
import { RestapiService } from 'src/app/share/restapi.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public productlist: any;
  description: string = '';


  constructor(public service: RestapiService, private cartSer: CartService) { }


  ngOnInit(): void {
    this.service.getproduct()
      .subscribe(res => {
        this.productlist = res;
        // this.productlist.forEach((a: any) => {
        //   Object.assign(a, { quantity: 1, total: a.price })
        // });
      })
  }

  addtocart(pd: any) {
    this.cartSer.addtocart(pd);

  }
  Search() {
    if (this.description == "") {
      this.ngOnInit();

    } else {
      this.productlist 
      this.productlist = this.productlist.filter((res:any) => {
        return res.description.toLowerCase().match(this.description.toLowerCase());
      })
    }
  }

}
