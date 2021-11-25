import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class DotaapiService {

readonly DOTAAPIURL = environment.DOTAAPIURL;

  constructor(private http2:HttpClient) { }

getDota(path){
  return this.http2.get(`${this.DOTAAPIURL}${path}`)

}  
}
