// Evento model based on the structure of evento
// https://api.github.com/users/{username}
export interface Paciente {
    id: number;
    folio: number;
    serie: string;
    nombre: string;
    fecha_nacimiento: string;
    edad: string;
    lugar_nacimiento: string;
    doctor_referencia: string;
    aseguradora: string;
    tipo_sangre: string;
    genero: string;
    responsable_iniciales: string;
    imagen: string;
    descripcion: string;
    telefonos_texto: string;
    ultima_consulta_texto: string;
}
