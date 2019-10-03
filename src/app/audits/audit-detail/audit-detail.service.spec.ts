import { TestBed } from '@angular/core/testing';

import { AuditDetailService } from './audit-detail.service';

describe('AuditDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuditDetailService = TestBed.get(AuditDetailService);
    expect(service).toBeTruthy();
  });
});
