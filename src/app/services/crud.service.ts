import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private _HttpClient:HttpClient) { }

  Listar() {
    return this._HttpClient.get('https://localhost:44393/v1/Teste/Listar');
  }

  Criar(form:any) {
    return this._HttpClient.get('https://localhost:44393/v1/Teste/Criar');
  }

  Deletar(){
    return this._HttpClient.get('https://localhost:44393/v1/Teste/Deletar');
  }

  Alterar(){
    return this._HttpClient.get('https://localhost:44393/v1/Teste/Alterar');
  }
}
