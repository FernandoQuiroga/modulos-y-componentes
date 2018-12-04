import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArcArchivosComponent } from './arc-archivos.component';

describe('ArcArchivosComponent', () => {
  let component: ArcArchivosComponent;
  let fixture: ComponentFixture<ArcArchivosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArcArchivosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArcArchivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
