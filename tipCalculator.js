let tipPercentage = 0
let price = 0



const tipCalculated = document.querySelector('#tipValue')

//setting up outputs
const printEndPrice = () => {
    const calculateTip = tipPercentage * price / 100
    const calculateFullPrice = calculateTip + price

    tipCalculated.innerHTML = ''

    if (tipPercentage > 0 && price > 0) {
        const tipValue = document.createElement('p')
        tipValue.textContent = `Tip: ${calculateTip}`
        tipCalculated.appendChild(tipValue)

        const fullPrice = document.createElement('p')
        fullPrice.textContent = `Full Price: ${calculateFullPrice}`
        tipCalculated.appendChild(fullPrice)
    } else {
        const empty = document.createElement('p')
        empty.textContent = 'Enter both values.'
        tipCalculated.appendChild(empty)
    }
}

//listening for change in the inputs
document.querySelector('#price').addEventListener('input', (e) => {
    price = parseInt(e.target.value)
    printEndPrice()
})

document.querySelector('#tipPercentage').addEventListener('input', (e) => {
    tipPercentage = parseInt(e.target.value)
    printEndPrice()
})