import { Component, OnInit } from '@angular/core';
import { ListaService } from '../lista.service';
import { ToDoInterface } from '../ToDoInterface';

@Component({
  selector: 'app-to-do-comp',
  templateUrl: './to-do-comp.component.html',
  styleUrls: ['./to-do-comp.component.css'],
})
export class ToDoCompComponent implements OnInit {
  ToDo: ToDoInterface[] = [];

  constructor(private ListaService: ListaService) {}

  ngOnInit(): void {
    this.ListaService.ObserToDo().subscribe((inter) => (this.ToDo = inter));
  }
}
