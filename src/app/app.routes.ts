import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'hello-world', component: HelloWorldComponent }
];
