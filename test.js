    function IniciarInscricao() {
    console.log("Sistema Iniciado: Acessando Agenda...");

    let DataEvento = prompt("Digite a data do evento (DD/MM/AA):");

    if (DataEvento !== "16/09/25") {
        alert("EVENTO NÃO PERMITIDO POR DATA INVÁLIDA!");
        return;
    }

    alert("ACESSO PERMITIDO AO EVENTO");

    let Idade = parseInt(prompt("Qual sua idade?"));

    if (Number.isNaN(Idade) || Idade <= 0) {
        alert("Digite uma idade válida!");
        return;
    }

    if (Idade <= 18) {
        alert("CADASTRO NÃO PERMITIDO, IDADE INSUFICIENTE");
        return;
    }

    alert("CADASTRO AUTORIZADO");

    alert("INFORMAR PALESTRANTE");

    let Palestrante = prompt("Escolha o palestrante:\n1 - WHINDERSSON\n2 - THIAGO V.");

    if (Palestrante !== "1" && Palestrante !== "2") {
        alert("Opção inválida!");
        return;
    }

    let Participantes = parseInt(prompt("Quantidade de participantes?"));

    if (Number.isNaN(Participantes) || Participantes <= 0) {
        alert("Número de participantes inválido!");
        return;
    }

    if (Participantes > 100) {
        alert("ACESSO NEGADO, N° DE PESSOAS EXCEDIDO");
        return;
    }

    if (Palestrante === "1") {
        alert("PALESTRA 1: WHINDERSSON");
    } else {
        alert("PALESTRA 2: THIAGO V.");
    }

    alert("ACESSO AUTORIZADO, DIVIRTA-SE!");
}