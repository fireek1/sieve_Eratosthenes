const input = document.querySelector('.num')
const button = document.querySelector('.start')
const nums = document.querySelector('.nums')
const errorMessage = document.querySelector('.error-message')
const main = document.querySelector('.main')

button.onclick = () => {
    if (!/^\d+$/.test(input.value)) {
        errorMessage.style.display = 'block'
    } else {
        errorMessage.style.display = 'none'
        nums.textContent = Era(input.value)
    }
}

function Era(n) {
    let array = [], limit = Math.sqrt(n), result = []

    for (let i = 2; i < n; i++) {
        array.push(true)
    }

    for (let i = 2; i <= limit; i++) {
        if (array[i]) {
            for (let j = i * i; j < n; j += i) {
                array[j] = false
            }
        }
    }

    for (let i = 2; i < n; i++) {
        if(array[i]) {
            result.push(i)
        }
    }

    return result
}