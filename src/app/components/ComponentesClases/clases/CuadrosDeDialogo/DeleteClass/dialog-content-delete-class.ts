import { Component, ChangeDetectionStrategy, Inject } from '@angular/core';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';


@Component({
    selector: 'dialog-content-delete-class',
    templateUrl: 'dialog-content-delete-class.html',
    imports: [MatDialogModule, MatButtonModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogContentDeleteClass {
    

    constructor(
        public dialogRef: MatDialogRef<DialogContentDeleteClass>,
        @Inject(MAT_DIALOG_DATA) public data: { idClass: number }
    ) {}

    onDelete(): void {
        this.dialogRef.close(true); // Cierra el diálogo y envía "true" como resultado
    }


}