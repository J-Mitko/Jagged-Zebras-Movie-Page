import { TestBed, inject } from '@angular/core/testing';

import { FavouritesResolverService } from './favourites-resolver.service';

describe('FavouritesResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FavouritesResolverService]
    });
  });

  it('should be created', inject([FavouritesResolverService], (service: FavouritesResolverService) => {
    expect(service).toBeTruthy();
  }));
});
