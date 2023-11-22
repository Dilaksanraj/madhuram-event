import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

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
  constructor() { }

  ngOnInit(): void {
  }

}
