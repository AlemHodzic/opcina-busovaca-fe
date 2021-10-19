import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvoSektorComponent } from './nvo-sektor.component';

describe('NvoSektorComponent', () => {
  let component: NvoSektorComponent;
  let fixture: ComponentFixture<NvoSektorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NvoSektorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NvoSektorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
