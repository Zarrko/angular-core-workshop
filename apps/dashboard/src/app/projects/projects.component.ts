import { Component, OnInit } from '@angular/core';
import { ProjectsService, Project } from '@angular-core/core-data';
import { Observable } from 'rxjs';

@Component({
  selector: 'angular-core-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects$;

  selectedProject;
  constructor(private projectsService: ProjectsService) {}

  ngOnInit() {
    this.getProjects();
  }

  selectProject(project) {
    this.selectedProject = project;
  }

  getProjects() {
    this.projects$ = this.projectsService.all();
  }

  deleteProject(project) {
    this.projectsService
      .delete(project.id)
      .subscribe(result => this.getProjects());
  }

  // Mutate state in one place == selectedProject(project) fn
  cancel() {
    this.selectProject(null);
  }
}
