import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { SlideInterface } from './interface/slide.interface';
@Component({
    selector: 'image-slider',
    templateUrl: './image-slider.component.html',
    styleUrls: ['./image-slider.component.scss'],
})
export class ImageSliderComponent implements OnInit {
    @Input() slides: SlideInterface[] = [];
    @Input() isAnimate;

    isTransitioning:boolean = false;
    currentIndex: number = 0;
    timeoutId?: number;

    constructor() {}

    ngOnInit(): void {
        this.resetTimer();
    }
    ngOnDestroy() {
        window.clearTimeout(this.timeoutId);
    }
    resetTimer() {
        if (this.timeoutId) {
            window.clearTimeout(this.timeoutId);
        }
        this.timeoutId = window.setTimeout(() => {
            this.goToNext();
        }, 4000);
    }

    goToPrevious(): void {
        const isFirstSlide = this.currentIndex === 0;
        const newIndex = isFirstSlide
            ? this.slides.length - 1
            : this.currentIndex - 1;

        this.resetTimer();
        this.currentIndex = newIndex;
    }

    goToNext(): void {
         this.isTransitioning = this.isAnimate?true : false;
        const isLastSlide = this.currentIndex === this.slides.length - 1;
        const newIndex = isLastSlide ? 0 : this.currentIndex + 1;

        this.resetTimer();
        this.currentIndex = newIndex;
        setTimeout(()=>{
            this.isTransitioning = false;
        },1000)
    }

    goToSlide(slideIndex: number): void {
        this.resetTimer();
        this.currentIndex = slideIndex;
    }

    getCurrentSlideUrl() {
        return `url('${this.slides[this.currentIndex].url}')`;
    }
}
