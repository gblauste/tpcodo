window.onload = iniciar;


function iniciar(){
    document.getElementById('enviar').addEventListener('click', validate , false);
}

function valida_nombre(){
    var elemento = document.getElementById('nombre');
    if (elemento.value ==''){
        alert('El campo nombre no puede estar vacio');
        return false;
    }
    return true;
}

function valida_mail(){
    var elemento = document.getElementById('email');
    if (elemento.value ==''){
        alert('No olvide ingresar su e-mail');
        return false
    }
    return true;
}

/*function valida_otro(){
    var elemento = document.getElementById('seleccion');
    if  (elemento.value ==''){
        alert('Debe elegir un opcion'):
        return false;
    }
    return true;
}*/

function validate(e){
    if (valida_nombre() && valida_mail()  && confirm("Desea enviar?"))
       {alert("Su mensaje ha sido enviado");
           return true;}
else{
    e.preventDefault();
    return false;
}
}