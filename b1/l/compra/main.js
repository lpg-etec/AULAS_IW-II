document.getElementById('start').addEventListener('click', () => {
    const n = prompt('Nome')
    const price = Number(prompt('Valor'))
    const given = Number(prompt('Valor dado'))
    document.getElementById('name').textContent = `Compra de ${n}, no valor de: ${price}`
    document.getElementById('given').textContent = `Dado: ${given}`
    document.getElementById('change').textContent = `Troco: ${given-price}`
})