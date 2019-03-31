import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DinheiroComponent } from './dinheiro.component';

describe('DinheiroComponent', () => {
  let component: DinheiroComponent;
  let fixture: ComponentFixture<DinheiroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DinheiroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DinheiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
