import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiURL: string="http://localhost:3000/products";

  constructor(private http: HttpClient) { }

  //Observable es un flujo de datos en el tiempo, implemetna publish.subscriber y 
  //no se puede consumir directamente. Para consumir se necesita que alguien se subscriba
  //Metodo subscribe
  //Si no estuviese declarada la interface que permite validar ---
  //----- los datos que vienen en el JSON, seria <Any>
  getProducts(): Observable<Product[]> {


    //Método petición por get
    return this.http.get<Product[]>(this.apiURL);
  }
}
