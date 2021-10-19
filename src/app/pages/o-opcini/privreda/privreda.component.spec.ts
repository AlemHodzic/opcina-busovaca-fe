import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivredaComponent } from './privreda.component';

describe('PrivredaComponent', () => {
  let component: PrivredaComponent;
  let fixture: ComponentFixture<PrivredaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivredaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivredaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
