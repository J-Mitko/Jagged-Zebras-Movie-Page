import { TestBed, inject } from '@angular/core/testing';
import { MovieDetailResolverService } from './movie-detail-resolver.service';


describe('MovieDetailResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovieDetailResolverService]
    });
  });

  it('should be created', inject([MovieDetailResolverService], (service: MovieDetailResolverService) => {
    expect(service).toBeTruthy();
  }));
});
