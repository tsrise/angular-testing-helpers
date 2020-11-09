import { TestBed } from '@angular/core/testing';

import { AngularTestingHelpersService } from './angular-testing-helpers.service';

describe('AngularTestingHelpersService', () => {
  let service: AngularTestingHelpersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularTestingHelpersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
