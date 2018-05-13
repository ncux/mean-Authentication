import { TestBed, inject } from '@angular/core/testing';

import { RegistrationAndAuthService } from './registration-and-auth.service';

describe('RegistrationAndAuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegistrationAndAuthService]
    });
  });

  it('should be created', inject([RegistrationAndAuthService], (service: RegistrationAndAuthService) => {
    expect(service).toBeTruthy();
  }));
});
