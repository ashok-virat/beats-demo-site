import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.css']
})
export class SpeakersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.close').click(function(){
      $('.red').addClass('hidden')
   })
   $('.white').click(function(){
  
     $('#clrchange').attr("src","../assets/ML4P2_AV1.jfif")
   })
   $('.black').click(function(){
  
    $('#clrchange').attr("src","../assets/GUEST_47fc3eef-3e60-4acd-9487-11f569a4d492.jfif")
  })
  $('.reds').click(function(){
  
    $('#clrchange').attr("src","../assets/Beats-Pill-Wireless-Speaker---Red-7982830.webp")
  })
  }

}
