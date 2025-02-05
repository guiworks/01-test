import { TestBed } from '@angular/core/testing';
import { TestService } from './test.service';
import { UserSearchComponent } from '../containers/user-search.component';

describe('TestService', () => {
  let service: TestService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: UserSearchComponent,
          useValue: {
            search: () => {},
            getResult: () => {},
          },
        },
      ],
    });
    service = TestBed.inject(TestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return filtered results when searching for a term', (done) => {
    service.search('test2');
    service.getResult().subscribe((resultados) => {
      expect(resultados).toEqual(['test2']);
      done();
    });
  });

  it('should return an empty list when no match is found', (done) => {
    service.search('test21');
    service.getResult().subscribe((resultados) => {
      expect(resultados).toEqual([]);
      done();
    });
  });

  it('should update results correctly when search term changes', (done) => {
    service.search('test1');
    service.getResult().subscribe((resultados) => {
      expect(resultados).toEqual(['test1']);
    });
    service.search('test2');
    service.getResult().subscribe((resultados) => {
      expect(resultados).toEqual(['test2']);
      done();
    });
  });
});
