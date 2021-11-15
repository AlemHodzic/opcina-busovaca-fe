import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DokumentiZakComponent } from './dokumenti-zak.component';

describe('DokumentiZakComponent', () => {
  let component: DokumentiZakComponent;
  let fixture: ComponentFixture<DokumentiZakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DokumentiZakComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DokumentiZakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
