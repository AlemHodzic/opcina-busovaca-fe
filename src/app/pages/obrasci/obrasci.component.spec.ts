import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObrasciComponent } from './obrasci.component';

describe('ObrasciComponent', () => {
  let component: ObrasciComponent;
  let fixture: ComponentFixture<ObrasciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObrasciComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObrasciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
