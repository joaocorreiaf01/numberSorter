const form = document.querySelector("form")
const numToDraw = document.querySelector("#numToDraw")
const minRange = document.querySelector("#minRange")
const maxRange = document.querySelector("#maxRange")

const resultChildren = document.querySelector(".numbers-result")
const result = document.querySelector(".result")

form.onsubmit = (event) => {
    event.preventDefault()

    const newSortedNumber = {
        numToDraw: parseInt(numToDraw.value),
        minRange: parseInt(minRange.value),
        maxRange: parseInt(maxRange.value),
    }

    const listNumbersTotal = totalRandomNumbers(newSortedNumber)
    createElements(listNumbersTotal)
}

function getRandomNumber (newSortedNumber){
    return Math.floor(Math.random() * (newSortedNumber.maxRange - newSortedNumber.minRange + 1 )) + newSortedNumber.minRange
}

function totalRandomNumbers(newSortedNumber) {
    let total = []

    for (let i = 0; i < newSortedNumber.numToDraw; i++) {
        const totalNumbers = getRandomNumber(newSortedNumber)

        if (!total.includes(totalNumbers)) {
            total.push(totalNumbers)
        }
    }

    return total
}


function createElements(numbersToDisplay) {
    resultChildren.innerHTML = ""
    numbersToDisplay.forEach(element => {
    
        const resultView = document.createElement("h3")
        resultView.classList.add("show-result")
        resultView.textContent = element

        resultChildren.append(resultView)

        result.classList.remove("result")
        result.classList.add("result-view")
    });

}
