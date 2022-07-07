//pseduo Code

// need the value that is in celsius

//convert from selseeyus to farenheight

//show it

document.querySelector('#yell').addEventListener('click', convert)

function convert() {
    let temp = document.querySelector('#cel').value
    temp = temp * 9/5 + 32
    document.querySelector('#placeToYell').innerText = temp
    
}



