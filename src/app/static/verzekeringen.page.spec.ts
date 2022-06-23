import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerzekeringenPage } from './verzekeringen.page';

describe('VerzekeringenPage', () => {
  let component: VerzekeringenPage;
  let fixture: ComponentFixture<VerzekeringenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerzekeringenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerzekeringenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
