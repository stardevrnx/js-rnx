function contar() {
   var ini = document.getElementById('txti')
   var fim = document.getElementById('txtf')
   var de_tantos = document.getElementById('txtd')
    var result = document.getElementById("res")

   if (ini.value.length == 0 || fim.value.length == 0 || de_tantos.value.length == 0) {
    window.alert("Invalid Value")
   } else {

    var i = Number(ini)
    var f = Number(fim)
    var dt = Number(de_tantos)

    for(var c = i; c <= f; c += dt)
        result.innerHTML += c
   } 

}