import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurizamComponent } from './turizam.component';

describe('TurizamComponent', () => {
  let component: TurizamComponent;
  let fixture: ComponentFixture<TurizamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurizamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TurizamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
