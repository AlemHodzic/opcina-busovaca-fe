import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNovostComponent } from './add-novost.component';

describe('AddNovostComponent', () => {
  let component: AddNovostComponent;
  let fixture: ComponentFixture<AddNovostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNovostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNovostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
