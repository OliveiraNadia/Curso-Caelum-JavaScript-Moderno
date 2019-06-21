//Encapsulamento
export let aceitouSalvar = JSON.parse(localStorage.getItem('aceitouSalvar'));


//Ambiente onde ele foi criada
//Acesso a variaveis do ambiente
//function setAceitouSalvar é uma "closure"
export function setAceitouSalvar(valor){
    aceitouSalvar = valor
    localStorage.setItem("aceitouSalvar", valor)
}