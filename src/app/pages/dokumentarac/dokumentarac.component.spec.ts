import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DokumentaracComponent } from './dokumentarac.component';

describe('DokumentaracComponent', () => {
  let component: DokumentaracComponent;
  let fixture: ComponentFixture<DokumentaracComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DokumentaracComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DokumentaracComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
