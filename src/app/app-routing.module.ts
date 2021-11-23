import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {UsersComponent} from './components/users/users.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
}, {
  path: 'about',
  component: AboutComponent,
}, {
  path: 'users',
  component: UsersComponent,
}, {
  path: '**',
  redirectTo: '/',
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
