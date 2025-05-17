import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeecondComponent } from './seecond.component';

describe('SeecondComponent', () => {
  let component: SeecondComponent;
  let fixture: ComponentFixture<SeecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeecondComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
