import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkspacePage } from './workspace.page';

describe('WorkspacePage', () => {
  let component: WorkspacePage;
  let fixture: ComponentFixture<WorkspacePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkspacePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkspacePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
