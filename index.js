var selecao = document.getElementById("selecao");
var itemCC = document.getElementById("CCesar1");
var divPai = document.querySelector('#pai');
var inCod = document.querySelector('#inCode');
var deCod = document.querySelector('#deCode');
var btnRodar = document.querySelector('#btnRoda');
var radioBtn = document.querySelector('#radio');
var codigoInicial = document.querySelector("#digCod").value;
var passo = document.querySelector("#passoCCesar");
var caixaSaida = document.querySelector("#resultadoCod");

//Mudar layout - Seleção Cifra de César
selecao.addEventListener('click', function () {
    if (selecao.value == '3') {
        itemCC.style.display = 'flex'
        itemCC.style.flexDirection = 'column'
        itemCC.style.justifyContent = 'center'
        itemCC.style.alignItems = 'center'
        itemCC.style.paddingTop = '0.5em'
        divPai.style.paddingBottom = '2.5em'
    } else {
        itemCC.style.display = 'none'
        divPai.style.paddingBottom = '10em'
    }
})

//Mudar msgo do botão de rodar
inCod.addEventListener('click', function () {
    btnRodar.innerText = 'Codificar mensagem';
})

deCod.addEventListener('click', function () {
    btnRodar.innerText = 'Decodificar mensagem';
})

// Função para de/codificação - Cifra Cesar

function codificaCesar(codigoInicial, passo) {
    var saidaTexto = '';
    var nTroca = 0;
    var codificado
    // passo = parseInt(passo)
    // var codigoInicial = document.querySelector("#digCod").value;
    for (var i = 0; i < codigoInicial.length; i++) {
        if ((codigoInicial.charCodeAt(i) >= 65 && codigoInicial.charCodeAt(i) <= 90)) {
            nTroca = (Number(codigoInicial.charCodeAt(i))) - 65;
            nTroca = (nTroca + (Number(passo))) % 26;
            nTroca += 65;
            saidaTexto += String.fromCharCode(nTroca);
        } else if (codigoInicial.charCodeAt(i) >= 97 && codigoInicial.charCodeAt(i) <= 122) {
            nTroca = (Number(codigoInicial.charCodeAt(i))) - 97;
            nTroca = (nTroca + (Number(passo))) % 26;
            nTroca += 97;
            saidaTexto += String.fromCharCode(nTroca);
        } else {
            saidaTexto += String.fromCharCode(codigoInicial.charCodeAt(i));
        }
    }
    codificado = saidaTexto;
    return codificado
}

function decodificaCesar(codigoInicial, passo) {
    var saidaTexto = '';
    var nTroca = 0;
    var decodificado
    var codigoInicial = document.querySelector("#digCod").value;
    for (var i = 0; i < codigoInicial.length; i++) {
        if ((codigoInicial.charCodeAt(i) >= 65 && codigoInicial.charCodeAt(i) <= 90)) {
            nTroca = (Number(codigoInicial.charCodeAt(i))) - 65;
            nTroca = (nTroca - (Number(passo - 26))) % 26;
            nTroca += 65;
            saidaTexto += String.fromCharCode(nTroca);
        } else if (codigoInicial.charCodeAt(i) >= 97 && codigoInicial.charCodeAt(i) <= 122) {
            nTroca = (Number(codigoInicial.charCodeAt(i))) - 97;
            nTroca = (nTroca - (Number(passo - 26))) % 26;
            nTroca += 97;
            saidaTexto += String.fromCharCode(nTroca);
        } else {
            saidaTexto += String.fromCharCode(codigoInicial.charCodeAt(i));
        }
    }
    decodificado = saidaTexto;
    return decodificado
}

// Função para de/codificação - Base 64
function codificaBase64() {
    var codigoInicial = document.querySelector("#digCod").value

    if (document.querySelector('#inCode').checked && selecao.value == '2') {
        var saidaTexto = btoa(codigoInicial);
        document.querySelector('#resultadoCod').innerText = saidaTexto;
    } else if (document.querySelector('#deCode').checked && selecao.value == '2') {
        var saidaTexto = atob(codigoInicial);
        document.querySelector('#resultadoCod').innerText = saidaTexto;
    }
}

//Rodar Base64 e Cifra de César
btnRodar.addEventListener('click', function (e) {
    e.preventDefault();
    var codigoInicial = document.querySelector("#digCod").value;

    if (selecao.value == '2' && inCod.checked) {
        codificaBase64(codigoInicial)
    } else if (selecao.value == '2' && deCod.checked) {
        codificaBase64(codigoInicial)
    } else if (selecao.value == '3' && inCod.checked) {
        caixaSaida.value = codificaCesar(codigoInicial, passo.value)
    } else if (selecao.value == '3' && deCod.checked) {
        caixaSaida.value = decodificaCesar(codigoInicial, passo.value)
    } else {
        alert('Preencha todas as informações corretamente')
    }
}
)