import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/share/cart.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import * as moment from 'moment';
import { ApiService } from '../../Shared/api.service';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.css']
})
export class MycartComponent implements OnInit {
  public cartproduct: any
  public grandtotal !: number;
  routeId: any;
  constructor(private cartservice: CartService,
    private router: Router,
    private api: ApiService,
    private routed: ActivatedRoute) { }

  ngOnInit(): void {
    this.routed.paramMap.subscribe((params: ParamMap) => {
      this.routeId = params.get('id');
    })
    this.cartservice.gerproducts()
      .subscribe(res => {
        this.cartproduct = res;
        this.grandtotal = this.cartservice.gettotalprice()
      })
    console.log(moment().format())
  }
  delet(pd: any) {
    this.cartservice.removecart(pd)
  }
  removeall() {
    this.cartservice.removeallcart()

  }
  gotoDash() {
    this.router.navigateByUrl('dash/' + this.routeId);

  }
  orderFun() {
    console.log(this.cartproduct);
    let count = 0
    this.cartproduct.forEach((item: any) => {
      let obj =
      {
        "LoginId": this.routeId,
        "OrderDate": moment().format(),
        "OrderAmount": item.unitPrice,
        "Active": 1
      }
      this.api.postOrder(obj).subscribe((res: any) => {
        console.log(res);
        count++;
        if (count === this.cartproduct.length)
        {
          this.removeall();
          this.router.navigateByUrl('order/' + this.routeId);
        }
      })
    })
  }
}
