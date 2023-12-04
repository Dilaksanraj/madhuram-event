import { Component, OnInit } from '@angular/core';
import { InstagramService } from '../service/instagram.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

    feedData: any;
    nextPage: string = '';


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
          this.feedData = data.data.filter(e=>e.media_type !='VIDEO'); // Adjust this according to the response structure
          console.log(this.feedData)
          this.nextPage = data.paging.next;

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
          this.feedData = this.feedData.concat(data.data.filter(e=>e.media_type !='VIDEO')); // Append new data to existing feedData
          this.nextPage = data.paging.next; // Update the next page URL
        },
        error => {
          console.error('Error fetching more Instagram data:', error);
        }
      );
    }
  }

}
