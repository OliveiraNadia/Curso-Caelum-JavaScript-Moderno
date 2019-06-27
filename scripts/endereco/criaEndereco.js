//função construtora
//função factory
//
function Endereco(endereco){
    const url = new URL(endereco)

    let enderecoCompleto
    let enderecoResumido 
    
    if(!endereco || endereco === 'blank'){
        enderecoCompleto = 'blank'
        enderecoResumido = 'blank'
    }else{
         const url = new(endereco)
    }

    if(url.hostname === 'localhost'){
        const paginaLocal = url.pathname.replace("/", "")
        enderecoCompleto = paginaLocal;
        enderecoResumido = paginaLocal;
       
    }else{
        enderecoCompleto = url.toString()
        enderecoResumido = url.hostname
    }


    return{
        urlCompleta: enderecoCompleto,
        urlResumida : enderecoResumido

    }
} 

export {criaEndereco}