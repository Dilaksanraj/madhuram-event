import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FuseAlertType } from '@fuse/components/alert';
import { AuthService } from 'app/core/auth/auth.service';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
    formFieldHelpers: string[] = [''];
    yearlyBilling: boolean = true;
    alert: { type: FuseAlertType; message: string } = {
        type   : 'success',
        message: ''
    };
    signInForm: FormGroup;
    showAlert: boolean = false;


    constructor(
        private _authService: AuthService,
        private _formBuilder: FormBuilder
    ) {}

    ngOnInit(): void {
        // Create the form
        this.signInForm = this._formBuilder.group({
            email     : ['', [Validators.required, Validators.email]],
            fname  : ['', Validators.required],
            date  : ['', Validators.required],
            source  : ['', Validators.required],
            rememberMe: ['']
        });
    }

    getFormFieldHelpersAsString(): string
    {
        return this.formFieldHelpers.join(' ');
    }

    signIn(): void
    {
    }
}
