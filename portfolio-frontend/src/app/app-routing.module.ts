import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectDetailsComponent } from './projects/project-details/project-details.component';
import { AddProjectComponent } from './projects/add-project/add-project.component';
import { AuthGuard } from './services/auth.service';
import { HomeComponent } from './home/home.component';
import { BlogDetailComponent } from './blogs/blog-detail/blog-detail.component';






const routes: Routes = [
	{path : '', component : HomeComponent},
	{path : 'project:id', component : ProjectDetailsComponent},
	{path : 'add-project', component : AddProjectComponent},
	{path : 'blogs/:id', component : BlogDetailComponent},
	]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
