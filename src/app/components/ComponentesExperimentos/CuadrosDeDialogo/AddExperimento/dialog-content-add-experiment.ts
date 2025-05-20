import { Component, ChangeDetectionStrategy, Inject, inject, Input } from '@angular/core';
import { MatDialog, MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormGroup, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NewExperimento } from '../../../../../interfaces/newExperimento';
import { postExperimento, putExperimento, uploadFile } from '../../../../DBManagement/DBManagement';
import { Experiment } from '../../../../../interfaces/experiment';

@Component({
    selector: 'dialog-content-add-experiment',
    templateUrl: 'dialog-content-add-experiment.html',
    imports: [MatDialogModule, MatButtonModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogContentAddExperiment {

    experimentUpdate: Experiment;
    addExperimentForm: FormGroup;
    action: string;
    id_clase: number;

    @Input() datosClase: Experiment = {
        id_experimento: 0,
        nombre_experimento: "",
        descrip_experimento: "",
        foto_experimento: "",
        video_experimento: "",
        asignatura: ""
    }

    constructor(
        public dialogRef: MatDialogRef<DialogContentAddExperiment>,
        private fb: FormBuilder,
        @Inject(MAT_DIALOG_DATA) public data: { id_clase: number, action: string, experimento: Experiment }
    ) {
        this.addExperimentForm = this.fb.group({
            nombreExperimento: ['', Validators.required],
            descripcionExperimento: ['', Validators.required],
            imagenExperimento: [''],
            videoExperimento: ['']
        });

        this.action = data.action;
        this.id_clase = data.id_clase;
        this.experimentUpdate = data.experimento;

        if (this.action === 'u') {
            this.addExperimentForm.patchValue({ nombreExperimento: this.experimentUpdate.nombre_experimento });
            this.addExperimentForm.patchValue({ descripcionExperimento: this.experimentUpdate.descrip_experimento });
            //this.addExperimentForm.patchValue({ imagenExperimento: this.experimentUpdate.foto_experimento });
            //this.addExperimentForm.patchValue({ videoExperimento: this.experimentUpdate.video_experimento });
        }

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

        if (this.action === 'u') {

            let rutaImg = "";
            if (!this.selectedFile) {
                rutaImg = this.experimentUpdate.foto_experimento;
            } else {
                rutaImg = "http://monlab.ddns.net/images/" + this.selectedFile?.name;
            }
            let rutaVideo = "";
            if (!this.selectedVideoFile) {
                rutaVideo = this.experimentUpdate.video_experimento;
            } else {
                rutaVideo = "http://monlab.ddns.net/images/" + this.selectedVideoFile?.name;
            }


            const updateExperimento: NewExperimento = {
                nombre_experimento: this.addExperimentForm.value.nombreExperimento,
                descrip_experimento: this.addExperimentForm.value.descripcionExperimento,
                foto_experimento: rutaImg,
                video_experimento: rutaVideo,
            }

            const response = await putExperimento(this.experimentUpdate.id_experimento, updateExperimento);


        } else {
            const newExperimento: NewExperimento = {
                nombre_experimento: this.addExperimentForm.value.nombreExperimento,
                descrip_experimento: this.addExperimentForm.value.descripcionExperimento,
                foto_experimento: "http://monlab.ddns.net/images/" + this.selectedFile?.name,
                video_experimento: "http://monlab.ddns.net/images/" + this.selectedVideoFile?.name,
            };

            const response = await postExperimento(newExperimento);
        }



        //console.log("Response:", response);
        this.dialogRef.close(true);
    }


}