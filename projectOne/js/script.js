const btnGreen = document.getElementById('btnGreen')
const btnYellow = document.getElementById('btnYellow')
const btnBlue = document.getElementById('btnBlue')
const btnBlack = document.getElementById('btnBlack')
const btnRed = document.getElementById('btnRed')
const btnOrange = document.getElementById('btnOrange')

const box = document.getElementById('box')

btnGreen.onclick = function () {
    box.style.backgroundColor = 'green'
}
btnYellow.onclick = function () {
    box.style.backgroundColor = 'yellow'
}
btnBlue.onclick = function () {
    box.style.backgroundColor = 'blue'
}
btnBlack.onclick = function () {
    box.style.backgroundColor = 'black'
}
btnRed.onclick = function () {
    box.style.backgroundColor = 'Red'
}
btnOrange.onclick = function () {
    box.style.backgroundColor = 'orange'
}