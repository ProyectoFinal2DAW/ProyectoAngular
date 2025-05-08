export interface NotasUsuarioClase {
    id_resultado_cuestionario: Number;
    id_questionario: Number;
    id_usuarios: Number;
    nota: Number;
    fecha_completado: Date;
    total_correctas: Number;
    total_falladas: Number;
    nombre_cuestionario: String;
}