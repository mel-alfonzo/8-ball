var quotes = [ "Maybe", 
                "no",
                "yes"
            ]

function newAnswer() {
    var randNum = Math.floor(Math.random() * (quotes.length))
    document.getElementById('submit').innerHTML = quotes[randNum]
}