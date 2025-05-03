
//esta lista contiene "errores" que en realidad no son mas que objetos que NO repara el servicio.
let mistake=[
    "heladeras",
    "muebles",
    "focos",
    "ventiladores",
    "ventiladores",
    "libros",
    "viromes",
    "brazos rotos",
    "corta uñas",
    "sandalias",
    "cuchillos",
    "espejos",
    "duchas",
    "tostadores",
    "microondas",
    "lavadoras",
    "secadoras",
]

function geterror(){

    let failure = mistake[Math.floor(Math.random()*mistake.length)];

    let plus = "+".repeat(failure.length);

    return failure+plus;


}


let text = "Taller de reparación de " + geterror() + 'COMPUTADORAS. \n\n½ La confianza es la base de todo buen servicio, nada de arreglos innecesarios ni costos ocultos.';

let index = 0;
let info = document.getElementById("info");


setTimeout(() => {    

    let interval = setInterval(() => {

        if (text[index] === "+") {
            info.textContent = info.textContent.slice(0, -1);

        } else if(text[index]==="½") {
            for(i=0; i<10;i++){
                info.textContent += " ";
                info.textContent = info.textContent.slice(0, -1);
            }

        } else {
            info.textContent += text[index];

        }
        index++;

        if (index >= text.length) {
            clearInterval(interval);
        }
    }, Math.floor(Math.random() * 60)+40);

}, 1000)
