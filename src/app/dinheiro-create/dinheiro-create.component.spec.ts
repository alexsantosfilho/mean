import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DinheiroCreateComponent } from './dinheiro-create.component';

describe('DinheiroCreateComponent', () => {
  let component: DinheiroCreateComponent;
  let fixture: ComponentFixture<DinheiroCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DinheiroCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DinheiroCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
