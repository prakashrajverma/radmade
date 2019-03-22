import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'th-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.scss']
})
export class ProgressbarComponent implements OnInit {

  @Input() progress = '50';
  @Input() color = 'green';

  ngOnInit() {
    if (!this.progress.includes('%')) {
        this.progress = this.progress + '%';
    }
  }

}
