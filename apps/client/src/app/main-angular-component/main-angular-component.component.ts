import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { HousingLocationComponent } from '../housing-location/housing-location.component';

@Component({
  selector: 'app-main-angular-component',
  standalone: true,
  imports: [CommonModule, SearchBarComponent, HousingLocationComponent],
  templateUrl: './main-angular-component.component.html',
  styleUrl: './main-angular-component.component.css',
})
export class MainAngularComponentComponent {}
