import { Component, DoCheck, EventEmitter, Input, Output } from '@angular/core';
import { SectionList } from 'src/app/services/shared/models/section-list';
import { Task } from 'src/app/services/shared/models/task';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements DoCheck {
  @Input() section: SectionList = { section: '', list: [] };
  @Output() emitter = new EventEmitter();

  ngDoCheck(): void {
    if (this.section?.list) {
      this.section.list.sort(
        (first, last) => Number(first.checked) - Number(last.checked)
      );
      if (this.section) {
        this.emitter.emit(this.section);
      }
    }
  }

  public deleteItemTaskList(event: number) {
    if (this.section?.list) {
      this.section?.list.splice(event, 1);
    }
  }

  public setEmittTaskList(event: string) {
    if (event != '') {
      let contains = false;
      this.section.list?.forEach((item: Task) => {
        if (item.task === event) {
          contains = true;
        }
      });
      if (contains) {
        Swal.fire({
          icon: 'warning',
          title: 'Atenção!',
          text: 'O item informado já está presente na lista.',
          width: 400,
        });
        return;
      } else {
        this.section.list?.push({ task: event, checked: false });
      }
    }
  }

  public validationInput(event: string, index: number) {
    if (!event.length) {
      const confirm = window.confirm('Tarefa vazia! Deseja deletar?');
      if (confirm) {
        this.deleteItemTaskList(index);
      }
    }
  }
}
