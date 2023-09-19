import { Injectable } from '@angular/core';
import { SectionList } from 'src/app/services/shared/models/section-list';

@Injectable({
  providedIn: 'root',
})
export class EmitterService {
  private informacao: string = '';

  constructor() {}

  public setInfo(info: string) {
    this.informacao = info;
  }

  public getInfo(): string {
    return this.informacao;
  }
}
