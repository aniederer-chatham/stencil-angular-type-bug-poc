import { TestBed } from '@angular/core/testing';

import { StencilComponentsService } from './stencil-components.service';

describe('StencilComponentsService', () => {
  let service: StencilComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StencilComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
