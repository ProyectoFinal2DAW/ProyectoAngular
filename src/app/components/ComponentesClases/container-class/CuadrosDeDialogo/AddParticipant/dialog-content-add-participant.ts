import { Component, ChangeDetectionStrategy, Inject, inject } from '@angular/core';
import { MatDialog, MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { NewVideo } from '../../../../../../interfaces/newVideo';
import { MatSelectModule } from '@angular/material/select';
import { getUserRoles, getUserWithEmail, postUser, postUserIntoClass, postVideoClass } from '../../../../../DBManagement/DBManagement';
import { CommonModule } from '@angular/common';
import { Role } from '../../../../../../interfaces/role';
import { getListUsers, getUserImage, getUserImageWithEmail, getUserName } from '../../../../../DBManagement/AzureManagement';
import { User } from '../../../../../../interfaces/user';
import { NewUser } from '../../../../../../interfaces/newUser';


@Component({
  selector: 'dialog-content-add-participant',
  templateUrl: 'dialog-content-add-participant.html',
  imports: [MatDialogModule, CommonModule, MatSelectModule, MatButtonModule, MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogContentAddParticipant {

  addParticipanteForm: FormGroup;

  id_clase: number = 0;

  listUserRoles: Role[] = [];

  accessToken: string = "";

  constructor(private fb: FormBuilder, private route: ActivatedRoute) {
    this.addParticipanteForm = this.fb.group({
      emailParticipante: ['', Validators.required],
      rolParticipante: [1, Validators.required]
    });
  }

  async ngOnInit() {

    this.accessToken = String(sessionStorage.getItem("accessToken"));

    this.route.queryParams.subscribe(params => {
      this.id_clase = params['id'];
      //console.log("Id recibido: " + this.id_clase);
    });

    //Obtener la lista de roles 
    this.listUserRoles = await getUserRoles();

  }


  async onSubmitAddParticipante() {

    if (this.addParticipanteForm.invalid) {
      //console.log("Formulario inválido");
      alert("Compruebe los campos del formulario");
      return;
    }

    const newUser: NewUser = {
      id_roles: this.addParticipanteForm.value.rolParticipante,
      usuario: "",
      email: this.addParticipanteForm.value.emailParticipante,
      contrasena: "1234",
      estado: "activa",
      profileImage: ""
    }

    let idUsuario = 0;
    const userBd = await getUserWithEmail(newUser.email);
    console.log("User from DB: ", userBd);

  

    if (userBd == null) {
      console.log("Entra en el if");
      //El usuario no se ha encontrado
      //Llamar a api de Azure para obtener el nombre
      const profileName = await getUserName(this.accessToken, newUser.email);
      console.log("Profile name: ", profileName);
      newUser.usuario = profileName;

      //Llamar a la api de Azure para obtener la imagen de perfil
      const profileImage = await getUserImageWithEmail(sessionStorage.getItem("accessToken") || "", newUser.email);
      console.log("Profile image: ", profileImage);
      newUser.profileImage = profileImage;

      console.log("New user: ", newUser);

      //Hacer Post de usuario
      const usuario = await postUser(newUser);
      console.log("Api response post user: ", usuario);

      idUsuario = usuario.id_usuarios;

    } else {
      console.log("Entra en el else");
      //El usuario se ha encontrado
      idUsuario = userBd.id_usuarios;
    }

    //Hacer post para añadir usuario a la clase
    const response = await postUserIntoClass(idUsuario, this.id_clase);
    console.log("Api response assgning user to class: ", response);


    //console.log(newVideo);

    //const response = await postVideoClass(this.id_clase, newVideo);

    //console.log("Api response: ", response);

  }

}