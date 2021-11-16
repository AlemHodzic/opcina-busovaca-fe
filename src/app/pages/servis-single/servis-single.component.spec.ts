import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServisSingleComponent } from './servis-single.component';

describe('ServisSingleComponent', () => {
  let component: ServisSingleComponent;
  let fixture: ComponentFixture<ServisSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServisSingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServisSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
