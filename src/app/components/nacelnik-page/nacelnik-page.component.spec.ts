import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NacelnikPageComponent } from './nacelnik-page.component';

describe('NacelnikPageComponent', () => {
  let component: NacelnikPageComponent;
  let fixture: ComponentFixture<NacelnikPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NacelnikPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NacelnikPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
