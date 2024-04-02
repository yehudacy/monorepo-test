import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { Housinglocation } from '../housing-location/housinglocation';

@Component({
  selector: 'app-main-angular-component',
  standalone: true,
  imports: [CommonModule, SearchBarComponent, HousingLocationComponent],
  templateUrl: './main-angular-component.component.html',
  styleUrl: './main-angular-component.component.css',
})
export class MainAngularComponentComponent {
  readonly baseUrl = `../../assets/`;
  housingLocationList: Housinglocation[] = [
    {
      id: 0,
      name: 'Acme Fresh Start Housing',
      city: 'Chicago',
      state: 'IL',
      photo: `${this.baseUrl}ed965bf7c94acf90ad27ea0b15c499cc.jpg`,
      availableUnits: 4,
      wifi: true,
      laundry: true,
    },
    {
      id: 1,
      name: 'A113 Transitional Housing',
      city: 'Santa Monica',
      state: 'CA',
      photo: `${this.baseUrl}exterior.png`,
      availableUnits: 0,
      wifi: false,
      laundry: true,
    },
    {
      id: 2,
      name: 'Warm Beds Housing Support',
      city: 'Juneau',
      state: 'AK',
      photo: `${this.baseUrl}istockphoto-1054759884-612x612 (1).jpg`,
      availableUnits: 1,
      wifi: false,
      laundry: false,
    },
    {
      id: 3,
      name: 'Homesteady Housing',
      city: 'Chicago',
      state: 'IL',
      photo: `${this.baseUrl}istockphoto-1054759884-612x612.jpg`,
      availableUnits: 1,
      wifi: true,
      laundry: false,
    },
    {
      id: 4,
      name: 'Happy Homes Group',
      city: 'Gary',
      state: 'IN',
      photo: `${this.baseUrl}pexels-photo-106399.jpeg`,
      availableUnits: 1,
      wifi: true,
      laundry: false,
    },
    {
      id: 5,
      name: 'Hopeful Apartment Group',
      city: 'Oakland',
      state: 'CA',
      photo: `${this.baseUrl}pexels-photo-106399.jpeg`,
      availableUnits: 2,
      wifi: true,
      laundry: true,
    },
    {
      id: 6,
      name: 'Seriously Safe Towns',
      city: 'Oakland',
      state: 'CA',
      photo: `${this.baseUrl}pexels-photo-106399.jpeg`,
      availableUnits: 5,
      wifi: true,
      laundry: true,
    },
    {
      id: 7,
      name: 'Hopeful Housing Solutions',
      city: 'Oakland',
      state: 'CA',
      photo: `${this.baseUrl}pexels-photo-106399.jpeg`,
      availableUnits: 2,
      wifi: true,
      laundry: true,
    },
    {
      id: 8,
      name: 'Seriously Safe Towns',
      city: 'Oakland',
      state: 'CA',
      photo: `${this.baseUrl}pexels-photo-106399.jpeg`,
      availableUnits: 10,
      wifi: false,
      laundry: false,
    },
    {
      id: 9,
      name: 'Capital Safe Towns',
      city: 'Portland',
      state: 'OR',
      photo: `${this.baseUrl}pexels-photo-106399.jpeg`,
      availableUnits: 6,
      wifi: true,
      laundry: true,
    },
  ];
}
