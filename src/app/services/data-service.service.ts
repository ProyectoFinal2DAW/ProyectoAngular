import { Injectable, Signal, signal } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { Class } from '../../interfaces/class';
import { NewClass } from '../../interfaces/newClass';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private baseApiUrl = "http://localhost:8000/";

  constructor(private http: HttpClient) {}


  /*-----------------------Classes-------------------------*/

  private listClases = signal<Class[]>([]);

  getClases(): Signal<Class[]> {
    return this.listClases.asReadonly();
  }

  loadClases(): void {
    this.http.get<Class[]>(this.baseApiUrl + "clases/").subscribe({
      next: (data) => this.listClases.set(data),
      error: (err) => console.error("Error al cargar las clases:", err),
    });
  }

  addClass(newClass: NewClass): void {
    this.http.post<Class>(this.baseApiUrl + "clases/", newClass).subscribe({
      next: (createdClass) => this.listClases.update((classes) => [...classes, createdClass]),
      error: (err) => console.error("Error al añadir la clase:", err),
    });
  }








}
