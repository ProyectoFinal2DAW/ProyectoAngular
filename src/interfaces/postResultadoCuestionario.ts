export interface PostResultadoCuestionario {
    id_questionario: number,
    id_usuarios: number,
    nota: number,
    fecha_completado: Date,
    total_correctas: number,
    total_falladas: number
}