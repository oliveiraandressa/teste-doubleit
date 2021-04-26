import { Component, OnInit, Renderer2 } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service'
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { isThisTypeNode } from 'typescript';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass']
})
export class ProductListComponent implements OnInit {

  constructor(private renderer: Renderer2, public restApi: ProductsService, private modalService: NgbModal ) {
    this.renderer.removeClass(document.body, 'main-gradient');
    this.renderer.addClass(document.body, 'bg-gray');
  }


  products
  productName
  productDesc
  productPrice
  productDate
  productFile
  productImg
  acaoProduto = "Novo"
  deleteId = ""
  editId = ""

  ngOnInit(): void {
    this.getProducts()
  }


  getProducts(){
    this.products =  this.restApi.getProducts()
  
  }

 

  open(content, id) {
    this.acaoProduto = "Novo"
    this.productName = ""
    this.productDesc = ""
    this.productDate = ""
    this.productFile = ""
    this.productPrice = ""
    this.productImg = ""
    if(id){
      console.log(id)
      this.acaoProduto = "Editar"
      this.productName = this.products[id].title
      this.productDesc = this.products[id].desc
      this.productDate = this.products[id].date
      this.productFile = this.products[id].file
      this.productPrice = this.products[id].price
      this.productImg = this.products[id].img
      this.editId = id

    }
    this.modalService.open(content)
  }
  confirmDelete(content, id){
    this.modalService.open(content)
    this.deleteId = id
  }

  deleteProduct(){
    this.modalService.dismissAll()
    return this.restApi.deleteProduct(this.deleteId)
  }

  save(){
    if(this.acaoProduto == "Novo"){
      this.addProduct()
    }
    else{
      this.editProduct()
    }
  }

  addProduct(){
    let product = {
      id: this.products.length,
      title:  this.productName != "" ? this.productName : "",
      desc: this.productDesc != "" ? this.productDesc : "",
      date: this.productDate != "" ? this.productDate : "",
      file: this.productFile != "" ? this.productFile : "",
      price: this.productPrice != "" ? this.productPrice : "",
      img: this.productImg != "" ? this.productImg : "",
      categories:[
        'Apple',
        'MacBook'
      ]
    }
    
    this.modalService.dismissAll()
    return this.restApi.createProduct(product)

    //TODO: permitir que o usuario selecione a foto do produto
  }

  editProduct(){
    this.acaoProduto = "Editar"
    let id = this.editId
    let product = {
      title: this.productName,
      desc: this.productDesc,
      date: this.productDate,
      price: this.productPrice,
      file: this.productFile,
      img: this.productImg,
      categories:[
        'Apple',
        'MacBook'
      ]
    }


    this.modalService.dismissAll()
    return this.restApi.updateProduct(id, product)
  }
  trocarImagem(){
    //console.log(this.imagem.value);
  }

  handleInputChange(e) {
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    var pattern = /image-*/;
    var reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }
  _handleReaderLoaded(e) {
    let reader = e.target;
    this.productImg = reader.result;
    console.log(this.productImg)
  }

}


