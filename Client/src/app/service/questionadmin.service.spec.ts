import { TestBed } from '@angular/core/testing';

import { QuestionadminService } from './questionadmin.service';

describe('QuestionadminService', () => {
  let service: QuestionadminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionadminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
