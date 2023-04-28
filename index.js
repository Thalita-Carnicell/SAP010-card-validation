import validator from './validator.js';

document.getElementById("BotaoPagamento").addEventListener("click", apertandoOBotao)
function apertandoOBotao() {
  alert("Aguarde validando cartão....")

  const numerosdigitado = document.getElementById("numerosimput").value

  if (validator.isValid(numerosdigitado)) {
    const lastFourDigits = numerosdigitado.substring(numerosdigitado.length - 4);
    const maskedValue = validator.maskify(numerosdigitado);
    alert(
      "Pagamento Aprovado numero de cartao de credito digitado Valido.\nÚltimos 4 dígitos: " +
      lastFourDigits +
      "\nValor mascarado: " +
      maskedValue
    );
  } else {
    alert("Pagamento Não aprovado O número de cartão de crédito é inválido.");
  }
}

console.log(validator);
