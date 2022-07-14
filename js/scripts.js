function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}



function calculateProm() {
    let nombre = document.getElementById('nombreID').value;
    let apellido = document.getElementById('apellidoID').value;
    let nota1 = parseInt(document.getElementById('nota1ID').value);
    let nota2 = parseInt(document.getElementById('nota2ID').value);
    let nota3 = parseInt(document.getElementById('nota3ID').value);
    let nota4 = parseInt(document.getElementById('nota4ID').value);

    let resultado = promedio(nota1,nota2,nota3,nota4)

    let estado = '';
    if(resultado>=6){
        estado = 'Promedio Positivo';
    }else{
        estado = 'Promedio Negativo';
    }


    console.log(nombre, apellido, resultado, estado);
}

function promedio(nota1,nota2,nota3,nota4) {

    let suma = nota1 + nota2 + nota3 + nota4;

    let resultadoProm = suma/4;

    return resultadoProm;
}

