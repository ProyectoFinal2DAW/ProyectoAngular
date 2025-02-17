import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { merge } from 'rxjs';

@Component({
  selector: 'app-cuadro-dialogo-crear-experimento',
  imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule],
  templateUrl: './cuadro-dialogo-crear-experimento.component.html',
  styleUrl: './cuadro-dialogo-crear-experimento.component.css'
})
export class CuadroDialogoCrearExperimentoComponent {



  readonly texto = new FormControl('', [Validators.required]);

  errorMessage = signal('');

  constructor() {
    merge(this.texto.statusChanges, this.texto.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessage());
  }

  updateErrorMessage() {
    if (this.texto.hasError('required')) {
      this.errorMessage.set('Campo obligatorio');
    } else {
      this.errorMessage.set('');
    }
  }


}
