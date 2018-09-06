// Evento model based on the structure of evento
// https://api.github.com/users/{username}
export interface Consulta {
  id: number;
  folio: number;
  serie: string;
  fecha: string;
  nombre: string;
  texto: string;
}
