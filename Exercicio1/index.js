let tipoDoCarro = prompt(
  "Qual o tipo do carro alugado? (DIGITE 'popular' OU 'luxo')");

if (tipoDoCarro != "popular" && tipoDoCarro != "luxo") { // Verificando se digitou corretamente o tipo do carro
  alert("Voce digitou o tipo de carro de forma errada!");
} else {
  let diasAlugados = parseInt(prompt("Quantos dias de aluguel?"));
  let kmPercorridos = parseFloat(prompt("Quantos KM foram percorridos?"));
  let valorTotal = parseFloat;

  if (isNaN(diasAlugados && kmPercorridos)) { // Verificando se foi digitado um numero nas variaveis diasAlugados e kmPercorridos
    alert("ERRO - digite um numero!");
  } else {
    if (tipoDoCarro == "popular") {
      if (kmPercorridos > 100) {
        valorTotal = (diasAlugados * 90) + (0.1 * kmPercorridos);
      } else {
        valorTotal = (diasAlugados * 90) + (0.2 * kmPercorridos);
      }
    } else {
      if (kmPercorridos > 200) {
        valorTotal = (diasAlugados * 150) + (0.25 * kmPercorridos);
      } else {
        valorTotal = (diasAlugados * 150) + (0.3 * kmPercorridos);
      }
    }
    alert(`O valor total a pagar é de: ${valorTotal}`);
  }
}
