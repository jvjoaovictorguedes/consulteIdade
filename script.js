function calculo(){
    const nascimento = document.getElementById('anoNascimento').value;
    const data = new Date;
    const ano = data.getFullYear();
    const resultado = document.getElementById('resultado')
    const calculoIdade = ano - nascimento;
    const sexo1 = document.getElementById('sexo1');
    const sexo2 = document.getElementById('sexo2');
    let sexoSelecionado;

    if (sexo1.checked && calculoIdade > 0 && calculoIdade < 12) {
        sexoSelecionado = 'um menino'
    }else { if (sexo1.checked && calculoIdade > 13 && calculoIdade < 50){
                sexoSelecionado = 'um homem'
    }else { if (sexo1.checked && calculoIdade > 51 && calculoIdade < 100){
                sexoSelecionado = 'um senhor'
    }else { if(sexo2.checked && calculoIdade > 0 && calculoIdade < 12){
                sexoSelecionado = 'uma menina'
    }else { if(sexo2.checked && calculoIdade > 13 && calculoIdade < 50){
                sexoSelecionado = 'uma mulher'
    }else { if(sexo2.checked && calculoIdade > 51 && calculoIdade < 100){
                sexoSelecionado = 'uma senhora'
    }}}}}}

    let imagemSelecionada;

    if(sexoSelecionado == 'uma menina'){
        imagemSelecionada = '<img src="images/menina.jpg" alt="foto da menina">'
    } else { if(sexoSelecionado == 'uma mulher'){
        imagemSelecionada = '<img src="images/mulher.jpg" alt="foto da mulher">'
    }else { if(sexoSelecionado == 'uma senhora'){
        imagemSelecionada = '<img src="images/idosa.jpg" alt="foto da idosa">'
    }else { if(sexoSelecionado == 'um menino'){
        imagemSelecionada = '<img src="images/menino.jpg" alt="foto do menino">'
    }else { if(sexoSelecionado == 'um homem'){
        imagemSelecionada = '<img src="images/homem.jpg" alt="foto do homem">'
    }}}}}
    
    resultado.innerHTML = `<p>Você é ${sexoSelecionado} de ${calculoIdade} anos!</p><br>
    ${imagemSelecionada}`
}