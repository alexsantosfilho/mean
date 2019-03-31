import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DinheiroDetailComponent } from './dinheiro-detail.component';

describe('DinheiroDetailComponent', () => {
  let component: DinheiroDetailComponent;
  let fixture: ComponentFixture<DinheiroDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DinheiroDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DinheiroDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
