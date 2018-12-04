import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRegistroDocComponent } from './form-registro-doc.component';

describe('FormRegistroDocComponent', () => {
  let component: FormRegistroDocComponent;
  let fixture: ComponentFixture<FormRegistroDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormRegistroDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRegistroDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
