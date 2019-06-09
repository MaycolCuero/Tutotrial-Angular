import { Component, OnInit } from '@angular/core';

import {FormBuilder, Validators } from '@angular/forms';
import {Observable } from 'rxjs';
import {UsuarioService} from 'src/app/usuario.service';
import {Usuario } from 'src/app/usuario';
import {ActivatedRoute, Router, ParamMap } from '@angular/router';

import {Genero} from '../genero';
import { GeneroService } from '../genero.service';

@Component({
  selector: 'app-new-usuario',
  templateUrl: './new-usuario.component.html',
  styleUrls: ['./new-usuario.component.css']
})
export class NewUsuarioComponent implements OnInit {

  Allgenero: Observable<Genero[]>;
  usuarioForm: any; 
  idUsuario: string; 

  constructor(private fombuilder: FormBuilder,
    private generoService: GeneroService,
    private usuarioService: UsuarioService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.getGenero(); 

    this.usuarioForm = this.fombuilder.group({
      nombre: ['', [Validators.required]],
      apellido: ['',[Validators.required]],
      genero: ['',[Validators.required]],
      nom_usuario: ['', [Validators.required]],
      clave: ['', [Validators.required]],
    })

    this.route.paramMap.subscribe(
      (params: ParamMap)=>{
        this.idUsuario=params.get('id');
        this.getUsuario();
      }
    )
  }

  getGenero = () =>{
    this.Allgenero = this.generoService.getAllGenero();
  }

  getUsuario = () =>{
    this.usuarioService.getOneUsuario(this.idUsuario).subscribe(
    per=>{
      this.usuarioForm.controls['nombre'].setValue(per.nombre);
      this.usuarioForm.controls['apellido'].setValue(per.apellido);
      this.usuarioForm.controls['genero'].setValue(per.genero);
      this.usuarioForm.controls['nom_usuario'].setValue(per.nom_usuario);
      this.usuarioForm.controls['clave'].setValue(per.clave);
    });
  }

  onFormSubmit(){
    this.SaveUsuario(this.usuarioForm.value);
    this.router.navigate(['']);
  }

  SaveUsuario(usuario: Usuario){
    if(this.idUsuario == null){
      this.usuarioService.createUsuario(usuario).subscribe();
    }else{
      usuario.id=parseInt(this.idUsuario);
      this.usuarioService.updateUsuario(usuario).subscribe();
    }
  }

}
