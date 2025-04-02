import { Component, ChangeDetectionStrategy, Inject, inject, Input } from '@angular/core';
import { MatDialog, MatDialogModule, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormGroup, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NewExperimento } from '../../../../../interfaces/newExperimento';
import { postExperimento } from '../../../../DBManagement/DBManagement';

@Component({
    selector: 'dialog-content-add-experiment',
    templateUrl: 'dialog-content-add-experiment.html',
    imports: [MatDialogModule, MatButtonModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogContentAddExperiment {
    
    addExperimentForm: FormGroup;

    constructor(
        public dialogRef: MatDialogRef<DialogContentAddExperiment>,
        private fb: FormBuilder
    ) {
        this.addExperimentForm = this.fb.group({
            nombreExperimento: ['', Validators.required],
            descripcionExperimento: ['', Validators.required],
            imagenExperimento: [''],
            videoExperimento: ['']
        });
    }

    toSend(): void {
        this.dialogRef.close(true); // Cierra el diálogo y envía "true" como resultado
    }


    async onSubmitCrearExperimento() {

        if (this.addExperimentForm.invalid) {
            console.log("Formulario inválido");
            alert("Compruebe los campos del formulario");
            return;
        }

        const newExperimento: NewExperimento = {
            nombre_experimento: this.addExperimentForm.value.nombreExperimento,
            descrip_experimento: this.addExperimentForm.value.descripcionExperimento,
            foto_experimento: this.addExperimentForm.value.imagenExperimento,
            video_experimento: this.addExperimentForm.value.videoExperimento,
        }

        let response = await postExperimento(newExperimento);

        console.log("Response: ", response);

        this.dialogRef.close(true);
    }

}