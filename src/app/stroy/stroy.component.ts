import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-stroy',
  templateUrl: './stroy.component.html',
  styleUrls: ['./stroy.component.css']
})
export class StroyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.close').click(function(){
      $('.red').addClass('hidden')
   })
   $('.carousel').carousel({
    interval: 2000
  })
  }

}
