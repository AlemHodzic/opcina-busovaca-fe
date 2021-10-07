import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavneUstanoveComponent } from './javne-ustanove.component';

describe('JavneUstanoveComponent', () => {
  let component: JavneUstanoveComponent;
  let fixture: ComponentFixture<JavneUstanoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavneUstanoveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JavneUstanoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
