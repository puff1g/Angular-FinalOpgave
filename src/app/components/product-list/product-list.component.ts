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
  updateList(event: any, id: any, name: any, desc: any, pris: any, amount: any) {

    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    var value = idAttr.nodeValue;

    
    
    var row = {
      "productID": parseInt(document.getElementById(value).closest('tr').children[0].innerHTML),
      "name": document.getElementById(value).closest('tr').children[1].innerHTML,
      "description": document.getElementById(value).closest('tr').children[2].innerHTML,
      "pris": parseInt(document.getElementById(value).closest('tr').children[3].innerHTML),
      "amount": parseInt(document.getElementById(value).closest('tr').children[4].innerHTML),
    };

    // console.log(row);

    this.updatePublished(document.getElementById(value).closest('tr').children[0].innerHTML, row);
 
  }

  // updateProduct(row: any) {
  //   console.log(row.productID);
  //   var test = this.ProductService.update(row.productID, row)
  //     console.log(test);
  // }

  updatePublished(id, row) {

    console.log(row);

    this.ProductService.update(id, row)
      .subscribe(
        response => {
          this.product.published = status;
          console.log(response);
          console.log('we got a response!')
        },
        error => {
          console.log(error); //  this is what u get
          console.log('i am a failure')
        });



        console.log('update published');
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

  