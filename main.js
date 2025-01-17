function verify() {
    vel = window.document.getElementById('#vel')

    velocity = Number(vel.value)

    if (velocity < 30) {
        window.document.write("PARABENS!!!! VOCE FOI MULTADOOOOOO!!!!")
    } else {
        window.document.write("PARABEEEEEEENS!!! VOCE ESTA NA VELOCIDADE CORRETAAAAAA!!!")
    }
}