import { Component, OnInit } from '@angular/core';

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

    projectcountstop: any = setInterval(() => {
        if (
            document.body.scrollTop > 5000 ||
            document.documentElement.scrollTop > 5000
        ) {
            this.projectcount++;

            if (this.projectcount == 127) {
                clearInterval(this.projectcountstop);
            }
        }
    }, 10);

    clientcountstop: any = setInterval(() => {
        if (
            document.body.scrollTop > 5000 ||
            document.documentElement.scrollTop > 5000
        ) {
            this.clientcount++;
            if (this.clientcount == 62) {
                clearInterval(this.clientcountstop);
            }
        }
    }, 10);

    noOfYearCountstop: any = setInterval(() => {
        if (
            document.body.scrollTop > 5000 ||
            document.documentElement.scrollTop > 5000
        ) {
            this.noOfYearCount++;
            if (this.noOfYearCount == 2) {
                clearInterval(this.noOfYearCountstop);
            }
        }
    }, 10);

    constructor() {}

    ngOnInit(): void {}
}
