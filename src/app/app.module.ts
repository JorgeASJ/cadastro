import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { CrudComponent } from './components/crud/crud.component';
import { MenuComponent } from './components/menu/menu.component';
import { CriarComponent } from './components/criar/criar.component';
import { AlterarComponent } from './components/alterar/alterar.component';
import { DeletarComponent } from './components/deletar/deletar.component';
import { VisualizarComponent } from './components/visualizar/visualizar.component';

@NgModule({
  declarations: [
    AppComponent,
    CrudComponent,
    MenuComponent,
    CriarComponent,
    AlterarComponent,
    DeletarComponent,
    VisualizarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
