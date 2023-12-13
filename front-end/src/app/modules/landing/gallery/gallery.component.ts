import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { InstagramService } from '../service/instagram.service';
import { AppsConst } from 'app/app.const';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

    instaLink = AppsConst.social_media.insta;
    feedData: any;
    photos:any;
    reels:any
    nextPage: string = '';
    hasNext: boolean;
    tab:string = "PHOTO"


    gallery = [
        [
            {
                name:'',
                src:'../../../../assets/images/gallery/g1.jpeg'
            },
            {
                name:'',
                src:'../../../../assets/images/gallery/g1.jpeg'

            },
            {
                name:'',
                src:'../../../../assets/images/gallery/g1.jpeg'

            },
            {
                name:'',
                src:'../../../../assets/images/gallery/g1.jpeg'

            }
        ],

        [
            {
                name:'',
                src:'../../../../assets/images/gallery/g1.jpeg'
            },
            {
                name:'',
                src:'../../../../assets/images/gallery/g1.jpeg'

            },
            {
                name:'',
                src:'../../../../assets/images/gallery/g1.jpeg'

            },
            {
                name:'',
                src:'../../../../assets/images/gallery/g1.jpeg'

            }
        ],


    ]
  constructor(private instagramService: InstagramService) { }

  ngOnInit(): void {

    this.instagramService.getInstagramFeed().subscribe(
        (data: any) => {
            console.log(data)
          this.feedData = data.data;
          this.photos = this.feedData.filter(e=>e.media_type !='VIDEO')
          this.reels = this.feedData.filter(e=>e.media_type =='VIDEO')
           // Adjust this according to the response structure
          console.log(this.feedData)
          this.nextPage = data.paging.next;
          this.hasNext = data.paging.next? true : false

        },
        error => {
          console.error('Error fetching Instagram feed:', error);
        }
      );

      this.instagramService.getLongCode().subscribe(
        (data: any) => {
            console.log(data)

        },
        error => {
          console.error('Error fetching Instagram feed:', error);
        }
      );

  }

  loadMore() {
    if (this.nextPage) {
      this.instagramService.getMoreInstagramData(this.nextPage).subscribe(
        (data: any) => {
            // this.feedData = data.data.filter(e=>e.media_type !='VIDEO');
          this.feedData = this.feedData.concat(data.data); // Append new data to existing feedData
          this.photos = this.feedData.filter(e=>e.media_type !='VIDEO')
          this.reels = this.feedData.filter(e=>e.media_type =='VIDEO')
          this.nextPage = data.paging.next; // Update the next page URL
          this.hasNext = data.paging.next? true : false;
        },
        error => {
          console.error('Error fetching more Instagram data:', error);
        }
      );
    }
  }
  onTabChanged(tabName:string):void{
    console.log(tabName)
    this.tab = tabName;
  }
}
