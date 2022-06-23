import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoodsituatiePage } from './noodsituatie.page';

describe('NoodsituatiePage', () => {
  let component: NoodsituatiePage;
  let fixture: ComponentFixture<NoodsituatiePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoodsituatiePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoodsituatiePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
