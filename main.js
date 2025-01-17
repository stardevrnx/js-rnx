var speed = window.document.getElementById('vel')
var res = window.document.getElementsByClassName('res')

velocity = Number(speed)

function verify() {
    if (speed < 30) {
        res.innerHTML('a sua velocidade e: ' + speed + 'VOCE FOI MULTADO!!!')
        res.style.color = 'red'
    } else if  (speed > 30) {
        res.innerHTML('A tua velocidade e: ' + speed + 'VOCE PODE PASSAR!!!')
        res.styele.color = 'green'
    }
}