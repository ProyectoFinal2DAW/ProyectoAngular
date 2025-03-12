export interface User {
    id_usuarios: Number,
    id_roles: Number,
    usuario: string,
    email: string,
    estado: string,
    fecha_creacion: Date,
    rol: {
        id_roles: Number,
        rol: string,
    }
}