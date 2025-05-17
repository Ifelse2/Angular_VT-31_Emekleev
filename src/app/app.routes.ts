import { Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { VideoComponent } from './video/video.component';
import { GlavComponent } from './glav/glav.component';
import { PNFComponent } from './pnf/pnf.component'; 
export const routes: Routes = [
{path: "first", component: FirstComponent },
{path:"video", component: VideoComponent},
{path:"glav", component: GlavComponent},
{path: "**", component: PNFComponent}

];
