import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  
  constructor() { }
 

  //TODO: fazer os retornos corretos
  products = [{
      id: 1,
      title: 'MacBook Pro 2021 16"',
      date: '2021-04-25',
      img: '/assets/images/note.jpg',
      file: '',
      desc: 'MacBook Pro com a melhor tecnologia do mercado, trazendo muita inovação e velocidade.',
      price:'17.499,00',
      categories:[
        'Apple',
        'MacBook'
      ]
    },
    {
      id: 2,
      title: 'MacBook Pro 2020 16"',
      date: '2021-04-25',
      img: '/assets/images/note.jpg',
      file: '',
      desc: 'MacBook Pro com a melhor tecnologia do mercado, trazendo muita inovação e velocidade.',
      price:'16.499,00',
      categories:[
        'Apple',
        'MacBook'
      ]
    },
    {
      id: 3,
      title: 'MacBook Pro 20219 16"',
      date: '2021-04-25',
      img: '/assets/images/note.jpg',
      file: '',
      desc: 'MacBook Pro com a melhor tecnologia do mercado, trazendo muita inovação e velocidade.',
      price:'15.499,00',
      categories:[
        'Apple',
        'MacBook'
      ]
    }]
  
  
  //Retorna todos os produtos
  getProducts(){
    return this.products
    
  }

  //Retorna um produto específico
  getProduct(id){
    return this.products[id]
  }  

   

  //Criar produto
  createProduct(product){
    this.products.push(product)
    return this.products
  
  }  

  //Atualizar produto
  updateProduct(id, product){
    this.products[id] = product
    return this.products
   
  }

  //Deletar produto
  deleteProduct(id){
    this.products.splice(id, 1);
    return this.products
   
  }


  //Erros
  handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      //client-side
      errorMessage = error.error.message;
    } 
    else {
       //server-side
      errorMessage = `Código do erro: ${error.status}\nMensagem: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
