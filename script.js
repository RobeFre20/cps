var box1 = document.getElementById('box1')
var numero = document.getElementById('numero1')
var box2 = document.getElementById('box2')
var numero2 = document.getElementById('numero2')


var tempo = new Timer({
    onstart : function(millisec){
        var sec = Math.round(millisec/1000);
        box1.innerHTML = '<strong>' + sec + '</strong>'
    },
	ontick : function(millisec) {
		var sec = Math.round(millisec/1000);
		box1.innerHTML = '<strong>' + sec + '</strong>'
	}
})

box1.addEventListener('click', function () {
	document.getElementById('btn').disabled = true
    numero.style.display = 'block'
    var ris = 1 + parseInt(numero.innerHTML, 10)
    numero.innerHTML = ris
    if(ris == 1){
        tempo.start(5).on('end', function () {
			box1.innerHTML = '<strong>Tempo Scaduto</strong>'
            alert(parseInt(numero.innerHTML, 10) / 5 + ' CPS')
            window.location.reload()
        })
    }
})

//tasto destro

var tempo2 = new Timer({
    onstart : function(millisec){
        var sec = Math.round(millisec/1000);
        box2.innerHTML = '<strong>' + sec + '</strong>'
    },
	ontick : function(millisec) {
		var sec = Math.round(millisec/1000);
		box2.innerHTML = '<strong>' + sec + '</strong>'
	}
})

box2.addEventListener('contextmenu', e => {
    e.preventDefault()
	document.getElementById('btn').disabled = true
    numero2.style.display = 'block'
    var ris = 1 + parseInt(numero2.innerHTML, 10)
    numero2.innerHTML = ris
    if(ris == 1){
        tempo2.start(5).on('end', function () {
			box2.innerHTML = '<strong>Tempo Scaduto</strong>'
            alert(parseInt(numero2.innerHTML, 10) / 5 + ' CPS')
            window.location.reload()
        })
    }
})


function sinistra() {
    if(box1.style.display == 'none'){
        box1.style.display = 'block'
        box2.style.display = 'none'
    }else{
        box1.style.display = 'none'
        box2.style.display = 'block'
    }
}