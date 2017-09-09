import { TestBed, inject } from '@angular/core/testing';

import { MoviesGridResolverService } from './movies-grid-resolver.service';

describe('MoviesGridResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MoviesGridResolverService]
    });
  });

  it('should be created', inject([MoviesGridResolverService], (service: MoviesGridResolverService) => {
    expect(service).toBeTruthy();
  }));
});
