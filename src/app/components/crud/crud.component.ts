import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
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
