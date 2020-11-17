import { Component, OnInit } from '@angular/core';
import {ComidaService} from '../../services/comida.service';
import {NgForm} from '@angular/forms';
import {Comida} from '../../models/comida';

@Component({
  selector: 'app-comida',
  templateUrl: './comida.component.html',
  styleUrls: ['./comida.component.css']
})
export class ComidaComponent implements OnInit {
  
  constructor(public comidaService: ComidaService) { }

  ngOnInit(): void {
   this.getComidas();
  }

  resetForm(form: NgForm){
    form.reset();
  }

  getComidas(){
    this.comidaService.getComidas().subscribe(
      res => {
        this.comidaService.comidas = res;
      },
      err => console.error(err)
    );
  }
  addComida(form: NgForm){
    if(form.value._id){
      this.comidaService.updateComida(form.value).subscribe(
        (res) => console.log(res),
        (err) => console.log(err)
      );
    }else{
      this.comidaService.createComida(form.value).subscribe(
        res => {
          this.getComidas();
          form.reset();
        },
        err => console.error(err)
      );
    }
  }
  deleteComida(id: String){
   if(confirm('¿Estas seguro de querer eliminarlo?')){
     this.comidaService.deleteComida(id).subscribe(
       (res) => {this.getComidas();},
       (err) => console.error(err)
       );
   }
  }

  editComida(comida: Comida){
    this.comidaService.selectedComida = comida;
  }
}
