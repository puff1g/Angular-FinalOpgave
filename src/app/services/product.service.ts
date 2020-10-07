import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'https://localhost:44312/api/products';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(baseUrl);
  }

  get(productID) {
    return this.http.get(`${baseUrl}/${productID}`);
  }

  create(data) {
    return this.http.post(baseUrl, data);
  }

  update(productID, data) {
    return this.http.put(`${baseUrl}/${productID}`, data);
  }

  delete(productID) {
    return this.http.delete(`${baseUrl}/${productID}`);
  }
  deleteN(productID){
    return this.http.delete(`${baseUrl}/${productID}`) 
  }

  deleteAll() {
    return this.http.delete(baseUrl);
  }
  searchName() {
    return this.http.get(`${baseUrl}?Name=${name}`);
  }
  
}
  
