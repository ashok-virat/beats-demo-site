import { Component, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-buying-cart',
  templateUrl: './buying-cart.component.html',
  styleUrls: ['./buying-cart.component.css']
})
export class BuyingCartComponent implements OnInit {

  constructor(public toastr: ToastrService) {
     
   }

  ngOnInit() {
    
  }
  public order=()=>{
    console.log('clcicked')
  this.toastr.success('your order is placed')
  }
}
