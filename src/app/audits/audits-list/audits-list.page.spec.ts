import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditsListPage } from './audits-list.page';

describe('AuditsListPage', () => {
  let component: AuditsListPage;
  let fixture: ComponentFixture<AuditsListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditsListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditsListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
