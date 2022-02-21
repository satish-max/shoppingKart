import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError, debounce, debounceTime, distinctUntilChanged, map, shareReplay, switchMap } from 'rxjs/operators';
import { CartService } from 'src/app/share/cart.service';
import { SearchapiService } from 'src/app/share/searchapi.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  public badgenumber: number = 0;
  public searchproduct: string = '';
  public loading!: boolean;
  public searchterm = new Subject<any>();
  public paginationElements: any;
  public errormessage: any
  routeId: any;

  public searchform = new FormGroup({
    search: new FormControl("", Validators.required)
  });

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  searchResults: any;

  constructor(private breakpointObserver: BreakpointObserver,
    private numberservice: CartService,
    private router: Router,
    private routed: ActivatedRoute,
    public api: SearchapiService) { }


  ngOnInit(): void {
    this.routed.paramMap.subscribe((params: ParamMap) => {
      this.routeId = params.get('id');
    })
    this.numberservice.gerproducts()
      .subscribe(res => {
        this.badgenumber = res.length;
      })

  }

  searchData() {
    this.searchterm.pipe(map((a: any) => {
      console.log(a.target.value);
      return a.target.value
    }),
      debounceTime(400),
      distinctUntilChanged(),
      switchMap(term => {
        this.loading = true;
        return this.api.searchEntries(term);
      }),
      catchError((a) => {
        this.loading = false,
          this.errormessage = a.message;
        return throwError(a);
      }),
    ).subscribe(v => {
      this.loading = true;
      this.searchResults = v;
      this.paginationElements = this.searchproduct;
    })


  }
  cart() {
    this.router.navigateByUrl('mycart/' + this.routeId);
  }
  orders(){
    this.router.navigateByUrl('order/' + this.routeId);
  }
  gotoDash(){
    this.router.navigateByUrl('dash/' + this.routeId);

  }
  addProduct(){
    this.router.navigateByUrl('product/' + this.routeId);
  }
}
function a(a: any) {
  throw new Error('Function not implemented.');

}

