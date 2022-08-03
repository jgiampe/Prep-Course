// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  let matriz=[];
  let i=0;
  for(let prop in objeto)
    {
      matriz[i]= [prop,objeto[prop]];
      i++;
    }
  return matriz;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  let obj={};
  let cuenta;
  let letra;
 
  while(string.length)
  {
    cuenta=1;
    letra=string[0];
    for(let i=1; i<string.length; i++)
      {
        if(string[i]===letra)
          cuenta++;
      }
    obj[letra]=cuenta;
    string=string.replace(new RegExp(letra,'g'),'');
  }
  return obj;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let string='';
  for(let i=0; i<s.length;i++)
  {
    if(s[i]===s[i].toUpperCase())
      {
        string+=s[i];
        s=s.replace(s[i],'');
        i--;                    //porque eliminé un elemento del string
      }
  }
  for(let i=0; i<s.length;i++)
    string+=s[i];
  return string;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  let palabra='', reves='';
  let frase = '';
  
  for(let i=0; i<str.length; i++)
  {
    if(i!==str.length-1)
    {
      if(str[i]!=' ')
        palabra+=str[i];
      else
      {
       for(let j=palabra.length-1; j>=0; j--)
          reves+=palabra[j];
        frase+=reves+' ';
        palabra = '';
        reves='';
      } 
    }
    else
      {
        palabra+=str[i];
        for(let j=palabra.length-1; j>=0; j--)
          reves+=palabra[j];
        frase+=reves;
      }
    
  }
  return frase;
  
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  let palabra = numero.toString();
  
  for (let i=0; i<Math.floor(palabra.length/2); i++)
    { //console.log(i);
      if(palabra[i]!==palabra[palabra.length-1-i])
         // console.log('ok');
          return'No es capicua';
    }
  return 'Es capicua';
  
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  for(let i=0; i<cadena.length; i++)
  {
    if(cadena[i]==='a' || cadena[i]==='b' || cadena[i]==='c')
    {
      cadena=cadena.replace(cadena.charAt(i),'');
      i--;
    }
  }
  return cadena;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  for(let i=0; i<arr.length-1; i++)
  {
    for(let j=0; j<arr.length-i-1;j++)
    {
      if(arr[j].length > arr[j+1].length)
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
    }
  }
  return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  let arr=[];
  for(let i=0; i<arreglo1.length; i++)
    for(let j=0;j<arreglo2.length; j++)
      if(arreglo1[i]===arreglo2[j])
        arr.push(arreglo1[i])
  return arr;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

