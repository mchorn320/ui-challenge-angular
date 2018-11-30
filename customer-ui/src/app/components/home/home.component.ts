import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  customerform: FormGroup;
  validMessage =  '';
  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customerform = new FormGroup({
      firstname: new FormControl('', Validators.required),
      lastname:  new FormControl('', Validators.required),
      favoritecolor: new FormControl('', Validators.required),
      name: new FormControl('')
    });
  }
  submitCustomer() {
    if (this.customerform.valid) {
      this.validMessage = 'Your customer has been submitted. Thank you!',
      this.customerService.createCustomer(this.customerform.value).subscribe(
        data => {
          // this.customerform.reset();
          return true;
        },
        error => {
          return Observable.throw(error);
        }
      );
      } else {
        this.validMessage = 'Please fill out the form before submitting!';
      }
    }
  }

