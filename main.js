function verify() {
    vel = querySelector('input#vel')

    velocity = Number(vel.value)

    if (velocity < 30) {
        window.document.write("PARABENS!!!! VOCE FOI MULTADOOOOOO!!!!")
    }
}