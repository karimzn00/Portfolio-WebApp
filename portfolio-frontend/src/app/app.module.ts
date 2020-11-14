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
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule} from '@angular/forms';
import { AddBlogComponent } from './blogs/add-blog/add-blog.component';
import { BlogDetailComponent } from './blogs/blog-detail/blog-detail.component';
import { BlogListComponent } from './blogs/blog-list/blog-list.component';
import {MatBadgeModule} from '@angular/material/badge';
import { ContentComponent } from './projects/content/content.component';
import { CanvasWhiteboardModule } from 'node_modules/ng2-canvas-whiteboard';
import { LoginComponent } from './auth/login/login.component'

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
    LoginComponent
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
    CanvasWhiteboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
