import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpravaComponent } from './uprava.component';

describe('UpravaComponent', () => {
  let component: UpravaComponent;
  let fixture: ComponentFixture<UpravaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpravaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpravaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
