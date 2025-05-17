import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlavComponent } from './glav.component';

describe('GlavComponent', () => {
  let component: GlavComponent;
  let fixture: ComponentFixture<GlavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
