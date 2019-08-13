import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-erphone',
  templateUrl: './erphone.component.html',
  styleUrls: ['./erphone.component.css']
})
export class ErphoneComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.close').click(function(){
      $('.red').addClass('hidden')
   })
  }

}
