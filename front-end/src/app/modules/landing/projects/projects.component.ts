import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
    //this is a variable that hold number
    projectcount: number = 0;
    //same process
    clientsCount: number = 0;
    clientcount: number = 0;
    noOfYearCount: number = 0;

    @ViewChild('myDivToDetect') myDivToDetect!: ElementRef;

    isDivVisible: boolean = false;

    @HostListener('window:scroll', [])
    onScroll(): void {
      this.checkDivVisibility();
    }

    checkDivVisibility(): void {
        const element = this.myDivToDetect.nativeElement;
        const elementPosition = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Checking if the div is visible in the viewport
        if (
          elementPosition.top >= 0 &&
          elementPosition.bottom <= windowHeight
        ) {
          this.isDivVisible = true;
          console.log('Div is visible!');
          // Perform actions when the div becomes visible
          // For example, trigger a function or update a variable
        } else {
          this.isDivVisible = false;
          console.log('Div is not visible!');
        }
      }

    constructor() {}


    ngOnInit(): void {}


        projectcountstop: any = setInterval(() => {
        if (
            this.isDivVisible
        ) {
            this.projectcount++;

            if (this.projectcount == 127) {
                clearInterval(this.projectcountstop);
            }
        }
    }, 10);

    clientcountstop: any = setInterval(() => {
        if (
            this.isDivVisible
        ) {
            this.clientcount++;
            if (this.clientcount == 62) {
                clearInterval(this.clientcountstop);
            }
        }

        else{
            this.projectcount = 0
        }
    }, 10);

    noOfYearCountstop: any = setInterval(() => {
        if (
            this.isDivVisible
        ) {
            this.noOfYearCount++;
            if (this.noOfYearCount == 2) {
                clearInterval(this.noOfYearCountstop);
            }
        }
    }, 10);

    resetValue(){

        this.projectcount = 0;
        this.clientsCount = 0;
        this.clientcount = 0;
        this.noOfYearCount = 0;
    }
}
