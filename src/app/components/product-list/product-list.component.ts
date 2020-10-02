import { Component, OnInit } from '@angular/core';
import { ProductService } from "src/app/services/product.service";
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


const baseUrl = 'https://localhost:44312/api/products';

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

  constructor(private ProductService: ProductService, private http: HttpClient) { }

  ngOnInit() {

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
    let test101 = this.product = this.http.get(baseUrl)

    console.log(test101)
    console.log(this.http.get(baseUrl))
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
