
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
    return (string1 + string2).lenght
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

//interface è usata per definire gli oggetti è puo essere estesa o combinata,
//  invece type è piu flessibile, usato per unionituple, 
// e le altre strutture.

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













