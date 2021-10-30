import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlasnikComponent } from './glasnik.component';

describe('GlasnikComponent', () => {
  let component: GlasnikComponent;
  let fixture: ComponentFixture<GlasnikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlasnikComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlasnikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
