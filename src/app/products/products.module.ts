import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsRoutingModule } from './products-routing.module';
import {FormsModule} from '@angular/forms'



@NgModule({
  declarations: [
    ProductListComponent,
    
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule
  ]
})
export class ProductsModule { }
