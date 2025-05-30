import { Component, ChangeDetectionStrategy, Inject } from '@angular/core';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormGroup, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { postClasses, putClases } from '../../../../../DBManagement/DBManagement';
import { NewClass } from '../../../../../../interfaces/newClass';
import { Class } from '../../../../../../interfaces/class';
import { UpdateClase } from '../../../../../../interfaces/updateClase';
import { uploadFile } from '../../../../../DBManagement/DBManagement';

@Component({
    selector: 'dialog-content-add-class',
    templateUrl: 'dialog-content-add-class.html',
    imports: [MatDialogModule, MatButtonModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogContentAddClass {

    addClassForm: FormGroup;

    claseUpdate: Class;
    action: string;
    idClase: number;

    constructor(@Inject(MAT_DIALOG_DATA) public data: { action: string, clase: Class, idClase: number }, private fb: FormBuilder) {
        this.addClassForm = this.fb.group({
            className: ['', Validators.required],
            classDescription: ['', Validators.required],
            classContent: [''],
            classImage: [''],
        });

        this.claseUpdate = data.clase;
        this.action = data.action;
        this.idClase = data.idClase;

        if (this.action === 'u') {
            this.addClassForm.patchValue({ className: this.claseUpdate.nombre_clases });
            this.addClassForm.patchValue({ classDescription: this.claseUpdate.descripcion_clases });
            this.addClassForm.patchValue({ classContent: this.claseUpdate.contenido });
            //this.addClassForm.patchValue({ classImage: this.claseUpdate.foto_clases });
        }
    }

    selectedFile: File | null = null;

    onFileSelected(event: Event) {
        const input = event.target as HTMLInputElement;
        if (input.files && input.files.length > 0) {
            this.selectedFile = input.files[0];
            //console.log("Archivo seleccionado:", this.selectedFile);
        }
    }


    async onSubmit() {
        ////console.log("OnSubmit");

        if (this.addClassForm.invalid) {
            ////console.log("Formulario inválido");
            alert("Compruebe los campos del formulario");
            return;
        }

        let imageUrl = '';
        if (this.selectedFile) {
            try {
                imageUrl = await uploadFile(this.selectedFile);
                ////console.log("Imagen subida:", imageUrl);
            } catch (error) {
                console.error("Error al subir la imagen:", error);
                alert("Hubo un error al subir la imagen.");
                return;
            }
        }

        if (this.action === 'a') {
            const newClass: NewClass = {
                nombre_clases: this.addClassForm.value.className,
                descripcion_clases: this.addClassForm.value.classDescription,
                contenido: this.addClassForm.value.classContent,
                foto_clases: "https://monlab.alumnes-monlau.com/images" + imageUrl,
                video_clases: "",
            };

            const apiPostResponse = await postClasses(newClass);
            //console.log("ApiPostResponse: ", apiPostResponse);
            if (apiPostResponse) {
                alert("Clase creada correctamente");
            }

        } else {

            let rutaImg = this.claseUpdate.foto_clases;
            if (this.selectedFile) {
                rutaImg = "https://monlab.alumnes-monlau.com/images" + imageUrl;
            } else {
                rutaImg = this.claseUpdate.foto_clases;
            }

            const updateClase: UpdateClase = {
                clase_id: this.idClase,
                nombre_clases: this.addClassForm.value.className,
                descripcion_clases: this.addClassForm.value.classDescription,
                contenido: this.addClassForm.value.classContent,
                foto_clases: rutaImg,
                video_clases: "",
            };

            const apiPutResponse = await putClases(updateClase);
            //console.log("ApiPutResponse: ", apiPutResponse);

            if (apiPutResponse) {
                alert("Clase actualizada correctamente");
            }
        }
    }
}