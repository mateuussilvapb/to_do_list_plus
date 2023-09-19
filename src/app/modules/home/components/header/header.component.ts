import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EmitterService } from 'src/app/services/shared/emitter.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() public sectionName: string | null = '';

  constructor() {}
}
