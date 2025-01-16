import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomepageComponent } from './features/homepage/homepage.component';
import { RecipeComponentComponent } from './shared/recipe-component/recipe-component.component';

@Component({
  selector: 'app-root',
  imports: [HomepageComponent, RecipeComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Tabeyo-frontend';
}
