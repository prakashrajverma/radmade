import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationHostComponent } from './application-host.component';

describe('ExtensionHostComponent', () => {
  let component: ApplicationHostComponent;
  let fixture: ComponentFixture<ApplicationHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
