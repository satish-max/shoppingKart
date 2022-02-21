import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { empty, Observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchapiService {

  constructor(private http:HttpClient) { }

  public baseurl ="http://localhost:7557/api/Products/"
  public searchresult :any;

  searchEntries(term:any) :Observable<any>{
    if(term === ""){
      console.log('not defined');
      return empty();
    }else{
      let params = {q:term}
      return this.http.get(this.baseurl ,{params})
        .pipe(map(res =>{
        
          console.log(res)
              return this.searchresult =res as [];
        }));
      }        
  }
  _searchEntries(term: any){
    return this.searchEntries(term)
  }
}
