import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorijatComponent } from './historijat.component';

describe('HistorijatComponent', () => {
  let component: HistorijatComponent;
  let fixture: ComponentFixture<HistorijatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistorijatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorijatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
