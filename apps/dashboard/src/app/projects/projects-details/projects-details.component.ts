import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '@angular-core/core-data';

@Component({
  selector: 'angular-core-projects-details',
  templateUrl: './projects-details.component.html',
  styleUrls: ['./projects-details.component.css']
})
export class ProjectDetailsComponent {
  currentProject: Project;
  originalTitle;
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  @Input() set project(value) {
    if (value) this.originalTitle = value.title;
    this.currentProject = Object.assign({}, value);
  }
}
