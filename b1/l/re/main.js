document.getElementById('start').addEventListener('click', () => {
    const n = prompt('Nome')
    const s = Number(prompt('Salário'))
    const p = Number(prompt('Aumento'))
    document.getElementById('orig').textContent = `${n}, aumento de: ${s}`
    document.getElementById('change').textContent = `Aumento (${p}%): ${s/100*p}`
    document.getElementById('total').textContent = `Total: ${s+(s/100*p)}`
})