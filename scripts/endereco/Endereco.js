//função construtora // instanceof funciona
//função factory // larga mão do instanceof
//fabrica de objetos
//createNome()

function Endereco(endereco){

    if(this === undefined ||( this !== undefined && !(this instanceof Endereco))){
        return new Endereco(endereco)
    }

    let enderecoCompleto
    let enderecoResumido 
    
    if(!endereco || endereco === 'blank'){
        enderecoCompleto = 'blank'
        enderecoResumido = 'blank'
    }else{
         const url = new URL(endereco)
    

    if(url.hostname === 'localhost'){
        const paginaLocal = url.pathname.replace("/", "")
        enderecoCompleto = paginaLocal;
        enderecoResumido = paginaLocal;
       
    }else{
        /*
        colocando apenas enderecoCompleto = urlmtambem funciona pois
       */
        enderecoCompleto = url.toString()
        enderecoResumido = url.hostname
    }
}

 //Objeto literal - literal object
  /*  return{
        urlCompleta: enderecoCompleto,
        urlResumida : enderecoResumido

    }*/
    this.urlCompleta = enderecoCompleto
    this.urlResumida = enderecoResumido
    /* 
    Quando executa com new return this
    */
} 

export {Endereco}