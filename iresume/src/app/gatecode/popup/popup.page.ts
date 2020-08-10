import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.page.html',
  styleUrls: ['./popup.page.scss'],
})
export class PopupPage implements OnInit {

  constructor(private router: Router,private elementRef: ElementRef) { }

  ngOnInit() {
  }
  ngAfterViewInit(){
    //To impletement coclor to body
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'grey';
 }
  tryAgain(){
    sessionStorage.setItem("gatecode",null);
    this.router.navigateByUrl('gatecode');

  }

}
