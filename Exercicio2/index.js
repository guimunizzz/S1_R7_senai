let genero = prompt("Digite o genero do funcionario (DIGITE 'M' ou 'H'");

if (genero != "M" && genero != "H") {
  alert("ERRO - Você digitou de forma errada!!");
} else {
  let salarioAtual = parseFloat(prompt("Digite o salário atual do funcionario: "));
  let qntdAnos = parseInt(prompt("Digite quanto tempo o funcionario trabalha na empresa: "));
  let novoSalario;
  if (isNaN(salarioAtual && qntdAnos)) {
    alert("ERRO - digite um numero!");
  } else {
    if (genero == "M") {
      if (qntdAnos > 20) {
        novoSalario = salarioAtual + salarioAtual * 0.23;
      } else if (qntdAnos >= 15 && qntdAnos <= 20) {
        novoSalario = salarioAtual + salarioAtual * 0.12;
      } else if (qntdAnos >= 5 && qntdAnos <= 10) {
        novoSalario = salarioAtual + salarioAtual * 0.07;
      } else if (qntdAnos < 5) {
        novoSalario = salarioAtual + salarioAtual * 0.04;
      } else {
        alert("Voce inseriu uma data invalida")
      }
    } else {
        if (qntdAnos > 30) {
            novoSalario = salarioAtual + salarioAtual * 0.25;
          } else if (qntdAnos >= 20 && qntdAnos <= 30) {
            novoSalario = salarioAtual + salarioAtual * 0.14;
          } else if (qntdAnos >= 5 && qntdAnos <= 15) {
            novoSalario = salarioAtual + salarioAtual * 0.08;
          } else if (qntdAnos < 5) {
            novoSalario = salarioAtual + salarioAtual * 0.03;
          } else {
            alert("Voce inseriu uma data invalida")
          }
    }
    alert(`O novo salario é ${novoSalario}`)
  }
}
