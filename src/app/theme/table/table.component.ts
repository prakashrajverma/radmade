import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { SortDirection } from '../shared/sort-direction';
import { ISortTable } from '../shared/sort-table';

@Component({
  selector: 'th-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TableComponent implements OnInit {

  @Input() head: any[];
  @Input() body: any[];


  public header: ISortTable[] = [];
  public resultPerPage = 15;
  public result: any[];
  public start: number;
  private count: number;


  @Input() pagination: number;
  @Output() OnChange = new EventEmitter<any>();
  @Input() sortable = true;
  sortableHeaders: ISortTable[] = [];

  row = 1;
  properties = [];
  pageCollection: number;

  private orderBy: ISortTable;

  constructor() { }

  ngOnInit() {
    this.count = this.body.length;
    this.setResultsPerPage();
    this.head.forEach((item: any) => {
      this.header.push({ column: item, direction: SortDirection.none });
    });


    for (const key in this.result[0]) {
      if (this.result[0].hasOwnProperty(key)) {
        this.properties.push(key);
      }
    }
  }

  public setResultsPerPage(): void {
    this.pageCollection = Math.ceil(this.count / this.resultPerPage);
    this.onPageChange(1);
  }
  public onPageChange(event: any): void {
    this.start = this.resultPerPage * (event - 1);
    const end = this.resultPerPage * event;
    this.result = this.body.slice(this.start, end);
  }

  public onSort(head: ISortTable): void {
    /********************UI CODE******************* */
    this.header.forEach(item => {
      if (item.column !== head.column) {
        item.direction = SortDirection.none;
      }
    });
    if (head.direction === SortDirection.none) {
      head.direction = SortDirection.asc;
    } else if (head.direction === SortDirection.asc) {
      head.direction = SortDirection.desc;
    } else {
      head.direction = SortDirection.asc;
    }
    /************************************************** */
    this.sort(head);
  }

  private sort(head: ISortTable) {
    this.orderBy = head;
    const columnIndex = this.head.indexOf(head.column);
    const colName: string = this.properties[columnIndex];
    this.result.sort((a: any, b: any) => {
      let colA = a[colName];
      let colB = b[colName];
      try {
        if (colName.toLowerCase().includes('date')) {
          colA = new Date(a[colName]);
          colB = new Date(b[colName]);
        }
      } catch (error) {
        colA = a[colName];
        colB = b[colName];
      }



      if (colA < colB) {
        return head.direction === SortDirection.asc ? -1 : 1;
      } else if (colA > colB) {
        return head.direction === SortDirection.asc ? 1 : -1;;
      } else {
        return 0;
      }
    });

  }

}
