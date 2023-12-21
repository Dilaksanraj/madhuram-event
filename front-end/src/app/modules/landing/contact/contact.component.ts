import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FuseAlertType } from '@fuse/components/alert';
import { AppsConst } from 'app/app.const';
import { AuthService } from 'app/core/auth/auth.service';
import { SlideInterface } from '../image-slider/interface/slide.interface';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
    instaLink = AppsConst.social_media.insta;
    linkedIn = AppsConst.social_media.linkedIn;
    facebookLink = AppsConst.social_media.facebookLink;
    email = AppsConst.social_media.madhuram_email;

    insta_pavi = AppsConst.social_media.insta_pavi;
    phone_pavi = AppsConst.social_media.phone_pavi;

    insta_dilaksan = AppsConst.social_media.insta_dilaksan;
    phone_dilaksan = AppsConst.social_media.phone_dilaksan;

    formFieldHelpers: string[] = [''];
    yearlyBilling: boolean = true;
    alert: { type: FuseAlertType; message: string } = {
        type: 'success',
        message: '',
    };
    signInForm: FormGroup;
    showAlert: boolean = false;

    slides: SlideInterface[] = [
        { url: '../../../../assets/images/about-us/ramyahindi.jpg', title: 'beach' },
        { url: '../../../../assets/images/about-us/ramya-white.jpg', title: 'boat' },
        { url: '../../../../assets/images/about-us/ramya-anu.jpg', title: 'forest' },
        { url: '../../../../assets/images/about-us/safari.jpeg', title: 'city' },
        { url: '../../../../assets/images/about-us/ramya-mathu.jpg', title: 'city' },
      ];



    constructor(
        private _authService: AuthService,
        private _formBuilder: FormBuilder
    ) {}

    ngOnInit(): void {

        // Create the form
        this.signInForm = this._formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            fname: ['', Validators.required],
            date: ['', Validators.required],
            source: ['', Validators.required],
            rememberMe: [''],
        });
    }

    getFormFieldHelpersAsString(): string {
        return this.formFieldHelpers.join(' ');
    }

    signIn(): void {}

    openInsta(url):void{
        window.open(this.instaLink, '_blank');
    }
}
