import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-visualizar',
  templateUrl: './visualizar.component.html',
  styleUrls: ['./visualizar.component.css']
})
export class VisualizarComponent implements OnInit {
  Lista:any;
  constructor(private _crudservices:CrudService) { }

  ngOnInit(): void {
    this.Listar();
  }

  Listar() {
    this._crudservices.Listar().subscribe(resp => (
      this.Lista = resp
    ))
    }
}
