import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OglasiPageComponent } from './oglasi-page.component';

describe('OglasiPageComponent', () => {
  let component: OglasiPageComponent;
  let fixture: ComponentFixture<OglasiPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OglasiPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OglasiPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
