import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VijeceComponent } from './vijece.component';

describe('VijeceComponent', () => {
  let component: VijeceComponent;
  let fixture: ComponentFixture<VijeceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VijeceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VijeceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
