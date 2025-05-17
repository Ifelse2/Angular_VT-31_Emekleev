import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServersfpsComponent } from './serversfps.component';

describe('ServersfpsComponent', () => {
  let component: ServersfpsComponent;
  let fixture: ComponentFixture<ServersfpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServersfpsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServersfpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
