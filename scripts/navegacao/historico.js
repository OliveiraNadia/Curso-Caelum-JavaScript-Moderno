// Encapsulamento
//Type coercing -> conversão de valor
const listaSites = JSON.parse(sessionStorage.getItem('historico')) || []

let posicao = JSON.parse(sessionStorage.getItem('posicaoHistorico')) || -1

//closures
export function adiciona(endereco){
    if(endereco !== listaSites[posicao]){
        listaSites.splice(posicao + 1)
        listaSites.push(endereco)
        posicao ++
        sessionStorage.setItem('historico', JSON.stringify(listaSites))
        sessionStorage.setItem('posicaoHistorico', posicao)
    }
}

export function volta(){
    const isPrimeiroPosicao = posicao === 0
    if(listaSites.length !== 1 && !isPrimeiroPosicao) {
        posicao = posicao - 1
        sessionStorage.setItem('posicaoHistorico', posicao)
        return listaSites[posicao]
    }
}

export function avanca(){
    const isUltimoPosicao = posicao === listaSites.length - 1
    if(listaSites.length !== 1 && !isUltimoPosicao) {
        posicao = posicao + 1
        sessionStorage.setItem('posicaoHistorico', posicao)
        return listaSites[posicao]
    }
}