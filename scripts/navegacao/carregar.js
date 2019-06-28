import { Endereco } from '/scripts/endereco/Endereco.js'




export function carregar(seila)
{
    let endereco

    if(typeof seila == 'string')
    {
        endereco = new Endereco(seila)
    }
    else if(seila instanceof Endereco)
    {
        endereco = seila
    }
    else{
        throw new Error(
           `Ǹão foi possivel carregar o seguinte endereco:
            Valor: ${JSON.stringify(seila)}
            Tipo : ${typeof seila}
           `
        )
    }

    $janelaPrincipal.src = endereco.urlCompleta
    $inputEndereco.value = endereco.urlCompleta

}