import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatDivider} from '@angular/material/divider';
import {MatFabButton} from '@angular/material/button';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {MatList, MatListItem} from '@angular/material/list';
import {MatIcon} from '@angular/material/icon';
import {TaskService} from '../services/task.service';
import {TaskModel} from '../models/Task-model';

@Component({
  selector: 'app-todo-list',
  imports: [
    FormsModule,
    MatDivider,
    MatFabButton,
    MatFormField,
    MatIcon,
    MatInput,
    MatLabel,
    MatList,
    MatListItem
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent implements  OnInit {

  public constructor(
    private taskService: TaskService) {

  }
  public ngOnInit() {
    this.getTarefas()
  }

  public getTarefas(): void {
    this.taskService.getTasks().subscribe((response ) => {
      this.listaDeTarefas = response;
    })
};


  tarefa: string = '';

  listaDeTarefas: Array<TaskModel> = [];

  public addTarefa() {
    const tarefa: TaskModel = {
      nome: this.tarefa,
      descricao: '',
      conluida: true,
    };
    // this.listaDeTarefas.push(this.tarefa);
    // this.tarefa = '';
    this.taskService.createTask(tarefa).subscribe((response) => {
      this.getTarefas();
      this.tarefa = ''
    })
  }



}
