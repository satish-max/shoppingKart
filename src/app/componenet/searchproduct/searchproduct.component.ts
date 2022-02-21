import { Component, Input, OnInit } from '@angular/core';
import { SearchapiService } from 'src/app/share/searchapi.service';

@Component({
  selector: 'app-searchproduct',
  templateUrl: './searchproduct.component.html',
  styleUrls: ['./searchproduct.component.css']
})
export class SearchproductComponent implements OnInit {
  public searchlist :any
  constructor( private api:SearchapiService) { }
 searchresult :any
 loading:any
 errormessage:any


  ngOnInit(): void {
    this.api._searchEntries(1)
    .subscribe(res =>{
      this.searchlist =this.api;
      this.searchresult = this.api.searchresult;
      this.errormessage =this.api.searchresult;
      this.loading=this.api.searchresult;
      

    })
  }

}
