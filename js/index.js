var valor = document.getElementById('nuevoValor');
var cuenta = [0];

function AgregarFila() {
    let saldo = 0;
    let tipoOperacion = detectarTipoOperacion();
    if( tipoOperacion == 2){
        saldo = (parseInt(valor.value) * -1) + cuenta.pop();
    }else if(tipoOperacion == 1){
        saldo = parseInt(valor.value)  + cuenta.pop();
    }    
    cuenta.push(saldo);
    
    var tabla = document.getElementById("tabla");
    var cantidadFilas = tabla.getElementsByTagName("tr").length + 1;

    var newRow = document.createElement("tr");

    var newCelda1 = document.createElement("td");    
    newCelda1.innerText = fecha();

    var newCelda2 = document.createElement("td");
    newCelda2.innerText = valor.value;

    var newCelda11 = document.createElement("td");     
    newCelda11.innerText = saldo;
   
    newRow.appendChild(newCelda1);
    newRow.appendChild(newCelda2);
    newRow.appendChild(newCelda11); 

    tabla.prepend(newRow);
        
    document.getElementById('balance').innerHTML = saldo;

    let color = parseInt(valor.value);
       
    if(tipoOperacion == 1){
        document.getElementsByTagName("TD")[1].classList.add("text-success");
    }else{
        document.getElementsByTagName("TD")[1].classList.add("text-danger");
    }
    nuevoValor.value = '';
    
}

function detectarTipoOperacion(){    
    var form = document.getElementById("test");    
    return parseInt(form.elements["test"].value);
}

function fecha(){
    let hoy = new Date();
    let imprimir = hoy.getDate() + "/"+ hoy.getMonth()+ "/" +hoy.getFullYear();

    return imprimir;
}