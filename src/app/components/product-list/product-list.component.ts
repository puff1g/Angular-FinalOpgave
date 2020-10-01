import { Component, OnInit } from '@angular/core';
import { ProductService } from "src/app/services/product.service";
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  product: any;
  currentproduct = null;
  currentIndex = -1;
  name = '';

  constructor(private ProductService: ProductService) { }

  ngOnInit() {
    this.retrieveProducts();
  }

  retrieveProducts() {
    this.ProductService.getAll()
      .subscribe(
        data => {
          this.product = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList() {
    this.retrieveProducts();
    this.currentproduct = null;
    this.currentIndex = -1;
  }

  setActiveProduct(product, index) {
    this.currentproduct = product;
    this.currentIndex = index;
  }

  removeAllProducts() {
    this.ProductService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.retrieveProducts();
        },
        error => {
          console.log(error);
        });
  }
  showAllProducts()
  {

  }
  AlltheProducts(){
      this.ProductService.getAll().subscribe(
        (response: any) => {
          if (response.status == true) {
            console.log("works")
          } else {
            console.log("nop")
          }
      });
  }

  getProducts() {
    this.searchName()
  }

  searchName() {
    this.ProductService.findByName(this.name)
      .subscribe(
        data => {
          this.product = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}