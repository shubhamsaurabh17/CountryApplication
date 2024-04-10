import { Component } from '@angular/core';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  search: string = '';
  data: any = [];
  filteredData: any;

  constructor(private country: CountryService) {
    this.myFunction();
  }

  capitalize(str: string) {
    str = str[0].toUpperCase() + str.substring(1).toLowerCase();
    return str;
  }

  myFunction() {
    this.country.getAllCountries().subscribe(
      (res) => {
        this.data = res;
        console.log(this.data)
        //to search
        if (this.search && this.search.length > 0) {
          // this.filteredData = this.data.filter((country: { name: { common: string | string[]; }; }) => country.name.common.includes(this.search));
          this.filteredData = this.data.filter((country: { name: { common: string | string[]; }; }) => (country.name.common.includes(this.capitalize(this.search))));
          this.data = this.filteredData;
        }
      },
      (error) => {
        console.log(error)
      }
    )
  }

  formSubmit() {
    this.myFunction();
  }

}
