/*
Função
Anônima
Imeditamente
Invocada
IIFE -> funcao
O unico jeito de criar escopo <ECM AScript2018 ES9
Ativando o mode estrito / strict mode -> módulo
*/

import aceitouSalvar from '/scripts/storage/aceitouSalvar.js'


if (aceitouSalvar === null) {

    //shadowing/sombra no módulo
    //redeclerando 
   const aceitouSalvar = confirm("Você aceita que a gente salve suas informações?");

    if (!aceitouSalvar) {
        alert("Você pode mudar isso na página de configurações")
    }
    localStorage.setItem("aceitouSalvar", aceitouSalvar);
}




