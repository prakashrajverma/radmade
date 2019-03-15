import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagePeekComponent } from './message-peek.component';

describe('MessagePeekComponent', () => {
  let component: MessagePeekComponent;
  let fixture: ComponentFixture<MessagePeekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagePeekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagePeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
