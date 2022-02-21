import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductService } from '../Shared/product.service';
import { Product } from '../Shared/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(public service: ProductService) { }
  search: Product[] = [];
  singleProduct:boolean=false;
  ngOnInit(): void {
    this.getProducts();
  }
  getProducts() {
    this.service.getProduct().subscribe((response) => {
      this.search = response;
    })
  }
  onSubmit(form: NgForm) {
    this.service.postProduct().subscribe(
      res => {
        alert('New Product Added Succesfully.');
        this.resetForm(form);
        this.getProducts();
      },
      err => {
        this.resetForm(form);
        alert('Product Code Already Exists in Products Table/Create New Product')
      }
    );
  }
  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new Product();
  }
  edit(item: any) {
    console.log(item);
    this.service.formData=item
    this.singleProduct=true;
    // this.myModals.nativeElement.className = 'modal show';
  }
  onUpdate(form: NgForm){
    console.log(form);
    this.service.putProduct().subscribe(
      res => {
        alert('Product Updated Succesfully.');
        this.resetForm(form);
        this.getProducts();
      },
      err => {
        this.resetForm(form);
        alert('Product failed to update.')
      }
    );
  }
  deletFun(productCode: any) {
    console.log(productCode);
    this.service.deleteProduct(productCode).subscribe((resp: any) => {
      this.getProducts();
    })
  }

}
