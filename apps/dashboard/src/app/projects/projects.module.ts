import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { MaterialModule } from '@angular-core/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProjectsComponent],
  imports: [CommonModule, ProjectsRoutingModule, MaterialModule, FormsModule],
  exports: [ProjectsComponent]
})
export class ProjectsModule {}
