import { Component } from '@angular/core';
import { CurrencyConverterService } from './currency-converter.service';
import { FundTransferService } from './fund-transfer.service';
import { FundTransferService1Service } from './fund-transfer/fund-transfer-service1.service';
import { FundTransferModule } from './fund-transfer/fund-transfer.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LTI';
  album = 'Super Slimey';

  showThis :boolean  = true;
  canDialISD:boolean = false; 
  num : number = 100;
  simpleInterest : number=0;
  imageURL = "assets/images/superslimey.jpg";
  a: number = 100.0000
  z: number = 9 ;
  
 

  calculate($event:any){
    console.log("event invoked is ", $event);
    this.simpleInterest = (this.principalAmount*this.interest*this.years)/100;
    this.css.findCurrency();
    this.css.convert();
  }
  AddPayee()
  {
    this.tss.addPayee();
  }
  ViewPayee()
  {
    this.tss.viewPayee();
  }
  DelPayee()
  {
    this.tss.delPayee();
  }
  Check()
  {
    this.tts1.check();

  }
  constructor(private css:CurrencyConverterService,private tss:FundTransferService,private tts1:FundTransferService1Service)
  {
    
  }



  accDate:Date = new Date()
  principalAmount:number = 100;
  interest:number = 100;
  years:number = 100;

  savObj1:SavingsAccount = new SavingsAccount();
  savObj2:SavingsAccount = new SavingsAccount();
  savObj3:SavingsAccount = new SavingsAccount();

  // constructor(){
  //   this.savObj1.accountNumber =1000;
  //   this.savObj1.accountHolder ="Pritesh";
  //   this.savObj1.accountBalance =10000;

  //   this.savObj2.accountNumber =2000;
  //   this.savObj2.accountHolder ="Gaurav";
  //   this.savObj2.accountBalance =20000;

  //   this.savObj3.accountNumber =3000;
  //   this.savObj3.accountHolder ="Daemon";
  //   this.savObj3.accountBalance =30000;

  // }
  savArr:SavingsAccount[]=[

    {accountNumber:4000,accountHolder:"Kiran",accountBalance:12345,
     addr:{area:"viit back gate road",street:"roadrunner road",city:"Pune",pincode:411048,state:"Maharashtra"}},

    {accountNumber:5000,accountHolder:"Pritesh",accountBalance:765,
    addr:{area:"viit back gate road",street:"roadrunner road",city:"Pune",pincode:411048,state:"Maharashtra"}},

    {accountNumber:6000,accountHolder:"Ramesh",accountBalance:7654,
    addr:{area:"viit back gate road",street:"roadrunner road",city:"Pune",pincode:411048,state:"Maharashtra"}},

    {accountNumber:7000,accountHolder:"K.Suresh",accountBalance:69420,
    addr:{area:"viit back gate road",street:"roadrunner road",city:"Pune",pincode:411048,state:"Maharashtra"}}
   
  ]
  cities : City[]=[
    {cityId:1,city:"Pune"},
    {cityId:2,city:"Mumbai"},
    {cityId:3,city:"Thane"},
    {cityId:4,city:"Goa"}

  ]

}
class Address
{
  area:string|undefined;
  street:string|undefined;
  city:string|undefined;
  pincode:number|undefined;
  state:string|undefined;

}
class SavingsAccount
{
  accountNumber : number|undefined;
  accountHolder : string |undefined;
  accountBalance: number|undefined;
  addr          : Address = new Address();

}
class City{
  cityId:number|undefined;
  city:string | undefined;
}

