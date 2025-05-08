// filepath: c:\Users\raulcasgar\Desktop\git\ProyectoAngular\src\app\components\redirect\redirect.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MsalService } from '@azure/msal-angular';

@Component({
  selector: 'app-redirect',
  template: ``
})
export class RedirectComponent implements OnInit {
  constructor(private msalService: MsalService, private router: Router) {}

  ngOnInit(): void {
    this.msalService.handleRedirectObservable().subscribe({
      next: (result) => {
        if (result && result.account) {
          console.log('Inicio de sesión exitoso:', result);
          this.router.navigate(['/home']);
        }
      },
      error: (error) => {
        console.error('Error en el inicio de sesión:', error);
      }
    });
  }
}