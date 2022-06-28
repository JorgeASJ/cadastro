import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-criar',
  templateUrl: './criar.component.html',
  styleUrls: ['./criar.component.css']
})
export class CriarComponent implements OnInit {



  constructor(private _crudService:CrudService, private _router:Router) { }

  ngOnInit(): void {
  }

  criarUsuario(nome: any, sobrenome: any, email: any, idade: any) {

    const obj  = {
      "nome": nome,
      "sobreNome": sobrenome,
      "email": email,
      "idade": idade
    }
    
    this._crudService.Criar(obj).subscribe(resp => {
      console.log(resp)
      this._router.navigateByUrl(`/Listar`);
    })
  

  }

}

