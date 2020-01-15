import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { MaterialModule } from '@angular-core/material';
import { FormsModule } from '@angular/forms';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { ProjectDetailsComponent } from './projects-details/projects-details.component';

@NgModule({
  imports: [CommonModule, ProjectsRoutingModule, MaterialModule, FormsModule],
  declarations: [
    ProjectsComponent,
    ProjectsListComponent,
    ProjectDetailsComponent
  ],
  exports: [ProjectsComponent]
})
export class ProjectsModule {}
