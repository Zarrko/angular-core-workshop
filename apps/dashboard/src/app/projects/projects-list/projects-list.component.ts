import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '@angular-core/core-data';

@Component({
  selector: 'angular-core-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent {
  @Input() projects: Project[];
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
