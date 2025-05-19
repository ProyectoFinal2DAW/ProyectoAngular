import { Component, ChangeDetectionStrategy, Inject, inject, Input } from '@angular/core';
import { MatDialog, MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormGroup, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NewExperimento } from '../../../../../interfaces/newExperimento';
import { postExperimento, uploadFile } from '../../../../DBManagement/DBManagement';

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

    selectedFile: File | null = null;
    selectedVideoFile: File | null = null;

    onFileSelected(event: Event) {
        const input = event.target as HTMLInputElement;
        if (input.files && input.files.length > 0) {
            this.selectedFile = input.files[0];
            //console.log("Archivo seleccionado:", this.selectedFile);
        }
    }
    onFileSelectedVideo(event: Event) {
        const input = event.target as HTMLInputElement;
        if (input.files && input.files.length > 0) {
            this.selectedVideoFile = input.files[0];
            //console.log("Archivo seleccionado:", this.selectedFile);
        }
    }



    async onSubmitCrearExperimento() {
        if (this.addExperimentForm.invalid) {
            alert("Formulario inválido");
            return;
        }

        let imageUrl = '';
        let videoUrl = '';

        if (this.selectedFile) {
            imageUrl = await uploadFile(this.selectedFile);
        }

        if (this.selectedVideoFile) {
            videoUrl = await uploadFile(this.selectedVideoFile);
        }

        //console.log("URL de la imagen:", imageUrl);

        const newExperimento: NewExperimento = {
            nombre_experimento: this.addExperimentForm.value.nombreExperimento,
            descrip_experimento: this.addExperimentForm.value.descripcionExperimento,
            foto_experimento: "http://monlab.ddns.net/images/" + this.selectedFile?.name,
            video_experimento: "http://monlab.ddns.net/images/" + this.selectedVideoFile?.name,
        };

        const response = await postExperimento(newExperimento);
        //console.log("Response:", response);
        this.dialogRef.close(true);
    }


}