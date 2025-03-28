import { Component, ChangeDetectionStrategy, Inject, inject, Input } from '@angular/core';
import { MatDialog, MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormGroup, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { postClasses, putClases } from '../../../../../DBManagement/DBManagement';
import { NewClass } from '../../../../../../interfaces/newClass';
import { Class } from '../../../../../../interfaces/class';
import { UpdateClase } from '../../../../../../interfaces/updateClase';

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
            this.addClassForm.patchValue({ classImage: this.claseUpdate.foto_clases });
        }
    }


    async onSubmit() {
        console.log("OnSubmit");

        if (this.addClassForm.invalid) {
            console.log("Formulario inválido");
            alert("Compruebe los campos del formulario");
            return;
        }


        if (this.action === 'a') {
            const newClass: NewClass = {
                nombre_clases: this.addClassForm.value.className,
                descripcion_clases: this.addClassForm.value.classDescription,
                contenido: this.addClassForm.value.classContent,
                foto_clases: "",
                video_clases: "",

            }

            const apiPostResponse = await postClasses(newClass);

            console.log("ApiPostResponse: ", apiPostResponse);

        } else {
            const updateClase: UpdateClase = {
                clase_id: this.idClase,
                nombre_clases: this.addClassForm.value.className,
                descripcion_clases: this.addClassForm.value.classDescription,
                contenido: this.addClassForm.value.classContent,
                foto_clases: "",
                video_clases: "",
            }

            const apiPutResponse = putClases(updateClase);

            console.log("ApiPutResponse: ", apiPutResponse);

        }






    }
}