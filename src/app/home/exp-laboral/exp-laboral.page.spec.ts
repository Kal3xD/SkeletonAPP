import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExpLaboralPage } from './exp-laboral.page';

describe('ExpLaboralPage', () => {
  let component: ExpLaboralPage;
  let fixture: ComponentFixture<ExpLaboralPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ExpLaboralPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
