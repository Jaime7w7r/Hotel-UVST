/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ExchangeRateAPIService } from './exchange-rate-api.service';

describe('Service: ExchangeRateApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExchangeRateAPIService]
    });
  });

  it('should ...', inject([ExchangeRateAPIService], (service: ExchangeRateAPIService) => {
    expect(service).toBeTruthy();
  }));
});
