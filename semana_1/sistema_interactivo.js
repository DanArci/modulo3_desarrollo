// Elements of the html
let age_h2 = document.getElementById('age_h2')
let name_h1 = document.getElementById('name_h1')
let msg_p = document.getElementById('msg_p')

// Request user data
let name = prompt('Enter your name: ')
let age = prompt('Enter your age: ')

// This first conditional verify if age is a number
if (!Number.isNaN(age)) {
    age_h2.innerHTML = `Age: ${age}`
} else {
    console.log('Error: Please enter a valid age in numbers.');
    let msg = `Hi ${name}, you have entered an invalid age`
    age_h2.innerHTML = msg
    alert(msg)
}

// This if statement verify if the user is under 18, then shows a msg for the case. 
if (age < 18) {
    let msg = `Hi ${name}, you are under 18. Keep learning and enjoying coding!`
    alert(msg)
    console.log(msg);
    msg_p.innerHTML = msg
} else if (age >= 18) {
    msg = `Hello ${name}, you are of legal age. Get ready for great opportunities in the world of programming!`
    msg_p.innerHTML = msg
} 

// This shows the name on the html
name_h1.innerHTML = name