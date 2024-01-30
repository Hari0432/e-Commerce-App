import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SimilaritemsPage } from './similaritems.page';

describe('SimilaritemsPage', () => {
  let component: SimilaritemsPage;
  let fixture: ComponentFixture<SimilaritemsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SimilaritemsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
