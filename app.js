function Somar(){

    let nota1 = document.getElementById('n1').value
    let nota2 = document.getElementById('n2').value
    let nota3 = document.getElementById('n3').value
    let nota4 = document.getElementById('n4').value

    let nota5=  (parseFloat(nota1) + parseFloat (nota2) + parseFloat (nota3) + parseFloat (nota4)) / 4

    document.getElementById('resposta').innerHTML = nota5



}