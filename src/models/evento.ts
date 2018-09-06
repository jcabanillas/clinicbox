// Evento model based on the structure of evento
// https://api.github.com/users/{username}
export interface Evento {
  id: number;
  folio: number;
  serie: string;
  id_tipo: number;
  titulo: string;
  descripcion: string;
  id_cuenta: number;
  cuenta_nombre: string;
  fecha_ini: string;
  fecha_fin: string;
  id_ubicacion: number,
  ubicacion: string;
  estatus: string;
  estatus_color: string;
  id_responsable: number,
  responsable_iniciales: string;
  responsable_nombre: string;
  ultima_consulta_label: string;
  ultima_consulta_texto: string;

}
