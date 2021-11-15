import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditServisComponent } from './edit-servis.component';

describe('EditServisComponent', () => {
  let component: EditServisComponent;
  let fixture: ComponentFixture<EditServisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditServisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditServisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
