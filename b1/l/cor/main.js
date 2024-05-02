const n = document.getElementById('name')
const buttons = document.getElementById('buttons')

for (let each of buttons.children) {
    each.addEventListener('click', () => {
        n.style.color = each.name
    })
}