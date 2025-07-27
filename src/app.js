import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.getElementById("boton").addEventListener("click", generarExcusa); //me parecia mas interesante que hubiera que pulsar el botón para generar la excusa (y todo lo demas).
};
  let nombre = ["Un perro mellado", "Mi mujer recien levantada", "Una abuela en bata", "Un payaso deprimido", "Un zombi vegano", "Un duende en patines", "Un pingüino con corbata", "Un dragón asmático", "Una tortuga velocista"];
  let accion = ["se comió", "me robó", "me tiró", "me secuestró", "me mordió", "me quemó", "me escondió", "me babeó", "me trituró", "me rompió"];
  let objetos = ["las llaves de casa", "el movil", "la ropa", "las llaves del coche", "las zapatillas", "la cartera"];
  let cuando = ["mientras dormía","mientras me preparaba", "cuando me hacia la manicura", "mientras hablaba con mi reflejo del espejo", "mientras pensaba sentado en ROCA", "mientras veía videos de gatos", "mientras buscaba mis ganas de despertarme", "mientras planeaba mi próxima excusa para no hacer nada" ]
  let contador= 5
function generarExcusa() {
  if (contador>0){
  let nombree = nombre[Math.floor(Math.random() *nombre.length)];
  let accionn = accion[Math.floor(Math.random() *accion.length)];
  let objetoss = objetos[Math.floor(Math.random() *objetos.length)];
  let cuandoo = cuando[Math.floor(Math.random() *cuando.length)];
  
  let excusaPerfecta = (nombree + " " + accionn + " " + objetoss + " " + cuandoo + ".")
  
  let elemento = document.getElementById("frase");
  elemento.textContent = excusaPerfecta;
  contador --
  document.getElementById("contador").textContent= ("Te quedan "+ contador + " excusas.")
  }
  else {
    document.getElementById("contador").textContent= ("SIN EXCUSAS¡")
    document.getElementById("imagenVago").style.display = "none";
  document.getElementById("imagenFinal").style.display = "flex";
    
    document.getElementById("boton").disabled = true; 
    alert("¡Te has quedado sin excusas, A MOVERSE!");
    
  }


}
