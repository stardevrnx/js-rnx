function load() {
    var msg = document.getElementById('msg')

    var data = new Date()
    var hr = data.getHours()

    msg.innerHTML = 'agora e ' + hr + 'horas'

    if (hr >= 0 && hr < 12) {

    } else if (hr >= 12 && hr < 18) {

    } else {
        
    }
}