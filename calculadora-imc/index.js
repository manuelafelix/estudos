function calcularImc() {
    let peso = document.getElementById('peso').value;
    let altura = document.getElementById('altura').value;
    let result = document.getElementById('result');

    if (peso > 0 && altura > 0) {
        let imc = Number((peso / (altura * altura)).toFixed(1));

        if (imc < 18.5)
            result.textContent = `${imc}. Abaixo do peso`;
        else if (imc >= 18.5 && imc < 25)
            result.textContent = `${imc}. Peso normal`;
        else if (imc >= 25 && imc < 30)
            result.textContent = `${imc}. Sobrepeso`;
        else if (imc >= 30 && imc < 35)
            result.textContent = `${imc}. Obesidade grau I`;
        else if (imc >= 35 && imc < 40)
            result.textContent = `${imc}. Obesidade grau II`;
        else if (imc > 40)
            result.textContent = `${imc}. Obesidade mórbida!`;
    }
    else {
        result.textContent = 'Preencha os campos!';
    }

    document.getElementById('results').classList.remove('hidden');
}

