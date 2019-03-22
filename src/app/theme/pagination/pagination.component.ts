import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'th-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  private static MAX_SIZE;

  first_active = true;
  last_active = true;
  previous_active = true;
  next_active = true;

  pages: number[];
  current: number;

  start: number;
  end: number;

  @Output() pageChange = new EventEmitter<number>()
  private _pageCollection: number;
  @Input() set pageCollection(value: number) {
    this._pageCollection = value;
    this.maxSize = PaginationComponent.MAX_SIZE;
    this.setPageCollection();
  }
  get pageCollection(): number {
    return this._pageCollection;
  }
  private _maxSize: number;
  @Input() set maxSize(value: number) {
    PaginationComponent.MAX_SIZE = value;
    if (this._pageCollection > 0 && value > this._pageCollection) {
      value = this._pageCollection;
    }
    this._maxSize = value;
  }
  get maxSize(): number {
    return this._maxSize;
  }

  constructor() { }

  ngOnInit() {
    this.current = 1;
    this.pageChange.emit(this.current);
    this.start = 1;
    this.end = this.start + this.maxSize - 1;
    // should be last item to be called
    this.linkActivation();
  }
  onPageSelect(page) {
    if (this.current === page) { return; }
    this.current = page;
    this.pageChange.emit(this.current);
    if (this.current > this.end) {
      this.start = this.current;
      this.end = this.start + this.maxSize - 1;
    } else if (this.current < this.start) {
      this.start = this.start - this.maxSize;
      this.end = this.start + this.maxSize - 1;
    }
    // should be last item to be called
    this.linkActivation();
  }

  jumpTo(page) {
    if (this.current === page) { return; }
    this.current = page;
    this.pageChange.emit(this.current);
    if (this.current === this.pageCollection) {
      this.start = this.pageCollection - this.maxSize + 1
      this.end = this.start + this.maxSize - 1;
    } else if (this.current === 1) {
      this.start = 1;
      this.end = this.start + this.maxSize - 1;
    }
    // should be last item to be called
    this.linkActivation();
  }

  private setPageCollection() {
    this.current = 1;
    this.pageChange.emit(this.current);
    this.start = 1;
    this.end = this.start + this.maxSize - 1;
    // should be last item to be called
    this.linkActivation();
  }
  linkActivation() {
    this.pages = Array(this.pageCollection).fill(this, this.start - 1, this.end).map((x, i) => i + 1);
    this.pages = this.pages.filter(Number);
    if (this.pageCollection === 1) {
      this.first_active = false;
      this.last_active = false;
      this.previous_active = false;
      this.next_active = false;
      return;
    }
    if (this.current === 1) {
      this.first_active = false;
      this.previous_active = false;
      this.last_active = true;
      this.next_active = true;

    } else if (this.current === this.pageCollection) {
      this.last_active = false;
      this.next_active = false;
      this.first_active = true;
      this.previous_active = true;

    } else {
      this.first_active = true;
      this.last_active = true;
      this.previous_active = true;
      this.next_active = true;
    }
  }

}
