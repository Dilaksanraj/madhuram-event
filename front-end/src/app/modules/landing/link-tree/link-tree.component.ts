import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { AppsConst } from 'app/app.const';
@Component({
  selector: 'app-link-tree',
  templateUrl: './link-tree.component.html',
  styleUrls: ['./link-tree.component.scss']
})
export class LinkTreeComponent implements OnInit {

    list:any []= [
        {
            name:'Instagram',
            link: AppsConst.social_media.insta,
            icon: '../../../../assets/icons/flat-icons/instagram.png'

        },
        {
            name:'Facebook',
            link: AppsConst.social_media.facebookLink,
            icon: '../../../../assets/icons/flat-icons/facebook.png'

        },
        {
            name:AppsConst.social_media.phone_pavi,
            link: AppsConst.social_media.insta,
            icon: '../../../../assets/icons/flat-icons/call.png'

        }
    ]
    isNotify:boolean = false;

  constructor(private clipboard: Clipboard) { }

  ngOnInit(): void {
  }


  copyLinkToClipboard(link:string): void {
    this.isNotify = true;
    this.clipboard.copy(link);
    console.log('Link copied to clipboard:', link);

    setTimeout(()=>{
        this.isNotify = false;
    },2000)
  }

}
