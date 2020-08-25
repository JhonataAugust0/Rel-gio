function Carregar_imagem()
{
  var img = window.document.getElementById('imagem')
  var msg = window.document.getElementById('msg')
  var data = new Date()
  var hora = data.getHours()

  if (hora >= 0 && hora < 12)
  {
    img.src = 'fotomanha.png'
    msg.innerHTML = `Bom dia!`
    document.body.style.background = '#e2cd9f'
  }
  else if (hora >= 12 && hora <= 18)
  {
    msg.innerHTML = `<h3>Boa tarde!</h3>`
    img.src = 'fototarde.png'
    document.body.style.background = '#b9846f'
  }
  else
  {
    msg.innerHTML = `Boa noite!`
    img.src = 'fotonoite.png'
    document.body.style.background = '#515154'
  }
}

function Atualizar_relogio()
{
  var data = new Date()
  var hora = data.getHours()
  var minutos = data.getMinutes()
  var segundos = data.getSeconds()

  if (hora < 10)
  {
    hora = "0" + hora
  }
  if (minutos < 10)
  {
    minutos = "0" + minutos
  }
  if (segundos < 10)
  {
    segundos = "0" + segundos
  }
  var tempo = hora + ':' + minutos + ':' + segundos
  document.getElementById('relogio').innerHTML = tempo
}
setInterval(Atualizar_relogio, 1000)
