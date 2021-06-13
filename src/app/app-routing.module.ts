import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SeederComponent } from './component/layout/seeder/seeder.component';
import { PersonaComponent } from './component/persona/persona.component';
import { PermisosComponent } from './pages/permisos/permisos.component';
import { RolesComponent } from './pages/roles/roles.component';
import { DesignComponent } from './component/layout/design/design.component';

const routes: Routes = [
  {
    path: '',
    component: DesignComponent,
    children:[
      {
        path:'',
        redirectTo: '/persona',
        pathMatch: 'full' 
      },
      {
        path: 'persona',
        component: PersonaComponent, 
      },
      {
        path: 'roles',
        component: RolesComponent, 
      },
      {
        path: 'permisos',
        component: PermisosComponent, 
      },
      {
        path: 'seeder',
        component: SeederComponent, 
      },
    ]

  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
