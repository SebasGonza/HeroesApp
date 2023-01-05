import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoComponent } from './pages/listado/listado.component';
import { HomeComponent } from './pages/home/home.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HeroeComponent } from './pages/heroe/heroe.component';

const routes: Routes = [ // Rutas hijas 
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'listado', component: ListadoComponent },
      { path: 'agregar', component: AgregarComponent },
      { path: 'editar/:id', component: AgregarComponent },
      { path: 'buscar', component: BuscarComponent },
      { path: ':id', component: HeroeComponent },
      { path: '**', redirectTo: 'listado ' },
    ]
  }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class HeroesRoutingModule { }