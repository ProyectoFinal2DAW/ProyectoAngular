export async function getUserRole(result: any) {
    fetch('https://graph.microsoft.com/v1.0/me/', {
        headers: {
            Authorization: `Bearer ${result.accessToken}`,
        },
    })
        .then(response => response.json())
        .then((rolesResponse: any) => {
            //sessionStorage.setItem('jobTitle', rolesResponse.jobTitle || "");
            sessionStorage.setItem('jobTitle', "sdfsdf");
            console.log('Roles del usuario:', rolesResponse);
        })
}

export async function getUserImage(result: any) {
    fetch('https://graph.microsoft.com/v1.0/me/photo/$value', {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${result.accessToken}`
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('No se pudo obtener la imagen de perfil.');
            }
            return response.blob(); // Recibe la imagen como binario
        })
        .then(blob => {
            const imageUrl = URL.createObjectURL(blob);
            // Ahora puedes usar esta URL en tu HTML para mostrar la imagen
            //this.profileImageUrl = imageUrl;
            //console.log('URL de la imagen de perfil:', imageUrl);

            sessionStorage.setItem('profileImageUrl', imageUrl); // Guardar la URL de la imagen en sessionStorage
        })
        .catch(error => {
            console.error('Error al obtener la imagen de perfil:', error);
            sessionStorage.setItem('profileImageUrl', "http://monlab.ddns.net/images/noUserImage.jpg");
        });
}

export async function getListUsers(result: any) {
    fetch('https://graph.microsoft.com/v1.0/users', {
        headers: {
            Authorization: `Bearer ${result.accessToken}`,
        },
    })
        .then(response => response.json())
        .then((rolesResponse: any) => {
            //sessionStorage.setItem('jobTitle', rolesResponse.jobTitle || "");
            console.log('Lista de usuarios:', rolesResponse);
        })
        .catch(error => console.error('Error al obtener los roles:', error));
}

export async function getUserName(accessToken: string, email: string) {

    const userResponse = await fetch(`https://graph.microsoft.com/v1.0/users/${email}`, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });

    const user = await userResponse.json();

    return user.displayName;
}

export async function getUserImageWithEmail(accessToken: string, email: string) {
    const photoResponse = await fetch(`https://graph.microsoft.com/v1.0/users/${email}/photo/$value`, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });

    if (photoResponse.ok) {
        const blob = await photoResponse.blob();
        const imageUrl = URL.createObjectURL(blob);
        return imageUrl;
    } else {
        console.warn('El usuario no tiene imagen de perfil.');
        return "http://monlab.ddns.net/images/noUserImage.jpg"; // URL de imagen por defecto
    }

}