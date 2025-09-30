const btn = document.getElementById('btn')
const textResult = document.getElementById('result')
const coin = document.getElementById('coin')

btn.addEventListener('click', () => flipCoin())
coin.addEventListener('click', () => flipCoin())


const flipCoin = () => {
    const result = Math.random() < 0.5 ? "Heads" : 'Tails'
   
    
    if (result === 'Heads') {
        coin.src = "resources/heads.svg"
    } else {
        coin.src = 'resources/tails.svg'
    }
    
    if (coin.classList.contains('rotate')) {
        coin.classList.remove('rotate')
    } else {
        coin.classList.add('rotate')
    }

    textResult.textContent = result
}