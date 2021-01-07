import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProjectComponent } from './projects/add-project/add-project.component';
import { ProjectDetailsComponent } from './projects/project-details/project-details.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDividerModule} from '@angular/material/divider';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AddBlogComponent } from './blogs/add-blog/add-blog.component';
import { BlogDetailComponent } from './blogs/blog-detail/blog-detail.component';
import { BlogListComponent } from './blogs/blog-list/blog-list.component';
import {MatBadgeModule} from '@angular/material/badge';
import { ContentComponent } from './projects/content/content.component';
import { CanvasWhiteboardModule } from 'node_modules/ng2-canvas-whiteboard';
import { LoginComponent } from './auth/login/login.component'
import {MatDialogModule} from '@angular/material/dialog';
import { AuthService, AuthInterceptor, AuthGuard } from './services/auth.service';
import { HomeComponent } from './home/home.component';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { DatePipe } from '@angular/common';
import { Success } from './auth/login/success'
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { EditBlogComponent } from './blogs/edit-blog/edit-blog.component';
import { EditProjectComponent } from './projects/edit-project/edit-project.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatChipsModule} from '@angular/material/chips';
import { EditProfilComponent } from './home/edit-profil/edit-profil.component';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    AddProjectComponent,
    ProjectDetailsComponent,
    ProjectListComponent,
    AddBlogComponent,
    BlogDetailComponent,
    BlogListComponent,
    ContentComponent,
    LoginComponent,
    HomeComponent,
    Success,
    EditBlogComponent,
    EditProjectComponent,
    EditProfilComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    BrowserAnimationsModule,
    FormsModule,
    MatBadgeModule,
    CanvasWhiteboardModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatIconModule,
    MatDatepickerModule,
    AngularEditorModule,
    MatTooltipModule,
    MatButtonModule,
    MatMenuModule,
    MatSidenavModule,
    MatChipsModule,
    MatFormFieldModule
    
  ],
  providers: [
  DatePipe,
  AuthGuard,
  AuthService,
  {
    provide : HTTP_INTERCEPTORS,
    useClass : AuthInterceptor,
    multi : true,
  }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
