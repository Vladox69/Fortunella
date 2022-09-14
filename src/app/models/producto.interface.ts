export default interface Producto{
    id?:string;
    nombre:string;
    precio:number;
    urlImage:string;
    visible:boolean;
    tipo:string;
    colores_array:string[];
    filePath:string;
}