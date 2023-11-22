import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component'; 
import { VeiculoCreateComponent } from './components/veiculo-create/veiculo-create.component';
import { VeiculoDetailComponent } from './components/veiculo-detail/veiculo-detail.component';
import { VeiculoListComponent } from './components/veiculo-list/veiculo-list.component';
import { VeiculoUpdateComponent } from './components/veiculo-update/veiculo-update.component';
import { RouterOutlet } from '@angular/router';
import { RodapeComponent } from './components/rodape/rodape.component';
import { VeiculoService } from './veiculo.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MenuBarComponent, VeiculoCreateComponent,VeiculoDetailComponent, VeiculoListComponent, VeiculoUpdateComponent, RouterOutlet,RodapeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'locavia';
}
