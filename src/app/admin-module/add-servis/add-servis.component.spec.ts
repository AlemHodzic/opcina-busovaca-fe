import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddServisComponent } from './add-servis.component';

describe('AddServisComponent', () => {
  let component: AddServisComponent;
  let fixture: ComponentFixture<AddServisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddServisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddServisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
