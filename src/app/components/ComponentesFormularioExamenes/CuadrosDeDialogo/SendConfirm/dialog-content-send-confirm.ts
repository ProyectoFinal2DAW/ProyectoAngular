import { Component, ChangeDetectionStrategy, Inject } from '@angular/core';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';


@Component({
    selector: 'dialog-content-send-confirm',
    templateUrl: 'dialog-content-send-confirm.html',
    imports: [MatDialogModule, MatButtonModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogContentSendConfirm {
    

    constructor(
        public dialogRef: MatDialogRef<DialogContentSendConfirm>,
        @Inject(MAT_DIALOG_DATA) public data: { mensaje: string }
    ) {}

    toSend(): void {
        this.dialogRef.close(true); // Cierra el diálogo y envía "true" como resultado
    }


}