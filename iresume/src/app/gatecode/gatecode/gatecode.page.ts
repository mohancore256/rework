import { Component, OnInit,AfterViewInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gatecode',
  templateUrl: './gatecode.page.html',
  styleUrls: ['./gatecode.page.scss'],
})
export class GatecodePage implements OnInit {

  bodyTag: HTMLBodyElement = document.getElementsByTagName('body')[0];
  htmlTag: HTMLElement = document.getElementsByTagName('html')[0];

  gateCode :number;
  constructor(private router: Router,private elementRef: ElementRef) {    
    console.log("const");  
  }

  ngOnInit() {
   //sessionStorage.setItem("menu","/menu/gatecode");
   this.bodyTag.classList.add('bodybg-color');
   this.htmlTag.classList.add('bodybg-color');
  }

  ngAfterViewInit(){
    //To impletement coclor to body
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'grey';
 }

  gateCodeValidation(){
    console.log(this.gateCode);
    if(this.gateCode==2569){
      console.log("inside if");
      // sessionStorage.setItem("menu","ir/menu/landingPage");
      // sessionStorage.setItem("gatecode",this.gateCode.toString());
      this.router.navigateByUrl('ir/menu/landingPage');
    }else if(this.gateCode==2563){
      console.log("inside if");
      // sessionStorage.setItem("menu","ir3/menu/landingPage");
      // sessionStorage.setItem("gatecode",this.gateCode.toString());
      this.router.navigateByUrl('ir3/menu/landingPage');
    }
    else{
     console.log("inside else");
    //  sessionStorage.setItem("menu","menu/landingPage");
       this.router.navigateByUrl('popup');
  }
  }
}
