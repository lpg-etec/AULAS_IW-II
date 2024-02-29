const n1 = document.getElementById('n1')
const n2 = document.getElementById('n2')
const res = document.getElementById('res')

document.getElementById('add').addEventListener('click', () => {
    res.textContent = Number(n1.value) + Number(n2.value)
})
document.getElementById('sub').addEventListener('click', () => {
    res.textContent = Number(n1.value) - Number(n2.value)
})
document.getElementById('mul').addEventListener('click', () => {
    res.textContent = Number(n1.value) * Number(n2.value)
})
document.getElementById('div').addEventListener('click', () => {
    res.textContent = Number(n1.value) / Number(n2.value)
})
document.getElementById('clear').addEventListener('click', () => {
    res.textContent = ''
})