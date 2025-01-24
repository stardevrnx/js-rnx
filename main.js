function load() {
    var msg = document.getElementById('msg')
    var sec = document.getElementById('sec')

    var data = new Date()
    var hr = data.getHours()

    msg.innerHTML = 'agora e ' + hr + 'horas'

    if (hr >= 0 && hr < 12) {
        document.body.style.background = '#e2cd9f'
    } else if (hr >= 12 && hr < 18) {
        document.body.style.background = '#b9846f'
    } else {
        document.body.style.background = '#515154'
    }
}