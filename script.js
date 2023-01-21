const button = document.querySelector('button')
const valor = document.getElementById('valor')
const saldo = document.getElementById('saldo')
const saldofake = document.getElementById('saldofake')
const notificaçãoSucesso = document.getElementById('mensagem-sucesso')
const erro1 = document.getElementById('erro1')
const erro2 = document.getElementById('erro2')
const span = document.getElementById('span')

button.addEventListener('click', function(mensagem) {

    mensagem.preventDefault()

    somar() 
    valorInvalido() 
})

function valorInvalido() {
    
    const mensagemSucesso = `<p>Trasnferência realizada <br> com sucesso!</p> <br> <p>Sua <b>trasnferência PIX de ${(valorEmReal).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</b> <br> para sua conta foi concluída com sucesso seu <br><b>saldo restante é de ${somar().toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</b></p> <br>`


    if (valor.value.length == '' || isNaN(valor.value) || valor.value > 95798.85 ) {

        erro1.style.display = 'block'
        notificaçãoSucesso.style.display = 'none'
        span.style.display = 'none'


    }  else {

        erro1.style.display = 'none'
        span.style.display = 'block'


        notificaçãoSucesso.style.display = 'block'
        notificaçãoSucesso.innerHTML = mensagemSucesso

        saldo.placeholder = `${somar().toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`
        valor.value = ''
    }

    if (valor.value > 95798.85 ) {

        erro2.style.display = 'block'
        erro1.style.display = 'none'
    } else [

        erro2.style.display = 'none'

    ]
}

function somar() {

    valorEmReal = parseFloat(valor.value)

    return  saldofake.value - valorEmReal

}