export interface User {
    id_usuarios: number,
    id_roles: number,
    usuario: string,
    email: string,
    estado: string,
    fecha_creacion: Date | null,
    rol: {
        id_roles: Number,
        rol: string,
    },
    profileImage: string,
}