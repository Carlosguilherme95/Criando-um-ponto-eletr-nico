
let nomeFunc = () => {
    
    let diaDoMes = document.getElementById('DiaDoMes')
    let diaDoMesSalvo = diaDoMes.value

    let dadosNoParagrafoooo = document.createElement('p')
    dadosNoParagrafoooo.textContent = diaDoMesSalvo

    let recebeDadossss = document.getElementById('recebe-dadosarmazenados')
    recebeDadossss.appendChild(dadosNoParagrafoooo)
    //
    let formNomeFunc = document.getElementById('nome-funcUM')
    let nomeFuncSalvoNaMemoria = formNomeFunc.value
    console.log(nomeFuncSalvoNaMemoria) 
    //
    let dadosNoParagrafo = document.createElement('p')
    dadosNoParagrafo.textContent = 'Nome: ' + nomeFuncSalvoNaMemoria
    let recebeDados = document.getElementById('recebe-dadosarmazenados')
    recebeDados.appendChild(dadosNoParagrafo)  
    //
    let formHoraEntrada = document.getElementById('nome-func2')
    let horaEntradaSalvaNaMemoria = formHoraEntrada.value
    console.log(horaEntradaSalvaNaMemoria)
    let dadosNoParagrafoo = document.createElement('p')
    dadosNoParagrafoo.textContent = 'Horário de Entrada: ' + horaEntradaSalvaNaMemoria + " hrs"
    let recebeDadoss = document.getElementById('recebe-dadosarmazenados')
    recebeDadoss.appendChild(dadosNoParagrafoo) 
    //
    let formHoraSaida = document.getElementById('nome-func3')
    let horaSaidaSalvaNaMemoria = formHoraSaida.value

    console.log(horaSaidaSalvaNaMemoria)

    let dadosNoParagrafooo = document.createElement('p')
    dadosNoParagrafooo.textContent = `Horário de saída ` + horaSaidaSalvaNaMemoria + " hrs"
    let recebeDadosss = document.getElementById('recebe-dadosarmazenados')
    recebeDadosss.appendChild(dadosNoParagrafooo)
}


