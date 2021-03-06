var costPrice = document.querySelector("#cost-price");
var stocksQty = document.querySelector("#stocks-qty");
var currentPrice = document.querySelector("#current-price");
var btnCheck = document.querySelector("#btn-check");
var outputDiv = document.querySelector("#show-output");
outputDiv.style.display = "none";



function calculateProfitAndLoss(costprice, stocksqty, currentprice) {
    if (costPrice, stocksqty, currentprice > 0) {
        if (costprice > currentprice) {

            var loss = ((costprice - currentprice) * stocksqty).toFixed(2);
            var lossPercentage = ((loss / costprice) * 100).toFixed(2);
            showOutput(`You Total loss is ${loss} 😞
            And the loss percentage is ${lossPercentage}%`);
            changeBackground("url('/images/loss.gif')");

        } else if (costprice < currentprice) {

            var profit = ((currentprice - costprice) * stocksqty).toFixed(2);
            var profitPercentage = ((profit / costprice) * 100).toFixed(2);
            showOutput(`Your Total profit is ${profit} 🤑
            And the profit percentage is ${profitPercentage}%`);
            changeBackground("url('./images/profit.gif')");
   
        } else if (costprice === currentprice) {

            var investedSum = (costprice * stocksqty).toFixed(2)
            showOutput(`Your Stocks are neither in Loss nor in Profit !
            Your Total portfolio amount is ${investedSum}`);
           
        }
    } 
    else{
        showOutput("Please enter valid amounts in the input fields")
    }

}

btnCheck.addEventListener("click", clickHandler);

function clickHandler(e){
    var initialCost = Number(costPrice.value);
    var stocksPurchased = Number(stocksQty.value);
    var currentCost = Number(currentPrice.value);
    
    calculateProfitAndLoss(initialCost, stocksPurchased, currentCost);
}


function showOutput(text){
    outputDiv.style.display = "block";
    outputDiv.innerText = text;
}

function changeBackground(text){
    document.getElementById("container").style.backgroundImage = text;
    document.getElementById("container").style.backgroundSize = "cover";
    document.getElementById("container").style.backgroundPosition = "center";
}


