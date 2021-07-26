import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FundTransferService {

  constructor() { }
  addPayee()
  {
    console.log('add payee ')
  }
  delPayee()
  {
    console.log('delete payee ')
  }
  viewPayee()
  {
    console.log('view payee ')
  }
}
