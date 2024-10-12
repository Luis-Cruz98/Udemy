import { importProvidersFrom, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProyectoUPageRoutingModule } from './proyecto-u-routing.module';

import { ProyectoUPage } from './proyecto-u.page';
import { BannerComponent } from './banner/banner.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { CursosComponent } from './cursos/cursos.component';
import { DestacadosComponent } from './destacados/destacados.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProyectoUPageRoutingModule
  ],
  declarations: [ProyectoUPage,BannerComponent, CategoriaComponent, CursosComponent,DestacadosComponent,FooterComponent,HeaderComponent]
})
export class ProyectoUPageModule {}
