const buttons = Array.from(document.querySelectorAll(".digit"))
const input = document.querySelector(".display")
const operators = Array.from(document.querySelectorAll(".operator"))

// console.log(input)
// console.log(buttons)
// console.log(operators)

buttons.forEach((button, index) => {
    button.addEventListener("click", appendCharacter)
})

operators.forEach((operator, index) => {
    operator.addEventListener("click", function (e) {
        if (e.target.textContent === '=') {
            evaluate()
        }
    })
})

const arr = ['+', '-', '*', '/', '.']

function appendCharacter(e) {
    let currentDigit = e.target.textContent
    console.log(currentDigit)
    const length = input.value.length
    const lastCharacter = input.value.charAt(length - 1)
    console.log(lastCharacter)
    if (arr.includes(lastCharacter)) {
        const isDigit = arr.includes(currentDigit)
        if (isDigit) return
        input.value += currentDigit
    } else {
        input.value += currentDigit
    }

    // console.log(length)

    // console.log(input.value)

}

function evaluate() {
    const evaluatedValue = Function(`return ${input.value}`)
    input.value = evaluatedValue()
}
