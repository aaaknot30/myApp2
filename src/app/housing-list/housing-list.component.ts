import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-housing-list',
  templateUrl: './housing-list.component.html',
  styleUrls: ['./housing-list.component.css']
})
export class HousingListComponent {

  @Input() locationList: HousingLocation[] = [];
  results: HousingLocation[] = [];
  @Output() selectedLocationEvent = new EventEmitter<HousingLocation>()

  constructor() { }

  ngOnInit(): void {
  }

  searchHousingLocations(searchText: string) {
    console.log(searchText)
    if (searchText === "") return;
    this.results = this.locationList.filter((location) => {
      return location.city.toLowerCase().includes(searchText.toLowerCase());
    });
  }

  selectHousingLocation(location: HousingLocation) {
    console.log("selectHousingLocation", location)
    this.selectedLocationEvent.emit(location)
  }


}
