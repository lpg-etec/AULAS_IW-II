const height = document.getElementById('height')
const weight = document.getElementById('weight')
const gender = document.getElementById('gender')

const res = document.getElementById('res')
const s = document.getElementById('status')

document.getElementById('calc').addEventListener('click', () => {
    const calc = weight.value / Math.pow(height.value, 2)
    res.textContent = calc.toFixed(2)
    if (calc <= 16) {
        s.style.color = 'red'
        s.textContent = 'Severamente Magro'
    } else if (calc > 16 && calc < 16.9) {
        s.style.color = 'red'
        s.textContent = 'Moderadamente Magro'
    } else if (calc > 17 && calc < 18.4) {
        s.style.color = 'yellow'
        s.textContent = 'Ligeiramente Magro'
    } else if (calc > 18.5 && calc < 24.9) {
        s.style.color = 'green'
        s.textContent = 'Regular'
    } else if (calc > 25 && calc < 29.9) {
        s.style.color = 'yellow'
        s.textContent = 'Pré-obeso'
    } else if (calc > 30 && calc < 34.9) {
        s.style.color = 'red'
        s.textContent = 'Obeso (classe I)'
    } else if (calc > 35 && calc < 39.9) {
        s.style.color = 'red'
        s.textContent = 'Obeso (classe II)'
    } else if (calc >= 40) {
        s.style.color = 'red'
        s.textContent = 'Obeso (classe III)'
    } else {
        s.textContent = 'Regular'
    }
})