import { Routes, RouterModule } from '@angular/router';

import { RippleComponent } from './ripple/ripple.component';
import { AlertComponent } from './alert/alert.component';
import { TimelineComponent } from './timeline/timeline.component';
import { LoginComponent } from './login/login.component';

import { AuthGuard } from './auth.guard';

const appRoutes: Routes = [
    { path: '', component: RippleComponent },
    { path: 'dashboard', component: TimelineComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: '**', redirectTo: '' }
]

export const routing = RouterModule.forRoot(appRoutes);