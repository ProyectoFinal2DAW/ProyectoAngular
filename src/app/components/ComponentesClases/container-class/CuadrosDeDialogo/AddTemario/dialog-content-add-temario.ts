import { Component, ChangeDetectionStrategy, Inject, inject, Input } from '@angular/core';
import { MatDialog, MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { Class } from '../../../../../../interfaces/class';
import { FormBuilder, FormGroup, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NewTemario } from '../../../../../../interfaces/newTemario';
import { postTemario, putTemario } from '../../../../../DBManagement/DBManagement';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Temario } from '../../../../../../interfaces/temario';
import { UpdateTemario } from '../../../../../../interfaces/updateTemario';



@Component({
    selector: 'dialog-content-add-temario',
    templateUrl: 'dialog-content-add-temario.html',
    imports: [MatDialogModule, MatButtonModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
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


    constructor(@Inject(MAT_DIALOG_DATA) public data: { id_clase: number, action: string, temario: Temario }, private fb: FormBuilder) {
        this.addTemarioForm = this.fb.group({
            nombreTemario: ['', Validators.required],
            descripcionTemario: [''],
            contenidoTemario: [''],
            videoTemario: [''],
            imagenTemario: ['']
        });

        this.temarioUpdate = data.temario;
        this.action = data.action;
        this.id_clase = data.id_clase;

        if (this.action === 'u') {
            this.addTemarioForm.patchValue({ nombreTemario: this.temarioUpdate.nombre_temario });
            this.addTemarioForm.patchValue({ descripcionTemario: this.temarioUpdate.descrip_temario });
            this.addTemarioForm.patchValue({ contenido: this.temarioUpdate.contenido });
            this.addTemarioForm.patchValue({ videoTemario: this.temarioUpdate.videos_temario });
            //this.addTemarioForm.patchValue({ imagenTemario: this.temarioUpdate.foto_temario });
        }
    }

    async onSubmitCrearActualizarTemario() {

        console.log("OnSubmitCrearActualizarTemario()");


        if (this.addTemarioForm.invalid) {
            console.log("Formulario inválido");
            alert("Compruebe los campos del formulario");
            return;
        }

        
        //Ejecutar cuando la accion sea Add
        if (this.action === 'a') {

            const newTemario: NewTemario = {
                id_clases: this.id_clase,
                nombre_temario: this.addTemarioForm.value.nombreTemario,
                descrip_temario: this.addTemarioForm.value.descripcionTemario,
                contenido: this.addTemarioForm.value.contenidoTemario,
                foto_temario: this.addTemarioForm.value.imagenTemario,
                videos_temario: this.addTemarioForm.value.videoTemario
            }

            let response = await postTemario(newTemario);
            console.log("Api response: ", response);

        // Ejecutar cuando la accion sea Update
        } else {

            const updateTemario: UpdateTemario = {
                temario_id: this.temarioUpdate.id_temario,
                id_clases: this.temarioUpdate.id_clases,
                nombre_temario: this.addTemarioForm.value.nombreTemario,
                descrip_temario: this.addTemarioForm.value.descripcionTemario,
                contenido: this.addTemarioForm.value.contenidoTemario,
                foto_temario: this.addTemarioForm.value.imagenTemario,
                videos_temario: this.addTemarioForm.value.videoTemario
            }

            let response = await putTemario(updateTemario);
            console.log("Api response: ", response);

        }




    }

}