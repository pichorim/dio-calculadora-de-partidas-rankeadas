let numeroVitoria = 101
let numeroDerrota = 0

function calcularSaldo(vitoria,derrota){
    saldo = vitoria - derrota
    return saldo
}

function classificarRank(saldo){
    let rank = ""

    if (saldo <= 10){
        rank = "Ferro"
    }else if (11<= saldo && saldo <= 20){
        rank = "Bronze"
    }else if (21 <= saldo && saldo  <= 50){
        rank = "Prata"
    }else if (51 <= saldo && saldo  <= 80){
        rank = "Ouro"
    }else if (81 <= saldo && saldo  <= 90){
        rank = "Diamante"
    }else if (91 <= saldo && saldo  <= 100){
        rank = "Lendário"
    }else{
        rank = "Imortal"
    }
    
    return rank
}

let saldoVitoria = calcularSaldo(numeroVitoria,numeroDerrota)
let rankCalculado = classificarRank(saldoVitoria)

console.log(`O herói de saldo ${saldoVitoria} está no rank ${rankCalculado}!`)