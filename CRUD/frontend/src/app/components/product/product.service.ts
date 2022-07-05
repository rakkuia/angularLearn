import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, EMPTY, map, Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = 'http://localhost:3500/create';

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError:boolean = false): void{
    this.snackBar.open(msg, 'λ', {
      duration: 3000,
      horizontalPosition: "center",
      verticalPosition: "top"
    })
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    console.log(e);
    this.showMessage("Something went wrong", true);
    return EMPTY;
  }

  read(): Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl);
  }

  update(product: Product): Observable<Product> {
    const url = `${this.baseUrl}/${product.id}`;
    return this.http.put<Product>(url, product);
  }

  readById(id: String | null): Observable<Product>{
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Product>(url);
  }

  delete(id: number): Observable<Product> {
    const url = `${this.baseUrl}/${id}`;  
    return this.http.delete<Product>(url);
  }
}
