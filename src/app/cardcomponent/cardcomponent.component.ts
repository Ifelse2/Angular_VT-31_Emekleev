import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cardcomponent',
  imports: [],
  templateUrl: './cardcomponent.component.html',
  styleUrl: './cardcomponent.component.scss'
})
export class CardcomponentComponent {
@Input() title = ""
@Input() TextP = ""

}
