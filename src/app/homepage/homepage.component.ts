import { Component, OnInit } from '@angular/core';
import { ProductService } from "src/app/services/product.service";
import { HttpClient} from '@angular/common/http';

const baseUrl = 'https://localhost:44312/api/products';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private ProductService: ProductService, private http: HttpClient) { }
  product: any;

  
  ngOnInit() {
    this.getProducts()
  }

  getProducts() {
    let test101 = this.product = this.http.get(baseUrl)

    console.log(test101)
    console.log(this.http.get(baseUrl))
  }

}
