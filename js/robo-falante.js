let nome;
let $imagemRobo = document.querySelector('.robo');

function perguntaNome() {
    nome = prompt("qual é o seu nome?");
    alert('Olá, ' + nome + '!');
}

function fazPerguntas() {
    $imagemRobo.src = 'img/nano-normal.png';
    perguntaNome();
    perguntaSeEstaBem();
}

function perguntaSeEstaBem() {
    let estaBem = prompt("voce está bem?");
    if ( estaBem.toLocaleUpperCase() =='SIM') {
        $imagemRobo.src = 'img/nano-feliz.png';
        alert ('que bom! :)');
    } else {
        alert('que pena. :(');
    }
}
