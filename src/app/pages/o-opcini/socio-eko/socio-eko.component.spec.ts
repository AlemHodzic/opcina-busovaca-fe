import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocioEkoComponent } from './socio-eko.component';

describe('SocioEkoComponent', () => {
  let component: SocioEkoComponent;
  let fixture: ComponentFixture<SocioEkoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocioEkoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocioEkoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
