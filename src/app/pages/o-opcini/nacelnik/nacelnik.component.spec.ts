import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NacelnikComponent } from './nacelnik.component';

describe('NacelnikComponent', () => {
  let component: NacelnikComponent;
  let fixture: ComponentFixture<NacelnikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NacelnikComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NacelnikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
