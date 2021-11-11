import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServisNabavkeComponent } from './servis-nabavke.component';

describe('ServisNabavkeComponent', () => {
  let component: ServisNabavkeComponent;
  let fixture: ComponentFixture<ServisNabavkeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServisNabavkeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServisNabavkeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
