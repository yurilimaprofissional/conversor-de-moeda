let form = document.getElementById("converterForm")
const amount = document.getElementById("amount")
const fromCurrency = document.getElementById("fromCurrency")
const converteAmount = document.getElementById("converteAmount")
const toCurrency = document.getElementById("toCurrency")
const loading = document.querySelector(".loading") 
const result = document.querySelector(".result")

function convertMoney(){
    console.log("")

}

form.addEventListener("submit",function(event){
    event.preventDefault()
    console.log(event)
})