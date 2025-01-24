function load() {
    var msg = document.getElementById('msg')

    var data = new Date()
    var hr = data.getHours()

    msg.innerHTML = 'agora e ' + hr
}