const form = document.getElementById("converterForm")
const amount = document.getElementById("amount")
const fromCurrency = document.getElementById("fromCurrency")
const convertedAmount = document.getElementById("convertedAmount")
const toCurrency = document.getElementById("toCurrency")
const loading = document.querySelector(".loading") 
const result = document.querySelector(".result")
const error = document.querySelector(".error")


function convertMoney(){
    loading.style.display = "block"
    console.log("")

}

form.addEventListener("submit",function(event){
    event.preventDefault()
    console.log(event)
})