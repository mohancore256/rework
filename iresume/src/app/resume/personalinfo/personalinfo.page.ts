import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personalinfo',
  templateUrl: './personalinfo.page.html',
  styleUrls: ['./personalinfo.page.scss'],
})
export class PersonalinfoPage implements OnInit {

  constructor(private router:Router) {
   // sessionStorage.setItem("menu","ir/menu/landingPage");
 
   }

  ngOnInit() {
   // sessionStorage.setItem("menu","ir/menu/myProfile");
  }

}
