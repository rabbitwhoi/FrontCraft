const input1 = document.getElementById('input1')
const btnPlus = document.getElementById('btnPlus')
const btnMinus = document.getElementById('btnMinus')
const btnDelit = document.getElementById('btnDelit')
const btnMnozh = document.getElementById('btnMnozh')
const input2 = document.getElementById('input2')

const result = document.getElementById('result')

btnPlus.onclick = function () {
    const resultPlus = parseInt(input1.value) + parseInt(input2.value);
    result.innerHTML = `${resultPlus}`
    input1.value = '';
    input2.value = '';
}

btnMinus.onclick = function () {
    const resultPlus = parseInt(input1.value) - parseInt(input2.value);
    result.innerHTML = `${resultPlus}`
    input1.value = '';
    input2.value = '';
}

btnDelit.onclick = function () {
    const resultPlus = parseInt(input1.value) / parseInt(input2.value);
    result.innerHTML = `${resultPlus}`
    input1.value = '';
    input2.value = '';
}

btnMnozh.onclick = function () {
    const resultPlus = parseInt(input1.value) * parseInt(input2.value);
    result.innerHTML = `${resultPlus}`
    input1.value = '';
    input2.value = '';
}