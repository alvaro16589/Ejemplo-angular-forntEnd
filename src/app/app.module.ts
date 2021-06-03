import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonaComponent } from './component/persona/persona.component';
import { NavbarComponent } from './component/layout/navbar/navbar.component';
import { FooterComponent } from './component/layout/footer/footer.component';
import { SeederComponent } from './component/layout/seeder/seeder.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    NavbarComponent,
    FooterComponent,
    SeederComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
