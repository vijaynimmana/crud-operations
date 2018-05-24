import { TestBed, inject } from '@angular/core/testing';

import { DataapiService } from './dataapi.service';

describe('DataapiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataapiService]
    });
  });

  it('should be created', inject([DataapiService], (service: DataapiService) => {
    expect(service).toBeTruthy();
  }));
});
