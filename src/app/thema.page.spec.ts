import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemaPage } from './thema.page';

describe('ThemaPage', () => {
  let component: ThemaPage;
  let fixture: ComponentFixture<ThemaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
