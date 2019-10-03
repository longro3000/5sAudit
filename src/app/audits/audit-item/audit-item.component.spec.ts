import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditItemComponent } from './audit-item.component';

describe('AuditItemComponent', () => {
  let component: AuditItemComponent;
  let fixture: ComponentFixture<AuditItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditItemComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
