import { Component, ChangeDetectionStrategy, Inject, inject, Input } from '@angular/core';
import { MatDialog, MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormGroup, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { postClasses } from '../../../../../DBManagement/DBManagement';
import { NewClass } from '../../../../../../interfaces/newClass';


@Component({
    selector: 'dialog-content-add-class',
    templateUrl: 'dialog-content-add-class.html',
    imports: [MatDialogModule, MatButtonModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogContentAddClass {
    addClassForm: FormGroup;

    constructor(private fb: FormBuilder) {
        this.addClassForm = this.fb.group({
            className: ['', Validators.required],
            classDescription: ['', Validators.required],
            classContent: [''],
            classImage: [''],
        });
    }


    onSubmit() {
        console.log("OnSubmit");

        let apiPostResponse = null;

        if (this.addClassForm.invalid) {
            console.log("Formulario inválido");
            alert("Compruebe los campos del formulario");
            return;
        }

        const newClass: NewClass = {
            nombre_clases: this.addClassForm.value.className,
            descripcion_clases: this.addClassForm.value.classDescription,
            contenido: this.addClassForm.value.classContent,
            foto_clases: "",
            video_clases: "",

        }

        apiPostResponse = postClasses(newClass);

        console.log("ApiPostResponse: ", apiPostResponse);




    }
}