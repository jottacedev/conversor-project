const convButton = document.querySelector(".conv-button")

const currSelConv = document.querySelector(".curr-sel-conv")

const currSelCvtd = document.querySelector(".curr-sel-cvtd")

function convValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value

    const currencyValueToConvert = document.querySelector(".currency-value-real")

    const currencyValueConverted = document.querySelector(".currency-value-dolar")

    console.log(currSelCvtd.value)



    const dolarToday = 5.2

    const euroToday = 6.2

    const realToday = 1

    const libraToday = 7.2

    const bitcoinToday = 350000


    if (currSelCvtd.value == 'dolar') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currSelCvtd.value == 'euro') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(inputCurrencyValue / euroToday)
    }

    if (currSelCvtd.value == 'real') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(inputCurrencyValue / realToday)
    }

    if (currSelCvtd.value == 'bitcoin') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'BTC'
        }).format(inputCurrencyValue / bitcoinToday)
    }

    if (currSelCvtd.value == 'libra') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-UK', {
            style: 'currency',
            currency: 'GBP'
        }).format(inputCurrencyValue / libraToday)
    }

    if (currSelConv.value == 'real') {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(inputCurrencyValue / realToday)
    }

    if (currSelConv.value == 'euro') {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(inputCurrencyValue)
    }

    if (currSelConv.value == 'libra') {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat('en-UK', {
            style: 'currency',
            currency: 'GBP'
        }).format(inputCurrencyValue)
    }

    if (currSelConv.value == 'dolar') {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(inputCurrencyValue)
    }

    if (currSelConv.value == 'bitcoin') {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'BTC'
        }).format(inputCurrencyValue)
    }
    
}

function changeCurrency() {
    
    const currNameUp = document.getElementById('curr-name-up')

    const currImgUp = document.querySelector('.curr-img-up')
    
    const currNameDown = document.getElementById('curr-name-down')

    const currImgDown = document.querySelector('.curr-img-down')

    if (currSelConv.value == 'euro') {
        currNameUp.innerHTML = 'Euro'
        currImgUp.src = './assets/Design sem nome 3.png'
    }

    if (currSelConv.value == 'real') {
        currNameUp.innerHTML = 'Real Brasileiro'
        currImgUp.src = './assets/brasil 2.png'
    }

    if (currSelConv.value == 'libra') {
        currNameUp.innerHTML = 'Libra'
        currImgUp.src = './assets/libra 1.png'
    }

    if (currSelConv.value == 'dolar') {
        currNameUp.innerHTML = 'Dólar Américano'
        currImgUp.src = './assets/estados-unidos (1) 1.png'
    }

    if (currSelConv.value == 'bitcoin') {
        currNameUp.innerHTML = 'Bitcoin'
        currImgUp.src = './assets/bitcoin 1.png'
    }
       
    if (currSelCvtd.value == 'real') {
        currNameDown.innerHTML = 'Real Brasileiro'
        currImgDown.src = './assets/brasil 2.png' 
    }
    
    if (currSelCvtd.value == 'dolar') {
        currNameDown.innerHTML = 'Dólar Americano'
        currImgDown.src = './assets/estados-unidos (1) 1.png' 
    }

    if (currSelCvtd.value == 'euro') {
        currNameDown.innerHTML = 'Euro'
        currImgDown.src = './assets/Design sem nome 3.png' 
    }

    if (currSelCvtd.value == 'bitcoin') {
        currNameDown.innerHTML = 'Bitcoin'
        currImgDown.src = './assets/bitcoin 1.png' 
    }

    if (currSelCvtd.value == 'libra') {
        currNameDown.innerHTML = 'Libra'
        currImgDown.src = './assets/libra 1.png' 
    }

    convValues()

}
currSelConv.addEventListener('change', changeCurrency)

currSelCvtd.addEventListener('change', changeCurrency)

convButton.addEventListener("click", convValues)


