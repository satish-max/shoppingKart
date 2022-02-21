import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  formData: Product = new Product();

  readonly baseURL = "http://localhost:7557/api/Products"
  postProduct() {
    console.log(this.formData)
    let obj = {
      description: this.formData.description,
      unitPrice: this.formData.unitPrice,
      remarks: this.formData.remarks
    }
    return this.http.post(this.baseURL, obj);

  }
  putProduct() {
    return this.http.put(`${this.baseURL}/${this.formData.productCode}`, this.formData);
  }
  getProduct() {
    return this.http.get<Product[]>(this.baseURL);
  }
  deleteProduct(id:any) {
    return this.http.delete(this.baseURL+'/'+id);
  }
}
