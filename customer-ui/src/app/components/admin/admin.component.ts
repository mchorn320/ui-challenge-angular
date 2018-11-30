import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public customers;
  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.getCustomers();
  }
  getCustomers() {
    this.customerService.getCustomers().subscribe((response) => { this.customers = response; },
    err => console.error(err),
    () => console.log('customers loaded')
    );
  }
}
