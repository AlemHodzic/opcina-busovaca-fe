import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavnaPredUstanoveComponent } from './javna-pred-ustanove.component';

describe('JavnaPredUstanoveComponent', () => {
  let component: JavnaPredUstanoveComponent;
  let fixture: ComponentFixture<JavnaPredUstanoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavnaPredUstanoveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JavnaPredUstanoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
