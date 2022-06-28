import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';
import Swal from 'sweetalert2';

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
    
    if(obj.email !='' && obj.nome !='' && obj.sobreNome !='' && obj.idade !='' ){
      this._crudService.Criar(obj).subscribe(resp => {
        this.alertTimer('success',`usuário ${obj.nome} criado com sucesso!`)
         this._router.navigateByUrl(`/Listar`);
       })
    } else {
      this.alerterror('warning',`Todos os campos devem ser preechidos!`)
    }


  

  }

  alertTimer(icon: any, title: any) {
    Swal.fire({ icon: icon, title: title, showConfirmButton: false, timer: 2500 })
  }
  
  alerterror(icon: any, title: any){
  Swal.fire({
    icon: icon,
    title: title,
    text: 'Todos os campos devem ser preechidos!',
    footer: '<a href="">Why do I have this issue?</a>'
  })
}
}

