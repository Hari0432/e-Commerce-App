import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BuyitemPage } from './buyitem.page';

describe('BuyitemPage', () => {
  let component: BuyitemPage;
  let fixture: ComponentFixture<BuyitemPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyitemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
