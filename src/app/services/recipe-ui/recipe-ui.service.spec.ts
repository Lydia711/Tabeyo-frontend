import { TestBed } from '@angular/core/testing';

import { RecipeUiService } from './recipe-ui.service';

describe('RecipesUiService', () => {
  let service: RecipeUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipeUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
