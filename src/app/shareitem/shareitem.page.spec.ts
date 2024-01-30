import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShareitemPage } from './shareitem.page';

describe('ShareitemPage', () => {
  let component: ShareitemPage;
  let fixture: ComponentFixture<ShareitemPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareitemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
