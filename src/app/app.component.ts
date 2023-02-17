import  Product from './models/product';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mystore-project';
  signInForm=new FormGroup({
    name:new FormControl (''),
    address: new FormControl(''),
    creditCard:new FormControl('')
  })

}
