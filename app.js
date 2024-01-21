let numeroSecreto = 0;
let intentos= 0;
let numerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    console.log(`El numero secreto es: ${numeroSecreto}`);
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroUsuario===numeroSecreto) {
        asignarTextoElemento('p',`Numero secreto Encontrado! (${numeroSecreto}), Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        limpiarCaja();
    }else{ //el usuario no acerto
        if (numeroUsuario>numeroSecreto) {
            asignarTextoElemento('p','El numero secreto es menor');
        }else{
            asignarTextoElemento('p','El numero secreto es mayor');
        } 
        intentos++;
        limpiarCaja();
    }
    return;
}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //indicar mensaje del 1 al 10   
    //generar numero aleatorio
    //inicializar intentos
    condicionesIniciales();
    //desabilitar boton "nuevo juego"
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

function limpiarCaja(){
    let valorCaja = document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    
    console.log(`Los numeros sorteados son ${numerosSorteados}`)
    console.log(`Numero generado: ${numeroGenerado}`)
    //si el numero generado esta incluido en la lista

    //si ya sorteamos todos los numeros
    if (numerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
    }else{
        if (numerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        }else{
            numerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
}
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

condicionesIniciales();

