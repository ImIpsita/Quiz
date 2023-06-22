import { TestBed } from '@angular/core/testing';

import { CatagoryserviceService } from './catagoryservice.service';

describe('CatagoryserviceService', () => {
  let service: CatagoryserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatagoryserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
