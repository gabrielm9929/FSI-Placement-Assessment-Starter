// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "Gabriel A Mejia" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle
let gbtotal = document.getElementById('qty-gb')
let cctotal = document.getElementById('qty-cc')
let sugartotal = document.getElementById('qty-sugar')
let total = document.getElementById('qty-total')
let img1 = document.getElementById('first')
let img2 = document.getElementById('second')
let img3 = document.getElementById('third')

// selecting the element with an id of credit
const credit = document.querySelector('#credit')
// selecting the element with an id of add-gb
const gbPlusBtn = document.querySelector('#add-gb')

// Code to update name display
credit.textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies
gbPlusBtn.addEventListener('click', function() {
// HINT: You can delete this console.log after you no longer need it!
console.log('Gingerbread + button was clicked!')

// TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked

})

document.getElementById('add-gb').addEventListener('click', function() {   
    gb++
        gbtotal.textContent=gb 
        total.textContent=sugar+gb+cc
        console.log('higb')
})

/////// code to remove gb
document.getElementById('minus-gb').addEventListener('click', function() {
    if(gb > 0)
    gb--;
    else;
    gbtotal.textContent=gb
    total.textContent=sugar+gb+cc
    console.log('byegb')
    if(gb<0)
    gbtotal.textContent=0;
    if(gb+cc+sugar<0)
    total.textContent=0;
})


////// code to add cc
document.getElementById('add-cc').addEventListener('click', function() {
    cc++
    cctotal.textContent=cc
    total.textContent=sugar+gb+cc
    console.log('hicc')
})

