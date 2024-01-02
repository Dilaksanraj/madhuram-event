import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
@Component({
  selector: 'app-link-tree',
  templateUrl: './link-tree.component.html',
  styleUrls: ['./link-tree.component.scss']
})
export class LinkTreeComponent implements OnInit {

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
