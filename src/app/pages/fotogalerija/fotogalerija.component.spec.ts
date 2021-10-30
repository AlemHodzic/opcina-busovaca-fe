import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotogalerijaComponent } from './fotogalerija.component';

describe('FotogalerijaComponent', () => {
  let component: FotogalerijaComponent;
  let fixture: ComponentFixture<FotogalerijaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FotogalerijaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FotogalerijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
