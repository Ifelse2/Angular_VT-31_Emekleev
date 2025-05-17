import { HttpClient } from '@angular/common/http';
import { ApplicationConfig,
  Component,
  type OnInit,
  inject } from '@angular/core';

@Component({
  selector: 'app-serversfps',
  imports: [],
  templateUrl: './serversfps.component.html',
  styleUrl: './serversfps.component.scss'
})
export class ServersfpsComponent implements OnInit {
  constructor(private http:HttpClient){}
  technic=[];

  get(){
    this.http.get("https://restful-api.dev/").subscribe((t)=>{console.log(t);});
      // t.array
  }

  add_data(){
    this.http.post("https://restful-api.dev/",{
      "name": "Apple MacBook Pro 16",
      "data": {
        "year": 2019,
        "price": 1849.99,
        "CPU model": "Intel Core i9",
        "Hard disk size": "1 TB"
      }
    })
  }

  ngOnInit(){
    this.get
  }

}
