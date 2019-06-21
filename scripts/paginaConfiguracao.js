//Recebe o que foi digitado na telapagina

import * as storagePaginaInicial  from '/scripts/storage/paginaInicial.js'
import * as storageAceitouSalvar from '/scripts/storage/aceitouSalvar.js'

$inputPaginaInicial.value = storagePaginaInicial.paginaInicial
$inputPermitiuSalvar.checked = storageAceitouSalvar.aceitouSalvar


//o que vai ser executado quando o evento de click acontecer ou ao clicar
$botaoSalvar.onclick = salvar


//função de calback
//hoistig
//função é um tipo dado
//exe
function salvar(){
    storageAceitouSalvar.setAceitouSalvar($inputPermitiuSalvar.checked)
    storagePaginaInicial.setPaginaInicial($inputPaginaInicial.value)
}
