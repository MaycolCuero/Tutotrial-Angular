import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Observable } from 'rxjs';
import {Usuario} from '../usuario';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {


  Allusuario: Observable<Usuario[]>;
  
  title: string;
  strquery: string;

  constructor(private usuarioService:UsuarioService,
    
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {

    this.getUsuario();
    
    
    this.route.paramMap.subscribe(
      (params: ParamMap)=>{
        this.strquery=params.get('query');
        this.getUsuario();
      }
    );

    this.route.data.subscribe( (result) => {
      this.title = result.title
    });
  }

  getUsuario = () =>{
    this.Allusuario=this.usuarioService.getAllUsuario();
  }

  loadUsuarioToEdit = (id: string) =>{
    this.router.navigate(['/new/'+id]);
  }

  UsuarioToDelete = (id: string) =>{
    if(confirm("Estas seguro de querer eliminar este registro")){
      this.usuarioService.DelteUsuario(id);
      this.getUsuario();
      this.router.navigate(['']);
    }
    
  }

}
