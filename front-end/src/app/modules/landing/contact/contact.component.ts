import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FuseAlertType } from '@fuse/components/alert';
import { AppsConst } from 'app/app.const';
import { AuthService } from 'app/core/auth/auth.service';


@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
    instaLink = AppsConst.social_media.insta;
    linkedIn = AppsConst.social_media.linkedIn;
    facebookLink = AppsConst.social_media.facebookLink;

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

    gallary = [
        {
            name: '',
            src: '',
        },
        {
            name: '',
            src: '',
        },
        {
            name: '',
            src: '',
        },
        {
            name: '',
            src: '',
        },
        {
            name: '',
            src: '',
        },
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

    openInsta():void{
        window.open(this.instaLink, '_blank');
    }
}
