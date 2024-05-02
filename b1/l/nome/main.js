const n = document.getElementById('name')

document.getElementById('start').addEventListener('click', () => {
    n.textContent = 'Bom dia, ' + prompt('Nome') + '.'
})