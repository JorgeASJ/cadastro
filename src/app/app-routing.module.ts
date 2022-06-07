import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlterarComponent } from './components/alterar/alterar.component';
import { CriarComponent } from './components/criar/criar.component';
import { CrudComponent } from './components/crud/crud.component';
import { DeletarComponent } from './components/deletar/deletar.component';
import { VisualizarComponent } from './components/visualizar/visualizar.component';

const routes: Routes = [
  {path:'',component:CrudComponent},
  {path:'Listar',component:CrudComponent},
  {path:'Criar',component:CriarComponent},
  {path:'Alterar',component:AlterarComponent},
  {path:'Deletar',component:DeletarComponent},
  {path:'Visualizar',component:VisualizarComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
