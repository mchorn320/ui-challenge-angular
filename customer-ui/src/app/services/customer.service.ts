import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor(private http: HttpClient) { }

  getCustomers() {
    const customerUrl = '/server/api/v1/customers';
    return this.http.get(customerUrl);
  }
  getCustomer(id: number) {
    const customerUrl = '/server/api/v1/customers/';
    return this.http.get(customerUrl + id);
  }
  createCustomer(customer) {
    const body = JSON.stringify(customer);
    return this.http.post('/server/api/v1/customers', body, httpOptions);
  }
  updateCustomer(customer) {
    const body = JSON.stringify(customer);
    return this.http.put('/server/api/v1/customers', body, httpOptions);
  }
  deleteCustomer(id: number) {
    const customerUrl = '/server/api/v1/customers/';
    return this.http.delete(customerUrl + id);
  }
}
