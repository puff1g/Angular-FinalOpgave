import { Component, OnInit } from '@angular/core';
import { ProductService } from "src/app/services/product.service";
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  currentProduct = null;
  message = '';

  constructor(
    private ProductService: ProductService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.message = '';
    this.getProduct(this.route.snapshot.paramMap.get('id'));
  }

  getProduct(id) {
    this.ProductService.get(id)
      .subscribe(
        data => {
          this.currentProduct = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updatePublished(status) {
    const data = {
      Name: this.currentProduct.Name,
      description: this.currentProduct.description,
      published: status
    };

    this.ProductService.update(this.currentProduct.id, data)
      .subscribe(
        response => {
          this.currentProduct.published = status;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  updateProduct() {
    this.ProductService.update(this.currentProduct.id, this.currentProduct)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The Product was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteProduct() {
    this.ProductService.get(this.currentProduct.Id)
    this.ProductService.delete(this.currentProduct.Id)
    .subscribe(
      response => {
        console.log("works?")
          console.log(response);
          this.router.navigate(['/Products']);
        },
        error => {
          console.log(error);
        });
  }
}
