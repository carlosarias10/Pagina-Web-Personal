function control(){
    var nombre, correo, asunto;
    nombre = document.getElementById('fullname').value;
    correo = document.getElementById('email').value;
    asunto = document.getElementById('asunto').value;
    console.log(nombre);
    if (nombre == "" || correo == "" || asunto == ""){
        alert('Uno o mas campos vacios');    
    }
    else{
        alert('Gracias '+ nombre + ' por contactarnos');
    }  
}
