
// 1)- I primi tipi primitivi principali in TypeScript sono:

// string: Mariam
// numeri: 100
//  boolean: false
//   undefined:  undefined
//   null: null
//    any

//  2)- i tre variabili tipizzati :

 let myName: string = 'Mariam'
 let myAge: number= 35
 let myCoursTypeScript: boolean = true

//  3)
//   const greet =(name) => {return "ciao"* name}


 const greet =(name: string) =>{
 return 'ciao' + name
 }


//  4)-
//  const sum = (a: number, b: number) => {  return a + b }

 const sum = (a: number, b: number): number => {  
 return a + b 
 }

//  5)-
 const inclusaIva = (price : number): number =>{

 return  price*1.22
 }

//  6)- 

 const concatStringhe =(string1: string, string2: string): number => {
    return (string1 + string2).length
 }

 //7)-
  
//  Un Type Union x TypeScript permette di definire una variabile
//  che può assumere più tipi.
let valore: string | number;
valore = "test"; // valido
valore = 42;     // valido

//8)-

let myVariabile: number | null | undefined = 35
myVariabile= null
myVariabile= undefined
// 9)-

type GiornoSettimana = keyof { Lunedì: any; Martedì: any; Mercoledì: any; Giovedì: any; Venerdì: any; Sabato: any; Domenica: any }

// 10)-

const number1: number[]= [1,2,3]
const number2: Array<number>= [1,2,3]
//  11)-

const tuple: [string, string, string, number, number] =[
   ' Mariam',
  'AZAMI',
  'L22624O',
  6,
  24,
]

// 12)-

// Con type è possibile definire tipi personalizzati, utilizzabili per 
// variabili e combinabili con tipi primitivi, consentendo l'uso di metodi
//  e proprietà ad essi associati.
//  Una interface, invece, rappresenta una struttura che descrive la forma 
// di un oggetto, specificandone proprietà richieste e opzionali.

// 13)-
interface HumanBeing {
    firstName: string;
    lastName: string;
    age: number;
}
// 14)-

interface Utente{
    email:string;
    phone?: number;
}
// 15)-

interface Student{
    name: string
    voto: number
}
 const Mary: Student ={
    name: 'Mary',
    voto: 8,
 }
 const Luca: Student ={
    name: 'Luca',
    voto: 9,
 }
 const Mario: Student ={
    name: 'Mario',
    voto: 10,
 }

  const studentsArray: Student[] = [Mary, Luca, Mario]

// 16)- e 17)-

interface Veicuolo {
    marca: string;
    modello: string;
    anno: number;
    accendi(): undefined;
    spegni (): undefined;
}

interface Auto extends Veicuolo{
    numeroPorte: number;
    tipoCarburante: string;
    guidaAutomatico: boolean;

}

 const miaAuto: Auto ={
    marca: "Tesla",
    modello:"Model S",
    anno: 2022,
    accendi(){

        console.log("l'auto è accesa!");
    }, 
    spegni() {
        console.log("l'auto è spenta!");
    },

    numeroPorte: 4,
    tipoCarburante: "elettrica",
    guidaAutomatico: true
 };
  
// 18)-

// Generics in TypeScript consentono di definire tipi parametrici, che vengono passati come
//  argomenti a funzioni o interfacce. Questo permette di rendere il codice più flessibile e
//  riutilizzabile, adattandosi a più tipi di dati senza conoscerli in anticipo.
//es:
interface Box<T> {
    value: T;
  }
  
  const numberBox: Box<number> = { value: 42 };
  const stringBox: Box<string> = { value: "Hello !" };


// 19)-
// 20)-

















