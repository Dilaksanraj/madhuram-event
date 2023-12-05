import { Component, HostListener, OnInit } from '@angular/core';
import * as AOS from 'aos';
@Component({
    selector   : 'app-root',
    templateUrl: './app.component.html',
    styleUrls  : ['./app.component.scss']
})
export class AppComponent implements OnInit
{
    /**
     * Constructor
     */
    isShow: boolean;
  topPosToStartShowing = 100;


    constructor()
    {
    }

    ngOnInit(): void {

        AOS.init();


      }

      @HostListener('window:scroll')
  checkScroll() {

    // window의 scroll top
    // Both window.pageYOffset and document.documentElement.scrollTop returns the same result in all the cases. window.pageYOffset is not supported below IE 9.

    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

      gotoTop() {
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }
}
