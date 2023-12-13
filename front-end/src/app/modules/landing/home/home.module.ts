import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from 'app/shared/shared.module';
import { LandingHomeComponent } from 'app/modules/landing/home/home.component';
import { landingHomeRoutes } from 'app/modules/landing/home/home.routing';
import { NavBarHomeComponent } from '../nav-bar-home/nav-bar-home.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FuseCardModule } from '@fuse/components/card';
import { ContactComponent } from '../contact/contact.component';
import { TeamComponent } from '../team/team.component';
import { AboutUsComponent } from '../about-us/about-us.component';
import { ProjectsComponent } from '../projects/projects.component';
import { FooterComponent } from '../footer/footer.component';
import { GalleryComponent } from '../gallery/gallery.component';
import { SketchComponent } from '../sketch/sketch.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeMainComponent } from '../home-main/home-main.component';

@NgModule({
    declarations: [
        LandingHomeComponent,
        NavBarHomeComponent,
        AboutUsComponent,
        ContactComponent,
        TeamComponent,
        ProjectsComponent,
        FooterComponent,
        GalleryComponent,
        SketchComponent,
        HomeMainComponent

    ],
    imports     : [
        RouterModule.forChild(landingHomeRoutes),
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

        SharedModule
    ]
})
export class LandingHomeModule
{
}
