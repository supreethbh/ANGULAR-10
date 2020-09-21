import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

//_dburl = 'http://localhost:4200/enroll';

  constructor(private _httpService: HttpClient) { }

  //register(userData) {
    //return this._httpService.post<any>(this._dburl, userData);
  //}
}
