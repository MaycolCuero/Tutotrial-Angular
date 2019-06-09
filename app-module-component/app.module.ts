import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuario/usuario.component';

import {HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewUsuarioComponent } from './new-usuario/new-usuario.component';
import { GeneroComponent } from './genero/genero.component';
import { NewGeneroComponent } from './new-genero/new-genero.component';
import { RegistroComponent } from './registro/registro.component';
import { NewRegistroComponent } from './new-registro/new-registro.component';


const appRoutes: Routes = [
  { path: '',
    component: UsuarioComponent
  },
  {path: 'new',
    component: NewUsuarioComponent
  },
  {path: 'new/:id',
    component: NewUsuarioComponent
  },
  {path: 'genero',
    component: GeneroComponent
  },
  {path: 'newGenero',
    component: NewGeneroComponent
  },
  {path: 'newGenero/:id',
    component: NewGeneroComponent
  },
  {path: 'registro',
    component: RegistroComponent
  },
  {path: 'newRegistro',
    component: NewRegistroComponent
  },
  {path: 'newRegistro/:id',
    component: NewRegistroComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    NewUsuarioComponent,
    GeneroComponent,
    NewGeneroComponent,
    RegistroComponent,
    NewRegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
