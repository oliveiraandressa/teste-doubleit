import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {


  title = 'Andressa Oliveira - Prova Frontend';
  name = localStorage.getItem('name')
    
  
}
