import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';//modulo para trabajar el enlase de datos con renderizado instantaneo

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonaComponent } from './component/persona/persona.component';
import { NavbarComponent } from './component/layout/navbar/navbar.component';
import { FooterComponent } from './component/layout/footer/footer.component';
import { SeederComponent } from './component/layout/seeder/seeder.component';
import { HeaderComponent } from './component/layout/header/header.component';
import { RolesComponent } from './pages/roles/roles.component';
import { PermisosComponent } from './pages/permisos/permisos.component';
import { DesignComponent } from './component/layout/design/design.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    NavbarComponent,
    FooterComponent,
    SeederComponent,
    HeaderComponent,
    RolesComponent,
    PermisosComponent,
    DesignComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule//modulo para trabajar el enlace de datos
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
