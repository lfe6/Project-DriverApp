import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Driver} from '../Driver.model';

@Injectable({
  providedIn: 'root'
})
export class DriverServiceService {

  constructor(private http:HttpClient) { }

  GetDriverInformation():Observable<any>{
    return this.http.get('http://localhost:3000/api/drivers');
  }

  SendDriverInformation(Name:string,Team:string,CarNum:string):Observable<any>{
    const driver:Driver = {Name:Name, Team:Team, CarNum:CarNum};
    return this.http.post('http://localhost:3000/api/drivers', driver)
    }

    DeleteDriver(id:String):Observable<any>{
      return this.http.delete('http://localhost:3000/api/drivers/'+id);
  
  }
  
  GetDriver(id:String):Observable<any> {
    return this.http.get('http://localhost:3000/api/drivers/'+id);
  }
  
  UpdateDriver(id:string,Name:string,Team:string,CarNum:string):Observable<any> {
    const driver:Driver = {Name:Name, Team:Team, CarNum:CarNum};
    return this.http.put('http://localhost:3000/api/drivers/'+id,driver);
  }
}
