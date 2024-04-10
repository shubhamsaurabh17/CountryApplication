import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private _http:HttpClient) { }

  getAllCountries(){
   return this._http.get("https://restcountries.com/v3.1/all")
  }

  getSpecificCountry(country:any){
    return this._http.get("https://restcountries.com/v3.1/name/"+country+"?fullText=true")
  }
}
