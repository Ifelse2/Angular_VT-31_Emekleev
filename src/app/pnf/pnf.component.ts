import{
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
  LowerCasePipe,
  PercentPipe,
  SlicePipe,
  UpperCasePipe,
} from '@angular/common';
import { Component } from '@angular/core';
import { Defpipe } from '../pipsedef/def.pipe';

@Component({
  selector: 'app-pnf',
  imports: [
    CurrencyPipe,
    DatePipe,
    DecimalPipe,
    LowerCasePipe,
    PercentPipe,
    SlicePipe,
    UpperCasePipe,
    Defpipe


  ],
  templateUrl: './pnf.component.html',
  styleUrl: './pnf.component.scss'
})
export class PNFComponent {
  currency = 123.45
  percent = 0.259
  decimal = "какойто текст"
  uppercase = "какойто текст"
  lowerCase = "КАКОЙТО ТЕКСТ"
  date = "2008-08-08"
  num = "3.255115"
  strToSlice = "Какойто текст"
  Def = "Какойто тест"

}
