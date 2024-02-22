const lamp = document.getElementById('lamp')
let q = false
lamp.addEventListener('dblclick', () => {
    lamp.src = './img/quebrada.jpg'
    q = true
})
lamp.addEventListener('mouseenter', () => {
    if (!q) {
        lamp.src = './img/ligada.jpg'
        document.getElementById('state').textContent = 'ligada'
    }
})
lamp.addEventListener('mouseleave', () => {
    if (!q) {
        lamp.src = './img/desligada.jpg'
        document.getElementById('state').textContent = 'desligada'
    }
})
document.getElementById('desligar').addEventListener('click', () => {
    if (!q) {
        lamp.src = './img/desligada.jpg'
        document.getElementById('state').textContent = 'desligada'
    }
})
document.getElementById('ligar').addEventListener('click', () => {
    if (!q) {
        lamp.src = './img/ligada.jpg'
        document.getElementById('state').textContent = 'ligada'
    }
})
document.getElementById('liga-desliga').addEventListener('click', () => {
    if (!q) {
        lamp.src = './img/ligada.jpg'
        document.getElementById('state').textContent = 'ligada'
        setInterval(() => {
            lamp.src = './img/desligada.jpg'
            document.getElementById('state').textContent = 'desligada'
        }, 2500)
    }
})
