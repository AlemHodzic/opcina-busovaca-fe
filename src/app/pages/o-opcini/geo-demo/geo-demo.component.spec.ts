import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoDemoComponent } from './geo-demo.component';

describe('GeoDemoComponent', () => {
  let component: GeoDemoComponent;
  let fixture: ComponentFixture<GeoDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeoDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
