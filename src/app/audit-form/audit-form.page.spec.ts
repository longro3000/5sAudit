import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditFormPage } from './audit-form.page';

describe('AuditFormPage', () => {
  let component: AuditFormPage;
  let fixture: ComponentFixture<AuditFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditFormPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
