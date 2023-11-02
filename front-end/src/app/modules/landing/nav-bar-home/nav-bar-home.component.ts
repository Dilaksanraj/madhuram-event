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

@Component({
    selector: 'app-nav-bar-home',
    templateUrl: './nav-bar-home.component.html',
    styleUrls: ['./nav-bar-home.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavBarHomeComponent implements OnInit {
    header_variable = true;
    constructor(
        private _router: Router,
        @Inject(DOCUMENT) private document: Document
    ) {}

    @HostListener('window:scroll', [])
    onWindowScroll() {
        if (
            document.body.scrollTop > 100 ||
            document.documentElement.scrollTop > 100
        ) {
            console.log('scrolled');

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
