import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from 'environments/environment';
import { AppModule } from 'app/app.module';
import {
    Collapse,
    Dropdown,
    Ripple,
    Carousel,
    initTE
} from 'tw-elements';

if ( environment.production )
{
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
                        .catch(err => console.error(err));
