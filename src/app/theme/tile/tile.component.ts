import { Component, Input } from '@angular/core';

@Component({
  selector: 'th-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent {

  @Input() icon; // fa
  @Input() type; // primary, info, success, danger
}
