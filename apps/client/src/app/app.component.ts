import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { MainAngularComponentComponent} from '../app/main-angular-component/main-angular-component.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, MainAngularComponentComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'client';
}
