import { TestBed } from '@angular/core/testing';

import { LoginPermissionGuard } from './login-permission.guard';

describe('LoginPermissionGuard', () => {
  let guard: LoginPermissionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoginPermissionGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
