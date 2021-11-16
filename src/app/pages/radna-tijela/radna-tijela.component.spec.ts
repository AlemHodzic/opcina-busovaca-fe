import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadnaTijelaComponent } from './radna-tijela.component';

describe('RadnaTijelaComponent', () => {
  let component: RadnaTijelaComponent;
  let fixture: ComponentFixture<RadnaTijelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadnaTijelaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RadnaTijelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
