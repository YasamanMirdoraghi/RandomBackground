
//random background
let redValue, greenValue, blueValue
let RandomColor = document.querySelector(".title")

setInterval(function () {
    redValue = Math.floor(Math.random() * 256)
    greenValue = Math.floor(Math.random() * 256)
    blueValue = Math.floor(Math.random() * 256)

    RandomColor.innerHTML="Random Background"+
    'rgb(' + redValue + ',' + greenValue + ',' + blueValue + ');'

    document.body.style.backgroundColor = 
 'rgb(' + redValue + ',' + greenValue + ',' + blueValue + ')'
    
}, 700)

