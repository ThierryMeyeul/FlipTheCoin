const btn = document.getElementById('btn')
const textResult = document.getElementById('result')
const image = document.querySelector('.image')


btn.addEventListener('click', () => {
    const result = Math.random() < 0.5 ? "Heads" : 'Tails'
    
    textResult.textContent = result
    if (result === 'Heads') {
        image.src = "resources/heads.svg"
    } else {
        image.src = 'resources/tails.svg'
    }
})
