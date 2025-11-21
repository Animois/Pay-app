const validPin = 1234

// Add Money Feature
document.getElementById("add-btn").addEventListener
("click", function (e){
    e.preventDefault()
    console.log("Add Money Button Clicked")
    const bank = document.getElementById("bank").value
    const accountNumber = document.getElementById
    ("account-number").value
    const ammount = parseInt(document.getElementById
    ("add-ammount").value)
    const pin = parseInt(document.getElementById
    ("pin-number").value)

    const availableBalance = parseInt(document.getElementById
    ("available-balance").innerText)

    console.log(availableBalance)

    if(accountNumber.length !== 11){
        alert("Account Number must be 11 digits")
        return;
    }

    if(pin !== validPin){
        alert("Invalid Pin")
        return;
    }

    const totalBalance = availableBalance + ammount

    document.getElementById("available-balance").
    innerText = totalBalance
})

// Cash Out Feature

document.getElementById("withdraw-btn").addEventListener("click",
    function(e){
        e.preventDefault()
        
        const amount = parseInt(document.getElementById("withdraw-amount").
        value)

        const availableBalance = parseInt(document.getElementById
            ("available-balance").innerText)

        const totalNewAvailableBalance = availableBalance - amount
        
        document.getElementById("available-balance").innerText =
        totalNewAvailableBalance
    }
)

// toggling feature

document.getElementById("add-btn").addEventListener("click", function(){
    document.getElementById("cash-out-parent").style.display = "none"
    document.getElementById("add-money-parent").style.display = "block"
})

document.getElementById("cash-out-btn").addEventListener("click", function(){
    document.getElementById("add-money-parent").style.display = "none"
    document.getElementById("cash-out-parent").style.display = "block"
})