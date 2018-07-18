import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpstoreFormComponent } from './empstore-form.component';

describe('EmpstoreFormComponent', () => {
  let component: EmpstoreFormComponent;
  let fixture: ComponentFixture<EmpstoreFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpstoreFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpstoreFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
