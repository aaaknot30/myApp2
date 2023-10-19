import { Component } from '@angular/core';
import { HousingLocation} from './housing-location'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApp2';

  housingLocationList: HousingLocation[] = [
    {
      name: "Acme Fresh Start Housing",
      city: "Chicago",
      state: "IL",
      photo: "../assets/housing-1.jpg",
      availableUnits: 5,
      wifi: true,
      laundry: true
    },
    {
      name: "Rogers Brevity House",
      city: "New York",
      state: "NY",
      photo: "../assets/housing-2.jpg",
      availableUnits: 2,
      wifi: true,
      laundry: false
    },
    {
      name: "Yee's Super House",
      city: "San Francisco",
      state: "CA",
      photo: "../assets/housing-3.jpg",
      availableUnits: 0,
      wifi: false,
      laundry: false
    }
  ]

  selectedLocation: HousingLocation | undefined = undefined;

  updateSelectedLocation(location: HousingLocation) {
    console.log("location", location)
    this.selectedLocation = location;
  }
}


