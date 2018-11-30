import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css']
})
export class ViewCustomerComponent implements OnInit {
  public customer;
  editform: FormGroup;

  constructor(private customerService: CustomerService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getCustomerView(this.route.snapshot.params.id);
  }

  getCustomerView(id: number) {
    this.customerService.getCustomer(id).subscribe(
      data => {
        this.customer = data;
      },
      err => console.error(err),
      () => console.log('customers loaded')
    );
  }

}
