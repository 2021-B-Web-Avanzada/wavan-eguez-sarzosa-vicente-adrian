// 01-variables.ts

let nombre: string = 'Adrian'; // primitivo
let nombre2: String = 'Adrian2'; // Clase String
// nombre = 1;
nombre = 'Vicente';
let edad: number = 32;
let casado: boolean = false;
let fecha: Date = new Date();
let sueldo: number;
sueldo = 12.4;
// Duck Typing
let apellido = 'Eguez'; // string ->
apellido = 'Adrian'; // igual a otros string
apellido.toUpperCase(); // metodos string

let marihuana: any = 2;
marihuana = '2';
marihuana = true;
marihuana = () => '2';

let edadMultiple: number | string | Date = 2;
edadMultiple = '2';
edadMultiple = 2222;
edadMultiple = 'dos';
edadMultiple = new Date();
// edadMultiple = true;













