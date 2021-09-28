// Import stylesheets
import './style.css';

function kwadraatBerekenen(getal: number): number {
  let result: number = getal * getal;
  return result;
}

function stringInfo(tekst: string, count: number): string[] {
  let stringArray: string[] = tekst.split('', count);
  console.log(stringArray);
  return stringArray;
}

let product =  (getallen : number[]) => {
    for (let i :number = 0; i < getallen.length; i++)
    {
      let result : number= 1;
      result *= getallen[i]
      return result;
    }
}

