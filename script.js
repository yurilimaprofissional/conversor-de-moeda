const form = document.getElementById("converterForm")
const amount = document.getElementById("amount")
const fromCurrency = document.getElementById("fromCurrency")
const convertedAmount = document.getElementById("convertedAmount")
const toCurrency = document.getElementById("toCurrency")
const loading = document.querySelector(".loading") 
const result = document.querySelector(".result")
const error = document.querySelector(".error")

const API_URL = "https://api.exchangerate-api.com/v4/latest/"

function convertMoney(){

    loading.style.display = "block"
    console.log("Funcionou")

}

form.addEventListener("submit",function(event){
    event.preventDefault()
    convertMoney()
    console.log(event)
})