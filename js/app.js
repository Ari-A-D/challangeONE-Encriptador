document.addEventListener('DOMContentLoaded', function() {
    // Selecciona los botones por su clase y asigna eventos de click
    let botones = document.querySelectorAll('.boton');
    botones.forEach(function(boton) {
      boton.addEventListener('click', function(event) {
        // Previene el comportamiento predeterminado del formulario
        event.preventDefault();
        
        // Obtiene el texto del textarea
        let texto = document.getElementById('texto').value;
        
        // Determina si el botón es para encriptar o desencriptar
        let resultado;
        if (boton.textContent === 'Encriptar') {
          resultado = encriptar(texto);
        } else if (boton.textContent === 'Desencriptar') {
          resultado = desencriptar(texto);
        }
        
        // Actualiza el textarea con el resultado
        document.getElementById('texto').value = resultado;
      });
    });
  });


function encriptar(texto) {
    let textoFiltrado;
    textoFiltrado = correccionMinuscula(texto);
    textoFiltrado = quitarAcentos(textoFiltrado);
    let letras = ["a", "e", "i", "o", "u"]; // Letras que se van a sustituir
    let codigoSecreto = ["ai", "enter", "imes", "ober", "ufat"]; // Cómo se va a sustituir cada una de las letras
    let textoEncriptado = "";
    for (let i =  0; i < textoFiltrado.length; i++) {
        let letraActual = textoFiltrado[i];
        let indiceLetra = letras.indexOf(letraActual);
        if (indiceLetra !== -1) { //Si el indice es distinto de -1 significa que esta contenido dentro de las letras a encriptar.
            textoEncriptado += codigoSecreto[indiceLetra];
        } else {
            textoEncriptado += letraActual;
        }
    }
    return textoEncriptado;
}

function desencriptar(texto) {
    let textoFiltrado;
    textoFiltrado = correccionMinuscula(texto);
    textoFiltrado = quitarAcentos(textoFiltrado);
    let letras = ["a", "e", "i", "o", "u"]; // Lista de letras con las que se van a sustituir.
    let codigoSecreto = ["ai", "enter", "imes", "ober", "ufat"]; // Lista que contiene la codificacion que se va a sustituir.
    codigoSecreto.forEach((secreto, index) => { // Funcion string.prototype que recorre cada componente de la lista y devuelve el componente y su indice.
        textoFiltrado = textoFiltrado.split(secreto).join(letras[index]); //Divide el texto en la coincidencias que tenga con la lista "codigoSecreto", luego vuelve a unir el texto con la coincidencias de posicion que tenga con el indice dentro de la lista "letras".
    });
    return textoFiltrado;
}

function correccionMinuscula(texto){
    return texto.toLowerCase();
}  

function quitarAcentos(texto){
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
}

document.addEventListener('DOMContentLoaded', function() {
    // Selecciona el textarea y el h2
    const textarea = document.getElementById('texto');
    const mensaje = document.querySelector('picture h2');
  
    // Función para verificar si el textarea está vacío
    function verificarTexto() {
      if (textarea.value.trim() === '') {
        mensaje.textContent = 'Ningún mensaje fue encontrado';
      } else {
        mensaje.textContent = '';
      }
    }
  
    // Verifica el contenido del textarea cada vez que cambia
    textarea.addEventListener('input', verificarTexto);
  
    // Verifica el contenido inicial del textarea
    verificarTexto();
  });

  document.addEventListener('DOMContentLoaded', function() {
    // Selecciona el botón de copiar por su ID
    const copyButton = document.getElementById('copiarBoton');
    const alerta = document.getElementById('alerta');
  
    // Agrega un event listener al botón de copiar
    copyButton.addEventListener('click', function() {
      // Selecciona el textarea por su ID
      const textarea = document.getElementById('texto');
  
      // Selecciona el área de texto y coloca su contenido en el portapapeles
      textarea.select();
      document.execCommand('copy');
  
      // Muestra la alerta
      alerta.classList.add('mostrar');
  
      // Oculta la alerta después de  2 segundos
      setTimeout(function() {
        alerta.classList.remove('mostrar');
      },  2000);
    });
  });
  