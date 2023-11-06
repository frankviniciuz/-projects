const form = document.getElementById('form-validacaoAeB');

form.addEventListener('submit',function(e) {
    e.preventDefault();

    const numA = parseFloat(document.getElementById('num-a').value);
    const numB = parseFloat(document.getElementById('num-b').value);

    const messageBA = `O campo numérico B: ${numB} - é maior que o campo númerico A: ${numA}. Sendo assim, uma condição válida!`;
    const messageAB = `O campo numérico B: ${numB} - é menor que o campo númerico A: ${numA}. Sendo assim, uma condição inválida!`;

    validaBmaiorA(numA, numB, messageBA, messageAB);
})

function validaBmaiorA(numA,numB, messageBA, messageAB) {
    const containerMensagem = document.querySelector('.verifica-message');

    if (numA < numB){
        containerMensagem.innerHTML = messageBA;

    } else {
        containerMensagem.innerHTML = messageAB;
    }
    containerMensagem.style.display = 'block'
}




1