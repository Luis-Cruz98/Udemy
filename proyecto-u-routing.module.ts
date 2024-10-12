import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProyectoUPage } from './proyecto-u.page';
import { BannerComponent } from './banner/banner.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { CursosComponent } from './cursos/cursos.component';
import { DestacadosComponent } from './destacados/destacados.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {
    path: '',
    component: ProyectoUPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProyectoUPageRoutingModule {}
