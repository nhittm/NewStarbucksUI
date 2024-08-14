import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
export interface IStore {
  id: number;
  name: string;
  address: number;
  link: string;
  iframe: string;
}
@Injectable({
  providedIn: 'root'
})
export class StoresService {
  constructor(private h: HttpClient) { }
  getStore() {
    return this.h.get('https://665c825f3e4ac90a04d9c396.mockapi.io/stores');
  }
}
