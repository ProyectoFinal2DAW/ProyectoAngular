import { Component, ChangeDetectionStrategy, Inject, Input } from '@angular/core';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { Class } from '../../../../../../interfaces/class';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NewTemario } from '../../../../../../interfaces/newTemario';
import { postTemario, putTemario, uploadFile } from '../../../../../DBManagement/DBManagement';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Temario } from '../../../../../../interfaces/temario';
import { UpdateTemario } from '../../../../../../interfaces/updateTemario';



@Component({
    selector: 'dialog-content-add-temario',
    templateUrl: 'dialog-content-add-temario.html',
    imports: [MatDialogModule, MatButtonModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule],
    
})
export class DialogContentAddTemario {

    temarioUpdate: Temario;
    action: string;
    id_clase: number;

    @Input() datosClase: Class = {
        contenido: "",
        id_clases: 0,
        video_clases: "",
        descripcion_clases: "",
        foto_clases: "",
        nombre_clases: "",
    }

    addTemarioForm: FormGroup;


    constructor(
        public dialogRef: MatDialogRef<DialogContentAddTemario>,
        @Inject(MAT_DIALOG_DATA) 
        public data: { id_clase: number, action: string, temario: Temario }, 
        private fb: FormBuilder
    ){
        this.addTemarioForm = this.fb.group({
            nombreTemario: ['', Validators.required],
            descripcionTemario: [''],
            contenidoTemario: [''],
            videoTemario: [''],
            imagenTemario: [''],
            tituloVideo: ['']
        });

        this.temarioUpdate = data.temario;
        this.action = data.action;
        this.id_clase = data.id_clase;

        if (this.action === 'u') {
            this.addTemarioForm.patchValue({ nombreTemario: this.temarioUpdate.nombre_temario });
            this.addTemarioForm.patchValue({ descripcionTemario: this.temarioUpdate.descrip_temario });
            this.addTemarioForm.patchValue({ contenido: this.temarioUpdate.contenido });
            this.addTemarioForm.patchValue({ videoTemario: this.temarioUpdate.videos_temario });
            this.addTemarioForm.patchValue({ tituloVideo: this.temarioUpdate.titulo_video });
            //this.addTemarioForm.patchValue({ imagenTemario: this.temarioUpdate.foto_temario });
        }
    }

    toSend(): void {
        this.dialogRef.close(true); // Cierra el diálogo y envía "true" como resultado
    }

    selectedFileImg: File | null = null;
    selectedVideoFile: File | null = null;
    selectedPdfFile: File | null = null;

    onFileSelectedImg(event: Event) {
        const input = event.target as HTMLInputElement;
        if (input.files && input.files.length > 0) {
            this.selectedFileImg = input.files[0];
            ////console.log("Archivo seleccionado:", this.selectedFileImg);
        }
    }
    onFileSelectedVideo(event: Event) {
        const input = event.target as HTMLInputElement;
        if (input.files && input.files.length > 0) {
            this.selectedVideoFile = input.files[0];
            ////console.log("Archivo seleccionado:", this.selectedVideoFile);
        }
    }
    onFileSelectedPdf(event: Event) {
        const input = event.target as HTMLInputElement;
        if (input.files && input.files.length > 0) {
            this.selectedPdfFile = input.files[0];
            ////console.log("Archivo seleccionado:", this.selectedPdfFile);
        }
    }

    async onSubmitCrearActualizarTemario() {

        ////console.log("OnSubmitCrearActualizarTemario()");


        if (this.addTemarioForm.invalid) {
            ////console.log("Formulario inválido");
            alert("Compruebe los campos del formulario");
            return;
        }

        let videoUrl = '';
        let imageUrl = '';
        let pdfUrl = '';

        if (this.selectedFileImg) {
            imageUrl = await uploadFile(this.selectedFileImg);
        }

        if (this.selectedVideoFile) {
            videoUrl = await uploadFile(this.selectedVideoFile);
        }

        if (this.selectedPdfFile) {
            pdfUrl = await uploadFile(this.selectedPdfFile);
        }


        //Ejecutar cuando la accion sea Add
        if (this.action === 'a') {

            const newTemario: NewTemario = {
                id_clases: this.id_clase,
                nombre_temario: this.addTemarioForm.value.nombreTemario,
                descrip_temario: this.addTemarioForm.value.descripcionTemario,
                contenido: "https://monlab.alumnes-monlau.com/images" + this.selectedPdfFile?.name,
                foto_temario: "https://monlab.alumnes-monlau.com/images" + this.selectedFileImg?.name,
                videos_temario: "https://monlab.alumnes-monlau.com/images" + this.selectedVideoFile?.name,
                titulo_video: this.addTemarioForm.value.videoTemario
            }

            let response = await postTemario(newTemario);
            //console.log("Api response: ", response);

            // Ejecutar cuando la accion sea Update
        } else {

            let rutaImg = "";
            if (!this.selectedFileImg) {
                rutaImg = this.temarioUpdate.foto_temario;
            } else {
                rutaImg = "https://monlab.alumnes-monlau.com/images" + this.selectedFileImg?.name;
            }
            let rutaVideo = "";
            if (!this.selectedVideoFile) {
                rutaVideo = this.temarioUpdate.videos_temario;
            } else {
                rutaVideo = "https://monlab.alumnes-monlau.com/images" + this.selectedVideoFile?.name;
            }
            let rutaPdf = "";
            if (!this.selectedPdfFile) {
                rutaPdf = this.temarioUpdate.contenido;
            } else {
                rutaPdf = "https://monlab.alumnes-monlau.com/images" + this.selectedPdfFile?.name;
            }

            const updateTemario: UpdateTemario = {
                temario_id: this.temarioUpdate.id_temario,
                id_clases: this.temarioUpdate.id_clases,
                nombre_temario: this.addTemarioForm.value.nombreTemario,
                descrip_temario: this.addTemarioForm.value.descripcionTemario,
                contenido: rutaPdf,
                foto_temario: rutaImg,
                videos_temario: rutaVideo,
                titulo_video: this.addTemarioForm.value.tituloVideo
            }

            let response = await putTemario(updateTemario);
            //console.log("Api response: ", response);

        }
        this.dialogRef.close(true);



    }

}