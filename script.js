const form = document.getElementById("converterForm")
const amount = document.getElementById("amount")
const fromCurrency = document.getElementById("fromCurrency")
const convertedAmount = document.getElementById("convertedAmount")
const toCurrency = document.getElementById("toCurrency")
const loading = document.querySelector(".loading") 
const result = document.querySelector(".result")
const error = document.querySelector(".error")

const API_URL = "https://api.exchangerate-api.com/v4/latest/"

async function convertMoney(){

    loading.style.display = "block"
    

    try {
        const response = await fetch(API_URL + fromCurrency.value)
        const data = await response.json()

        console.log(data)


    }

    catch(error) {
        alert("Falha no Servidor")
    }

}

form.addEventListener("submit",function(event){
    event.preventDefault()
    convertMoney()
    
})