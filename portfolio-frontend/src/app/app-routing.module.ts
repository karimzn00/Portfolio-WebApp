import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectDetailsComponent } from './projects/project-details/project-details.component';
import { AddProjectComponent } from './projects/add-project/add-project.component';
import { AuthGuard } from './services/auth.service';






const routes: Routes = [
	{path : 'project:id', component : ProjectDetailsComponent},
	{path : 'add-project', component : AddProjectComponent},
	]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
