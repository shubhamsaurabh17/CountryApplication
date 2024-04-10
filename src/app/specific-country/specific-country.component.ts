import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-specific-country',
  templateUrl: './specific-country.component.html',
  styleUrl: './specific-country.component.css'
})
export class SpecificCountryComponent implements OnInit{
  countryName :string="";

  data:any=[];

  constructor(private route:ActivatedRoute, private countryService:CountryService){

  }
  ngOnInit(): void {
    // Retrieve the value of "countryId" from the URI
    this.countryName = this.route.snapshot.paramMap.get('countryName') ?? "";
    console.log(this.countryName)
    this.countryService.getSpecificCountry(this.countryName).subscribe(
      (res)=>{
        this.data=res;
        console.log(this.data)
      },
      (error)=>{
        console.log(error)
      }
    )
  }
}
