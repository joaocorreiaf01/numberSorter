const form = document.querySelector("form")
const numToDraw = document.querySelector("#numToDraw")
const minRange = document.querySelector("#minRange")
const maxRange = document.querySelector("#maxRange")

const resultChildren = document.querySelector(".numbers-result")
const result = document.querySelector(".result")

const repeatNumber = document.querySelector("#repeatNumber")
const imgCheckbox = document.querySelector("#checkbox-default")


form.onsubmit = (event) => {
    event.preventDefault()


    const newSortedNumber = {
        numToDraw: parseInt(numToDraw.value),
        minRange: parseInt(minRange.value),
        maxRange: parseInt(maxRange.value),
    }

    const listNumbersTotal = totalRandomNumbers(newSortedNumber)
    createElements(listNumbersTotal)

    numToDraw.value = ""
    minRange.value = ""
    maxRange.value = ""
    
    numToDraw.focus()
}


// Modifica a imagem pela ação do usuário
repeatNumber.addEventListener("change", () => {
    if(repeatNumber.checked) {
        imgCheckbox.setAttribute("src", "assets/icons/drag-default.svg" )
    } else {
        imgCheckbox.setAttribute("src", "assets/icons/drag-active.svg")
    }
})

// Gera um número aleatório
function getRandomNumber (newSortedNumber){

    return Math.floor(Math.random() * (newSortedNumber.maxRange - newSortedNumber.minRange + 1 )) + newSortedNumber.minRange
}

// Enquanto for menor que a quantidade de numeros que devem ser sorteados, gera números aleatórios
function totalRandomNumbers(newSortedNumber) {
    let total = []

    for (let i = 0; i < newSortedNumber.numToDraw;) {
        const totalNumbers = getRandomNumber(newSortedNumber)

        if (repeatNumber.checked) {
            total.push(totalNumbers)
            i++
        } else {
            if (!total.includes(totalNumbers)) {
                total.push(totalNumbers)
                i++
            }
        }
    }


    return total
}


// Criação dos elementos para exibir os números sorteados
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
