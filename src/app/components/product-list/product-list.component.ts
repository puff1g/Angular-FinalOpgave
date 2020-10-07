import { Component, OnInit, ElementRef } from '@angular/core';
import { ProductService } from "src/app/services/product.service";
import { HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
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
    this.getProducts()
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
    this.product = this.http.get(baseUrl)
    console.log("works")
    console.log(this.http.get(baseUrl))
  }

  delete(product: ProductService): void {
    this.product = this.product.filter(h => h !== product);
    this.ProductService.delete(product).subscribe();
  }

  searchName() {
    this.ProductService.searchName()
      .subscribe(
        data => {
          this.product = data;
          console.log(data);
        },
        error => {
          console.log(error);
        }); 
  }
  updateList(id: any, name: any, desc: any, pris: any, amount: any) {
    
    // console.log(id);
    // console.log(name);
    // console.log(desc);
    // console.log(pris);
    var elm = document.querySelector('.update-btn').closest('tr'); // wait tror lowkeey vi overkomplicere det her xD
    var price = document.getElementById('fisk').closest('tr .product_td_id').innerHTML; // f u gey
    console.log(price);
    // this.elRef.nativeElement.className = "yourClass" 
    //const editField = event.target.textContent;
    //this.product[id][property] = editField; 
  }

  remove(name: any) {
    this.product.push(this.product[name]);
    this.product.splice(name, 1);
  }

  add() {
    if (this.product.length > 0) {
      const person = this.product[0];
      this.product.push(person);
      this.product.splice(0, 1);
    }
  }
  deleteProduct(productID: any) {
    console.log(productID); // still undifined....
    this.ProductService.deleteN(productID) // det er en fejl ik tænk på den
    .subscribe(
      response => {
        console.log("works?")
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }
}
/* searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found heroes matching "${term}"`)),
      catchError(this.handleError<Hero[]>('searchHeroes', []))
    );
  } */

  