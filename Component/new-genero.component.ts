import { Component, OnInit } from '@angular/core';

import {FormBuilder, Validators } from '@angular/forms';
import {Observable } from 'rxjs';
import {ActivatedRoute, Router, ParamMap } from '@angular/router';
import {Genero} from '../genero';
import { GeneroService } from '../genero.service';
@Component({
  selector: 'app-new-genero',
  templateUrl: './new-genero.component.html',
  styleUrls: ['./new-genero.component.css']
})
export class NewGeneroComponent implements OnInit {

  generoForm: any;
  idGenero: string; 

  constructor(private fombuilder: FormBuilder,
    private generoService: GeneroService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.generoForm = this.fombuilder.group({
      nombre: ['', [Validators.required]]
    })

    this.route.paramMap.subscribe(
      (params: ParamMap)=>{
        this.idGenero=params.get('id');
        this.getGenero();
      }
    )
  }

  getGenero = () =>{
    this.generoService.getOneGenero(this.idGenero).subscribe(
    per=>{
      this.generoForm.controls['nombre'].setValue(per.nombre);
      });
  }

  onFormSubmit(){
    this.SaveGenero(this.generoForm.value);
    this.router.navigate(['/genero']);
  }

  SaveGenero(genero: Genero){
    if(this.idGenero == null){
      this.generoService.createGenero(genero).subscribe();
    }else{
      genero.id=parseInt(this.idGenero);
      this.generoService.updateGenero(genero).subscribe();
    }
  }

}
