import { TestBed } from '@angular/core/testing';

import { ResetPasswordService } from './reset-password-service';

describe('ResetPasswordServiceService', () => {
  let service: ResetPasswordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResetPasswordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
