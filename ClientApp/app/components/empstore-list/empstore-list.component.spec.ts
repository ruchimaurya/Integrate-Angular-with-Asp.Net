import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpstoreListComponent } from './empstore-list.component';

describe('EmpstoreListComponent', () => {
  let component: EmpstoreListComponent;
  let fixture: ComponentFixture<EmpstoreListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpstoreListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpstoreListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
