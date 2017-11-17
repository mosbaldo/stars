import { TestBed, inject } from '@angular/core/testing';

import { IndexActions } from './';

describe('IndexService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IndexActions]
    });
  });

  it('should be created', inject([IndexActions], (service: IndexActions) => {
    expect(service).toBeTruthy();
  }));
});
