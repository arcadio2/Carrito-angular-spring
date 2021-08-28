import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClotheRegisterComponent } from './shared/components/clothe-register/clothe-register.component';
import { HomeComponent } from './shared/components/home/home.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'admin/clothe/register',
    component: ClotheRegisterComponent
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) =>m.AuthModule )
  },
  {
    path: '**',
    redirectTo: 'home' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
