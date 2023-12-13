import { animate, state, style, transition, trigger } from '@angular/animations';
import { DOCUMENT } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    HostListener,
    Inject,
    OnInit,
    ViewEncapsulation,
} from '@angular/core';
import { Router } from '@angular/router';
import { AppsConst } from 'app/app.const';

@Component({
    selector: 'app-nav-bar-home',
    templateUrl: './nav-bar-home.component.html',
    styleUrls: ['./nav-bar-home.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        trigger('fadeInUp', [
          state('void', style({ opacity: 0, transform: 'translateY(20px)' })),
          transition(':enter', [
            animate('1s ease', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ])
      ]
})
export class NavBarHomeComponent implements OnInit {
    header_variable = true;
    constructor(
        private _router: Router,
        @Inject(DOCUMENT) private document: Document
    ) {}

    facebookLink = AppsConst.social_media.facebookLink;
    instaLink = AppsConst.social_media.insta;
    @HostListener('window:scroll', [])
    onWindowScroll() {

        if(document.body.scrollTop > 10 ||
            document.documentElement.scrollTop > 10){

                document.getElementById('subTitle').classList.add('scrolled-sm');
                this.document.getElementById('subTitle').classList.remove('header_change')
        }

        else{
            document.getElementById('subTitle').classList.add('header_change');
            this.document.getElementById('subTitle').classList.remove('scrolled-sm')
        }
        if (
            document.body.scrollTop > 15 ||
            document.documentElement.scrollTop > 15
        ) {
            document.getElementById('subTitle').classList.add('scrolled');
            this.document.getElementById('subTitle').classList.remove('header_change')
        }

        else{
            document.getElementById('subTitle').classList.add('header_change');
            this.document.getElementById('subTitle').classList.remove('scrolled')
        }
    }

    ngOnInit(): void {}

    goTo(fragment: any): void {
        this._router.navigateByUrl('home#' + fragment);
    }
    @HostListener('document.scroll')
    onScroll(event: any) {
        console.log(event);
    }
}
