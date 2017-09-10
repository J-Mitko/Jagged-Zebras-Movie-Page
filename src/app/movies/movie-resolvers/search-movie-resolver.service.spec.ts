import { TestBed, inject } from '@angular/core/testing';

import { SearchMovieResolverService } from './search-movie-resolver.service';

describe('SearchMovieResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchMovieResolverService]
    });
  });

  it('should be created', inject([SearchMovieResolverService], (service: SearchMovieResolverService) => {
    expect(service).toBeTruthy();
  }));
});
