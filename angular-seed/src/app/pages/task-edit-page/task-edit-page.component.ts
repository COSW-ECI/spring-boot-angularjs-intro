import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-task-edit-page',
  templateUrl: './task-edit-page.component.html',
  styleUrls: ['./task-edit-page.component.css']
})
export class TaskEditPageComponent implements OnInit {
  private todoForm: FormGroup;

  constructor(
    public todoService: TodoService,
    public formBuilder: FormBuilder,
    public router: Router,
  ) {

  }

  ngOnInit() {
    this.todoForm = this.formBuilder.group({
      description: '',
      completed: '',
      priority: ''
    });
  }

  onSubmit() {
    this.todoService.create(
      this.todoForm.get('description').value,
      this.todoForm.get('priority').value,
      Boolean(this.todoForm.get('completed').value)
    );

    this.router.navigate(['/tasks']);
  }

}
