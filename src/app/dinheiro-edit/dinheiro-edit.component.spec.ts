import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DinheiroEditComponent } from './dinheiro-edit.component';

describe('DinheiroEditComponent', () => {
  let component: DinheiroEditComponent;
  let fixture: ComponentFixture<DinheiroEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DinheiroEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DinheiroEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
