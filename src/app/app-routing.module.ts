import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';

//import vueRouter from '../assets/vue/vue-routing.js';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomepageComponent },
  { path: 'signin', component: HomepageComponent},
  { path: 'account', component: HomepageComponent },
   //...vueRouter
 // { path: 'to-do', redirectTo: 'to-do' }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
