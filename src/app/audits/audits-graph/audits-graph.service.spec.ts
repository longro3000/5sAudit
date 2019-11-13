import { TestBed } from '@angular/core/testing';

import { AuditsGraphService } from './audits-graph.service';

describe('AuditsGraphService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuditsGraphService = TestBed.get(AuditsGraphService);
    expect(service).toBeTruthy();
  });
});
