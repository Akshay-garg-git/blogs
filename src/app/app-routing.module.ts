import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { BlogsComponent } from './components/blogs/blogs.component';


const routes: Routes = [
		
	{
		path: '',
		component: LoginComponent,
	},
	{
		path: 'blogs',
		component: BlogsComponent,
	},
	{
		path: 'add-blog',
		component: LoginComponent,
	},	

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
