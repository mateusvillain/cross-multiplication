document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btn-calcular');
    btn.addEventListener('click', calcular);
})

// document.getElementById('btn-calcular').addEventListener('click', calcular)

function calcular() {
    const numA = document.getElementById('numA')
    const numB = document.getElementById('numB')
    const numC = document.getElementById('numC')
    
    const n1 = Number(numA.value)
    const n2 = Number(numB.value)
    const n3 = Number(numC.value)

    const calculo = (n2 * n3) / n1

    if (numA.value.length == 0) {
        numA.style.borderColor = 'red'
        console.log('Campo obrigatório')
    } else if (numA.value == 0) {
        numA.style.borderColor = 'red'
        console.log('O valor precisa ser diferente de 0.')
    } else if (numB.value.length == 0) {
        numB.style.borderColor = 'red'
        console.log('Campo obrigatório')
    } else if (numB.value == 0) {
        numB.style.borderColor = 'red'
        console.log('O valor precisa ser diferente de 0.')
    } else if (numC.value.length == 0) {
        numC.style.borderColor = 'red'
        console.log('Campo obrigatório')
    } else if (numC.value == 0) {
        numC.style.borderColor = 'red'
        console.log('O valor precisa ser diferente de 0.')
    } else {
        document.getElementById('result').value = calculo.toFixed(2)
        input.style.borderColor = '#c7cad4'
    }
}