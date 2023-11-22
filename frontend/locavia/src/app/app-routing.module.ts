import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VeiculoListComponent } from './components/veiculo-list/veiculo-list.component';
import { VeiculoDetailComponent } from './components/veiculo-detail/veiculo-detail.component';
import { VeiculoCreateComponent } from './components/veiculo-create/veiculo-create.component';
import { VeiculoUpdateComponent } from './components/veiculo-update/veiculo-update.component';

const routes: Routes = [
  { path: 'veiculos', component: VeiculoListComponent },
  { path: 'veiculos/:id', component: VeiculoDetailComponent },
  { path: 'create', component: VeiculoCreateComponent },
  { path: 'update/:id', component: VeiculoUpdateComponent },
  { path: '', redirectTo: '/veiculos', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

