import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiviteitPage } from './activiteit.page';

describe('ActiviteitPage', () => {
  let component: ActiviteitPage;
  let fixture: ComponentFixture<ActiviteitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiviteitPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiviteitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
