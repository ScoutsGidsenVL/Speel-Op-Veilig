import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WegwijsPage } from './wegwijs.page';

describe('WegwijsPage', () => {
  let component: WegwijsPage;
  let fixture: ComponentFixture<WegwijsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WegwijsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WegwijsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
