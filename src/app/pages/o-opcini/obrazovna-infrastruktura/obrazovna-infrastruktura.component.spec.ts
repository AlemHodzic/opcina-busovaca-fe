import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObrazovnaInfrastrukturaComponent } from './obrazovna-infrastruktura.component';

describe('ObrazovnaInfrastrukturaComponent', () => {
  let component: ObrazovnaInfrastrukturaComponent;
  let fixture: ComponentFixture<ObrazovnaInfrastrukturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObrazovnaInfrastrukturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObrazovnaInfrastrukturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
