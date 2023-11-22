import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { VeiculoCreateComponent } from './components/veiculo-create/veiculo-create.component';
import { VeiculoDetailComponent } from './components/veiculo-detail/veiculo-detail.component';
import { VeiculoListComponent } from './components/veiculo-list/veiculo-list.component';
import { VeiculoUpdateComponent } from './components/veiculo-update/veiculo-update.component';
import { RodapeComponent } from './components/rodape/rodape.component';


@NgModule({
  declarations: [
    AppComponent, 
    MenuBarComponent,
    VeiculoCreateComponent,
    VeiculoDetailComponent,
    VeiculoListComponent,
    VeiculoUpdateComponent,
    RodapeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }