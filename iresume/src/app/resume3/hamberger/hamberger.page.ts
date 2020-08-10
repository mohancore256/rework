import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-hamberger',
  templateUrl: './hamberger.page.html',
  styleUrls: ['./hamberger.page.scss'],
})
export class HambergerPage implements OnInit {

  sessionValue : string="";
  //public page: any ;
  pages=[
    {
      id:'1',
      title:'Home',
      url:'ir/menu/landingPage',
      icon:'home-outline',
      iconActive:'home-sharp',
    },
    {
      id:'2',
      title:'Personal Information',
      url:'ir/menu/myProfile',
      icon:'person-outline',
      iconActive:'person-sharp',
    },
   
  ]

  selectedPath='';

  constructor(private menu: MenuController,private router :Router,) { 
    this.router.events.subscribe((event:RouterEvent) =>{
      this.selectedPath=event.url;
      console.log("selected path "+this.selectedPath);
      this.sessionValue=sessionStorage.getItem("menu");
      console.log("session menu url value "+this.sessionValue);
      console.log("Iresuem Hamburger");
    })
  }

  ngOnInit() {
  }

 openCustom() {
    this.menu.enable(true, 'hamburger');
    this.menu.open('hamburger');
  }
  navigate(id){
    console.log(id);
    console.log("item click");
    for (var val of this.pages) {
      console.log(val); 
      if(id==val.id){
        sessionStorage.setItem("targetURL",val.url);
        break;
      }
      // else{
      //   sessionStorage.setItem("targetURL",sessionStorage.getItem('menu'));
      // }
    }
    this.router.navigateByUrl(sessionStorage.getItem('targetURL'));
  }
}
