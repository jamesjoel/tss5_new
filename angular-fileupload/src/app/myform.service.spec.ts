import { TestBed } from '@angular/core/testing';

import { MyformService } from './myform.service';

describe('MyformService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyformService = TestBed.get(MyformService);
    expect(service).toBeTruthy();
  });
});
