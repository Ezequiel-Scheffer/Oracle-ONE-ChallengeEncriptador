
const input = document.getElementById("text-input");
const btnEncriptar = document.getElementById("btn-encriptar");
const btnDesencriptar = document.getElementById("btn-desencriptar");
const btnCopy = document.getElementById("btn-copy");
const btnClear = document.getElementById("btn-clear");
const resultado = document.getElementById("resultado");

let arrayPalabras = [];

/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/ 


const encriptar = () => {
    let text = input.value;
    arrayPalabras=reemplazarVocales(text).join("");
    resultado.innerText = `${arrayPalabras}`
}


const desencriptar = () => {
    let text = input.value;
    text=text.replaceAll(/imes/g,'i');
    text=text.replace(/ai/g,'a');
    text=text.replace(/enter/g,'e');
    text=text.replace(/ober/g,'o');
    text=text.replace(/ufat/g,'u');
    resultado.innerText =  `${text}`
  } 


const clear = () => {
    
    resultado.innerText = ` `;
    input.value = "";
    input.innerText = ` `;
    arrayPalabras=[];
}

btnClear.addEventListener("click", clear);

function reemplazarVocales(texto) {
    let arrayAux=[];
    for (let i=0; i<texto.length; i++)
        {
            if(texto[i]==="a")
            {arrayAux.push("ai");}
            else if(texto[i]==="e")
            {arrayAux.push("enter");}
            else if(texto[i]==="i")
            {arrayAux.push("imes");}
            else if(texto[i]==="o")
            {arrayAux.push("ober");}
            else if(texto[i]==="u")
            {arrayAux.push("ufat");}
            else{arrayAux.push(texto[i])}
        }
    return arrayAux;
}


btnCopy.addEventListener("click", async () => {

    //copio al portapapeles el resultado
    try {
        await navigator.clipboard.writeText(resultado.innerText)
        console.log('Texto copiado al portapapeles')
      } catch (err) {
        console.error('Error al copiar al portapapeles:', err)
      }

    // lee del portapaeles y escribo en el input area
    try {
        const text = await navigator.clipboard.readText()
        .then((clipText) => (input.value = clipText));
        console.log('Texto del portapapeles:', text)
        
      } catch (err) {
        console.error('Error al leer del portapapeles:', err)
      }


  });


/* diver.js */

const driver = window.driver.js.driver;

const driverObj = driver({
  showProgress: true,
  steps: [
    {
      element: 'header',
      popover: {
        title: 'Bienvenido',
        description: 'Al Desafio de Encriptador de Texto',
      },
    },
    {
      element: '#text-input',
      popover: {
        title: 'Area de Texto',
        description: 'Escribe aqui para probar el encriptador',
      },
    },
    {
      element: '#btn-encriptar',
      popover: {
        title: 'Encriptar',
        description: 'Al clickear el boton encriptaras el texto',
      },
    },
    {
      element: '#btn-desencriptar',
      popover: {
        title: 'Desencriptar',
        description: 'Al clickear el boton desencriptaras el texto ',
      },
    },
    {
      element: '#btn-copy',
      popover: {
        title: 'Copiar',
        description:
          'Al clickear el boton podras copiar el resultado al area de texto',
      },
    },
    {
      element: '#btn-clear',
      popover: {
        title: 'limpiar',
        description:
          'Al clickear el boton limpiaras el area de texto y el area de resultado',
      },
    },
    {
      element: '#io',
      popover: {
        title: 'Autor',
        description:
          'Al clickear el enlace podras ver mi respositorio de Github',
      },
    },
  ],
});

driverObj.drive();
