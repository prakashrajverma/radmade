import { Component, OnInit, Input } from '@angular/core';
import { RibbonConfig } from '../shared/ribbon-config';

@Component({
  selector: 'th-card-group',
  templateUrl: './card-group.component.html',
  styleUrls: ['./card-group.component.scss']
})
export class CardGroupComponent implements OnInit {

  @Input() title: string;
  @Input() ribbon: RibbonConfig;
  constructor() { }

  ngOnInit() {
    if (!this.ribbon) {
      this.ribbon = {
        type: '',
        icon: '',
        class: 'ribbon-default',
        position: ''
      };
    } else {
      if (!this.ribbon.class) {
        this.ribbon.class = 'ribbon-default';
      }
    }
  }


}
