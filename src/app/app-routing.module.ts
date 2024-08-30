import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { PieComponent } from './pie/pie.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirige a home por defecto
  { path: 'home', component: HomeComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'pie', component: PieComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/' } // Redirige a home en caso de ruta no existente
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }