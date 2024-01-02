import { NgModule } from '@angular/core';
import {  Route, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from 'app/shared/shared.module';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FuseCardModule } from '@fuse/components/card';
import { ImageSliderModule } from '../image-slider/imageSlider.module';
import { LinkTreeComponent } from './link-tree.component';

export const route: Route[] = [
    {
        path     : '',
        component: LinkTreeComponent
    }
];
@NgModule({
    declarations: [
    LinkTreeComponent

    ],
    imports     : [
        RouterModule.forChild(route),
        MatButtonModule,
        MatIconModule,
        MatButtonModule,
        MatDividerModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatTooltipModule,
        FuseCardModule,

        SharedModule,
        ImageSliderModule
    ]
})
export class LinkTreeModule
{
}
