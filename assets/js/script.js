const textArea = document.querySelector('.textarea');
const mensagem = document.querySelector('.mensagem');

// `A letra "e" é convertida para "enter"`
// `A letra "i" é convertida para "imes"`
// `A letra "a" é convertida para "ai"`
// `A letra "o" é convertida para "ober"`
// `A letra "u" é convertida para "ufat"`

function criptografar(criptografagem) {
    let matrizCodigo = [
        ['e', 'enter'],
        ['i', 'imes'],
        ['a', 'ai'],
        ['o', 'ober'],
        ['u', 'ufat']
    ];
    criptografagem = criptografagem.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (criptografagem.includes(matrizCodigo[i][0])) {
            criptografagem = criptografagem.replaceAll(matrizCodigo[i][0],
                matrizCodigo[i][1]
            );
        }
    };
    return criptografagem;
}

function btnCriptografar() {
    const textoCriptografado = criptografar(textArea.value);
    mensagem.value = textoCriptografado;
    textArea.value = "";
};

function descriptografar(descriptografagem) {
    let matrizCodigo = [
        ['e', 'enter'],
        ['i', 'imes'],
        ['a', 'ai'],
        ['o', 'ober'],
        ['u', 'ufat']
    ];
    descriptografagem = descriptografagem.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (descriptografagem.includes(matrizCodigo[i][1])) {
            descriptografagem = descriptografagem.replaceAll(matrizCodigo[i][1],
                matrizCodigo[i][0]
            );
        }
    };
    return descriptografagem;
}

function btnDescriptografar() {
    const textoDesriptografado = descriptografar(textArea.value);
    mensagem.value = textoDesriptografado;
    textArea.value = "";
};

const btnCopiar = document.querySelector('.copiar');
const campoMensagem = document.querySelector('.mensagem');

btnCopiar.addEventListener('click', (e) => {
    navigator.clipboard.writeText(campoMensagem.value);

    alert('Texto copiado com sucesso')
});



/* console.table(matrizCodigo) */