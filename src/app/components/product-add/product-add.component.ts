import { Component, OnInit } from '@angular/core';
import { ProductService } from "src/app/services/product.service";



@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  product = {
    name: '',
    description: '',
    pris: 0,
    amount: 0,
    published: false
  };
  submitted = false;

  constructor(private ProductService: ProductService) { }

  ngOnInit() {
      
  }
  
  saveProduct() {
    const data = {
      name: this.product.name,
      description: this.product.description,
      pris: this.product.pris,
      amount: this.product.amount,
    };
    //document.getElementById('lemonjuice').appendChild(this.product.name);
    console.log(data),
    this.ProductService.create(data)
    .subscribe(
      response => {
        console.log(data)
        console.log(response);
        this.submitted = true;
      },
      error => {
        console.log(error);
      });
    }
    
    newProduct() {
      this.submitted = false;
      this.product = {
        name: '',
        description: '',
        pris: 0,
        amount: 0,
        published: false
      };
  }

}
