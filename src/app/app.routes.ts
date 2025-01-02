import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { LookAndFeelComponent } from './look-and-feel/look-and-feel.component';
import { GenCompAbcComponent } from './gen-comp-abc/gen-comp-abc.component';
import { GenCompDefComponent } from './gen-comp-def/gen-comp-def.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'hello-world', component: HelloWorldComponent },
  { path: 'look-and-feel', component: LookAndFeelComponent },
  { path: 'gen-comp-abc', component: GenCompAbcComponent },
  { path: 'gen-comp-def', component: GenCompDefComponent },
];
