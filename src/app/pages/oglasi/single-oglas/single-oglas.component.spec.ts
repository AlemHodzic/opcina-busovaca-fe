import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleOglasComponent } from './single-oglas.component';

describe('SingleOglasComponent', () => {
  let component: SingleOglasComponent;
  let fixture: ComponentFixture<SingleOglasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleOglasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleOglasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
