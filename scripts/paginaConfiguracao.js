//Recebe o que foi digitado na telapagina

import * as storagePaginaInicial  from '/scripts/storage/paginaInicial.js'
import * as storageAceitouSalvar from '/scripts/storage/aceitouSalvar.js'

//named export
// destructuring
//desestruturação, explodindo
import {formataEndereco} from '/scripts/endereco/formataEndereco.js'

$inputPaginaInicial.value = storagePaginaInicial.paginaInicial
$inputPermitiuSalvar.checked = storageAceitouSalvar.aceitouSalvar


//o que vai ser executado quando o evento de click acontecer ou ao clicar
$botaoSalvar.onclick = salvar

//modulo com propriedades 


//função de calback
//hoistig
//função é um tipo dado
//executada em outro momento do tempo
//function declation

function salvar(){

    //Expressão de função
    //Function expression
    const  funcaoEscolhida = $inputPermitiuSalvar.checked === true
        ? storageAceitouSalvar.setAceitou
        : storageAceitouSalvar.setNaoAceitou

        funcaoEscolhida()
     

        const enderecoCompleto = formataEndereco($inputPaginaInicial.value)
        $inputPaginaInicial.value = enderecoCompleto


        storagePaginaInicial.setPaginaInicial($inputPaginaInicial.value)
}

$botaoLimpaTudo.addEventListener('click', function () {
  const chavesPermanentes = [
    'aceitouSalvar',
    'aceitouTermos'
  ]
  // TODO tudo menos aceitouSalvar e aceitouTermos
  const listaChavesLocalStorage = Object.keys(localStorage)
  for(let chave of listaChavesLocalStorage) {

      const isChavePermanente = chavesPermanentes.includes(chave)

      if(!isChavePermanente){
      localStorage.removeItem(chave)
      }
  }
   
  const listaChavesSessionStorage = Object.keys(sessionStorage)
  for(let chave of listaChavesSessionStorage) {
      sessionStorage.removeItem(chave)
  }
    window.location.reload()
})
