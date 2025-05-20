import { Component, ChangeDetectionStrategy, Inject, inject, Input } from '@angular/core';
import { MatDialog, MatDialogModule, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';


@Component({
    selector: 'dialog-content-delete-participant',
    templateUrl: 'dialog-content-delete-participant.html',
    imports: [MatDialogModule, MatButtonModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogContentDeleteParticipant {
    

    constructor(
        public dialogRef: MatDialogRef<DialogContentDeleteParticipant>,
        @Inject(MAT_DIALOG_DATA) public data: { iduser: number }
    ) {}

    onDelete(): void {
        this.dialogRef.close(true); // Cierra el diálogo y envía "true" como resultado
    }


}