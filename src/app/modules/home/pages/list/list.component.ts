import { Component, DoCheck, OnInit } from '@angular/core';
import { SectionList } from 'src/app/services/shared/models/section-list';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  public sectionName: string | null = '';

  public sectionList: Array<SectionList> = JSON.parse(
    localStorage.getItem('listSections') || '[]'
  );

  constructor() {}

  public addSection() {
    if (this.sectionName != null) {
      this.sectionName = this.sectionName?.trim();
    }
    if (this.sectionName != '' && this.sectionName != null) {
      this.sectionList.push({ section: this.sectionName, list: [] });
      this.sectionName = '';
    }
  }

  public receptor(event: SectionList) {
    if (event) {
      this.sectionList.sort();
      localStorage.setItem('listSections', JSON.stringify(this.sectionList));
    }
  }

  public deletarSecao(index: number) {
    const confirm = window.confirm('Você deseja realmente limpar a seção?');
    if (confirm) {
      this.sectionList.splice(index, 1);
      this.sectionList.sort();
      localStorage.setItem('listSections', JSON.stringify(this.sectionList));
    }
  }

  public limparSecao(index: number) {
    const confirm = window.confirm('Você deseja realmente limpar a seção?');
    if (confirm) {
      this.sectionList[index].list = [];
      this.sectionList.sort();
      localStorage.setItem('listSections', JSON.stringify(this.sectionList));
    }
  }
}
