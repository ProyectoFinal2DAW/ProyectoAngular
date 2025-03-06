import { Component, Input } from '@angular/core';
import { ItemTemaComponent } from '../item-tema/item-tema.component';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { Tema } from '../../../interfaces/tema';

@Component({
  selector: 'app-contenedor-temas',
  imports: [ItemTemaComponent, RouterLink],
  templateUrl: './contenedor-temas.component.html',
  styleUrl: './contenedor-temas.component.css'
})
export class ContenedorTemasComponent {

  listaTemas: Tema[] = [];
  id_clases: number = 0;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.id_clases = params['id'];
      console.log("Id recibido: " + this.id_clases);
    });

    this.fetchData();
  }


  async fetchData() {
    let response = await fetch('http://localhost:8000/temarios/clase/' + this.id_clases);

    this.listaTemas = await response.json();
    console.log("Lista temas: ", this.listaTemas);
    
  }

}
