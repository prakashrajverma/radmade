import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationPeekComponent } from './notification-peek.component';

describe('NotificationPeekComponent', () => {
  let component: NotificationPeekComponent;
  let fixture: ComponentFixture<NotificationPeekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationPeekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationPeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
