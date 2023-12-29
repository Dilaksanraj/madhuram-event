import { DOCUMENT } from '@angular/common';
import {
    Component,
    HostListener,
    Inject,
    OnInit,
    ViewEncapsulation,
} from '@angular/core';
import { SlideInterface } from '../image-slider/interface/slide.interface';

@Component({
    selector: 'app-home-main',
    templateUrl: './home-main.component.html',
    styleUrls: ['./home-main.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class HomeMainComponent implements OnInit {
    roles: string[] = [
        'Wedding',
        'Birthday',
        'Mahendi',
        'Baby shower',
        'Maternity',
    ];
    currentIndex = 0;
    heading = 'We do';

    constructor(@Inject(DOCUMENT) private document: Document) {}

    @HostListener('window:scroll', [])
    onWindowScroll() {
        if (
            document.body.scrollTop > 10 ||
            document.documentElement.scrollTop > 10
        ) {
            // document.getElementById('mainImg').classList.add('bg-color');
            // this.document.getElementById('mainImg').classList.remove('bg-luminosity');
            // document.getElementById('btn-home').classList.add('bg-app');
            // this.document.getElementById('mainImg').classList.remove('bg-black');
        } else {
            // document.getElementById('mainImg').classList.add('bg-luminosity');
            // this.document.getElementById('mainImg').classList.remove('bg-color')
            // document.getElementById('btn-home').classList.add('bg-black');
            // this.document.getElementById('btn-home').classList.remove('bg-app')
        }
    }

    slides: SlideInterface[] = [
        {
            url: '../../../../assets/images/wall/banner1.png',
            title: 'beach',
        },
        {
            url: '../../../../assets/images/wall/banner2.png',
            title: 'boat',
        },
    ];

    ngOnInit(): void {
        setInterval(() => {
            this.currentIndex = (this.currentIndex + 1) % this.roles.length;
        }, 2000); // Change the word every 2 seconds (adjust as needed)
    }

    onScroll(event: any) {
        console.log(event);
    }

    getCurrentRole(): string {
        // this.updateRoleText(this.roles[this.currentIndex])
        return this.roles[this.currentIndex];
    }

     updateRoleText(newRole) {
        const roleText = document.getElementById('roleText');
        roleText.style.opacity = '0'; // Fading out the text

        setTimeout(function () {
            roleText.textContent = newRole;
            roleText.style.opacity = '0'; // Fading in the new text
        }, 300); // Adjust the duration based on your transition time in CSS (300ms in this case)
    }

    // Example of how to use the function:
    // Call updateRoleText() whenever getCurrentRole() updates the role text
    // For example:
    // updateRoleText("New Role Text");

}
