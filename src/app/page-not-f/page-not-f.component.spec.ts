import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotFComponent } from './page-not-f.component';

describe('PageNotFComponent', () => {
  let component: PageNotFComponent;
  let fixture: ComponentFixture<PageNotFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageNotFComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageNotFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
