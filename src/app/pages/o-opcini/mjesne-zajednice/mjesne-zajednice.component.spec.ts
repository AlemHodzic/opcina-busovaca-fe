import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MjesneZajedniceComponent } from './mjesne-zajednice.component';

describe('MjesneZajedniceComponent', () => {
  let component: MjesneZajedniceComponent;
  let fixture: ComponentFixture<MjesneZajedniceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MjesneZajedniceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MjesneZajedniceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
