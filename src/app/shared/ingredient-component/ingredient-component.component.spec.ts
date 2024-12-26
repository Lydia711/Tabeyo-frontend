import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientComponentComponent } from './ingredient-component.component';

describe('IngredientComponentComponent', () => {
  let component: IngredientComponentComponent;
  let fixture: ComponentFixture<IngredientComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IngredientComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngredientComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
