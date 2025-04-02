import { Component, ChangeDetectionStrategy, Inject, inject, Input } from '@angular/core';
import { MatDialog, MatDialogModule, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { PostResultadoCuestionario } from '../../../../../interfaces/postResultadoCuestionario';


@Component({
    selector: 'dialog-content-show-results',
    templateUrl: 'dialog-content-show-results.html',
    imports: [MatDialogModule, MatButtonModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogContentShowResults {
    
    resultado: PostResultadoCuestionario;

    constructor(
        public dialogRef: MatDialogRef<DialogContentShowResults>,
        @Inject(MAT_DIALOG_DATA) public data: { resultado: PostResultadoCuestionario }
    ) {
        this.resultado = data.resultado;
    }

    toSend(): void {
        this.dialogRef.close(true); // Cierra el diálogo y envía "true" como resultado
    }


}