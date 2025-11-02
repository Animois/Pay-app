document.getElementById("add-btn").addEventListener
("click", function (e){
    e.preventDefault()
    console.log("Add Money Button Clicked")
    const bank = document.getElementById("bank").value
    const accountNumber = document.getElementById
    ("account-number").value
    const ammount = parseInt(document.getElementById
    ("add-ammount").value)
    const pin = document.getElementById
    ("pin-number").value

    const availableBalance = parseInt(document.getElementById
    ("available-balance").innerText)

    console.log(availableBalance)

    const totalBalance = availableBalance + ammount

    document.getElementById("available-balance").
    innerText = totalBalance
})
