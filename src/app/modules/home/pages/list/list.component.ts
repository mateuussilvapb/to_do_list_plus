import { Component } from '@angular/core';
import { SectionList } from 'src/app/services/shared/models/section-list';
import Swal from 'sweetalert2';

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
    const confirm = window.confirm('Você deseja realmente excluir a seção?');
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

  importarLista(event: any) {
    const arquivoSelecionado = event.target.files[0];
    if (arquivoSelecionado) {
      if (arquivoSelecionado.type !== 'application/json') {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: "O arquivo selecionado precisa ser do tipo '.json'",
          width: 300,
        });
      } else {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          const dadosImportados = JSON.parse(e.target.result);
          const dadosLocalStorage = JSON.parse(
            localStorage.getItem('listSections') || ''
          );
          console.log(dadosLocalStorage);
          if (dadosLocalStorage.length == 0) {
            localStorage.setItem(
              'listSections',
              JSON.stringify(dadosImportados)
            );
            this.sectionList = JSON.parse(
              localStorage.getItem('listSections') || '[]'
            );
          } else {
            Swal.fire({
              title: 'Atenção!',
              text: 'Já existem dados no seu armazenamento local. Você deseja compor as informações a lista já existente ou deseja substituí-las?',
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Compor!',
              cancelButtonText: 'Substituir!',
              width: 300,
            }).then((result) => {
              if (result.isConfirmed) {
                const arrayAuxiliar: Array<SectionList> = [
                  ...dadosImportados,
                  ...this.sectionList,
                ];
                this.sectionList = arrayAuxiliar;
                this.sectionList.sort();
                localStorage.setItem(
                  'listSections',
                  JSON.stringify(this.sectionList)
                );
              } else {
                localStorage.setItem(
                  'listSections',
                  JSON.stringify(dadosImportados)
                );
                this.sectionList = JSON.parse(
                  localStorage.getItem('listSections') || '[]'
                );
              }
            });
          }
        };
        reader.readAsText(arquivoSelecionado);
      }
    }
  }

  public exportarLista() {
    const dadosJSON = JSON.stringify(localStorage.getItem('listSections') || '')
      .replace(/\\/g, '')
      .replace(/^"|"$/g, '');
    const blob = new Blob([dadosJSON], { type: 'application/json' });
    const url = window.URL.createObjectURL(blob);

    // Cria um elemento de âncora para fazer o download do arquivo
    const a = document.createElement('a');
    a.href = url;
    a.download = 'to_do_list.json';

    // Adiciona o elemento de âncora ao documento e simula o clique
    document.body.appendChild(a);
    a.click();

    // Remove o elemento de âncora depois do download
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }
}
