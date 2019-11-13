import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditsGraphPage } from './audits-graph.page';

describe('AuditsGraphPage', () => {
  let component: AuditsGraphPage;
  let fixture: ComponentFixture<AuditsGraphPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditsGraphPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditsGraphPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
