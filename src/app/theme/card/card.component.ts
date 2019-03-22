import { Component, Input } from '@angular/core';

@Component({
  selector: 'th-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() title: string;
  @Input() header: boolean;
  @Input() footer: boolean;
}
