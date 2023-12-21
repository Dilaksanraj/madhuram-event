import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { SlideInterface } from '../image-slider/interface/slide.interface';

@Component({
  selector: 'app-home-main',
  templateUrl: './home-main.component.html',
  styleUrls: ['./home-main.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeMainComponent implements OnInit {

    textArray = ['wedding', 'birthday', 'reception'];


roles: string[] = ['Wedding', 'Birthday', 'Mahendi', 'Baby shower', 'Maternity'];
currentIndex = 0;
heading = 'We do';

  constructor(
    @Inject(DOCUMENT) private document: Document
  ) { }


  @HostListener('window:scroll', [])
    onWindowScroll() {

        if(document.body.scrollTop > 10 ||
            document.documentElement.scrollTop > 10){

                // document.getElementById('mainImg').classList.add('bg-color');
                // this.document.getElementById('mainImg').classList.remove('bg-luminosity');

                // document.getElementById('btn-home').classList.add('bg-app');
                // this.document.getElementById('mainImg').classList.remove('bg-black');


        }

        else{
            // document.getElementById('mainImg').classList.add('bg-luminosity');
            // this.document.getElementById('mainImg').classList.remove('bg-color')

            // document.getElementById('btn-home').classList.add('bg-black');
            // this.document.getElementById('btn-home').classList.remove('bg-app')
        }
    }

    slides: SlideInterface[] = [
        { url: '../../../../assets/images/about-us/ramyahindi.jpg', title: 'beach' },
        { url: '../../../../assets/images/about-us/ramya-white.jpg', title: 'boat' },
        { url: '../../../../assets/images/about-us/ramya-anu.jpg', title: 'forest' },
        { url: '../../../../assets/images/about-us/safari.jpeg', title: 'city' },
        { url: '../../../../assets/images/about-us/ramya-mathu.jpg', title: 'city' },
      ];

  ngOnInit(): void {

    setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.roles.length;
      }, 2000); // Change the word every 2 seconds (adjust as needed)
  }

  onScroll(event: any) {
    console.log(event);
}

getCurrentRole(): string {
    return this.roles[this.currentIndex];
  }

}
