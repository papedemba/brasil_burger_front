import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable, zipAll } from 'rxjs';
import { Produits } from '../models/produits';

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {
  private url : string = "http://localhost:33797produits"

  constructor(private http : HttpClient) { 
    
  }
  All() : Observable<Produits[]>{
    return this.http.get<Produits[]>(this.url)
  }
  produits$ = (id:number) => {
    return this.http.get<Produits>(`${this.url}/${id}`)
  }
}
