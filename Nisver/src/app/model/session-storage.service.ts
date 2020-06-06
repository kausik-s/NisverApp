import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {
  private data:any;
  constructor() {
    this.data={};
   }

  public getData(key:any)
  {
    return this.data[key];
  }

  public setData(key:any,value:any)
  {
    this.data[key]=value;
  }
}
