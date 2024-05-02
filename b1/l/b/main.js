document.getElementById('start').addEventListener('click', () => {
    const a = Number(prompt('a'))
    const b = Number(prompt('b'))
    const c = Number(prompt('c'))
    document.getElementById('res').textContent = `Delta: ${Math.pow(b, 2)-4*a*c}`
})