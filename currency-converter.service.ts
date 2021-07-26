import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrencyConverterService {

  constructor() { }
  convert()
  {
    console.log('convert is invoked');
  }
  findCurrency()
  {
    console.log('currency finder  is invoked');

  }
}
