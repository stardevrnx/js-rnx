function dataVerify() {
    var agr = new Date()
    var diaSe = agr.getDay()

    switch(diaSe) {
        case 0:
            window.document.write('domingo')
            break
        case 1:
            window.document.write('segunda')
            break
        case 2:
            window.document.write('terca')
            break
        case 3:
            window.document.write('quarta')
            break
    }
}