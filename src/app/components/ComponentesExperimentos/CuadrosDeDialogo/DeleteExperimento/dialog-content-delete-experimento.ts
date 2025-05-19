import { Component, ChangeDetectionStrategy, Inject, inject, Input } from '@angular/core';
import { MatDialog, MatDialogModule, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';


@Component({
    selector: 'dialog-content-delete-experimento',
    templateUrl: 'dialog-content-delete-experimento.html',
    imports: [MatDialogModule, MatButtonModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogContentDeleteExperimento {
    

    constructor(
        public dialogRef: MatDialogRef<DialogContentDeleteExperimento>,
        @Inject(MAT_DIALOG_DATA) public data: { idTemario: number }
    ) {}

    onDelete(): void {
        this.dialogRef.close(true); // Cierra el diálogo y envía "true" como resultado
    }


}