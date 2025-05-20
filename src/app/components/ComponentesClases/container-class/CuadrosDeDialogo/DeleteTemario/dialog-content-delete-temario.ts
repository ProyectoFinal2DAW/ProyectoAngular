import { Component, ChangeDetectionStrategy, Inject } from '@angular/core';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';


@Component({
    selector: 'dialog-content-delete-temario',
    templateUrl: 'dialog-content-delete-temario.html',
    imports: [MatDialogModule, MatButtonModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogContentDeleteTemario {
    

    constructor(
        public dialogRef: MatDialogRef<DialogContentDeleteTemario>,
        @Inject(MAT_DIALOG_DATA) public data: { idTemario: number }
    ) {}

    onDelete(): void {
        this.dialogRef.close(true); // Cierra el diálogo y envía "true" como resultado
    }


}