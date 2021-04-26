import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  constructor(public router: Router){}


  title = 'Andressa Oliveira - Prova Frontend';
  name = localStorage.getItem('name')
    
  
}
