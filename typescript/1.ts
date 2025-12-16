//1
let nombre: string = 'bob';
let edad: number = 23;
let bol: boolean = true;
//2
function calcularAreaRectangulo(base: number, altura: number): number {
  return base * altura;
}
let resultado = calcularAreaRectangulo(5, 4);
console.log(`El resultado es : ${resultado}`);
//3
interface Persona {
  nombre: string;
  edad: number;
  correo: string;
}
const personas: Persona[] = [{ nombre: 'Sole', edad: 23, correo: 'email' }];
console.log(personas);
//4
let id: string | number;
function mostrarId(id: string | number) {
  if (typeof id === 'string') {
    console.log('es un texto ');
  } else {
    console.log('es un numero');
  }
}
//5
let num: number[] = [1, 5, 9, 7, 4, 0];

function ordenarAsc(num: number[]): number[] {
  return num.sort((a, b) => a - b);
}
let orden = ordenarAsc(num);
console.log(orden);
