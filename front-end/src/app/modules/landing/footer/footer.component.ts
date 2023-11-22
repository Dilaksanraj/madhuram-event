import { Component, OnInit } from '@angular/core';
import { AppsConst } from 'app/app.const';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

currentYear  = new Date().getFullYear();
instaLink = AppsConst.social_media.insta;
linkedIn = AppsConst.social_media.linkedIn;

constructor() { }

  ngOnInit(): void {

    console.log(this.currentYear);
  }

}
