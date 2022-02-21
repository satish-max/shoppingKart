import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  singnup(obj: any) {
    return this.http.post("http://localhost:7557/api/Users", obj);
  }
  login(id: any) {
    return this.http.get("http://localhost:7557/api/Users/" + id);
  }

    postOrder(data: any){
      return this.http.post('http://localhost:9498/api/Orders', data);
    }
    getOrder(){
      return this.http.get('http://localhost:7557/api/Orders');
    }
  //   putOrder(data: any){
  //     return this.http.put<any>('http://localhost:7557/api/Orders', data);
  //   }
    deleteOrder(id: any){
      return this.http.delete<any>('http://localhost:7557/api/Orders/'+id);
    }
}
