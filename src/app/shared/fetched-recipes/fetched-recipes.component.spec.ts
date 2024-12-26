import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchedRecipesComponent } from './fetched-recipes.component';

describe('FetchedRecipesComponent', () => {
  let component: FetchedRecipesComponent;
  let fixture: ComponentFixture<FetchedRecipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FetchedRecipesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FetchedRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
