import { ChangeDetectionStrategy, Component, HostListener, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar-home',
  templateUrl: './nav-bar-home.component.html',
  styleUrls: ['./nav-bar-home.component.scss'],
  encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavBarHomeComponent implements OnInit {
    header_variable = true;
  constructor( private _router: Router) { }

  ngOnInit(): void {
  }

  goTo(fragment:any): void{

    this._router.navigateByUrl('home#'+fragment);

  }
  @HostListener('document.scroll')
  scrollfunction(){

  }
}
