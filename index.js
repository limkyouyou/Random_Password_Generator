const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]; // 0. declare an array variable with const and items

let customCharacters = [] // 0. declare an empty array variable with let where characters items specified by the user will be assigned
let randomCharacterNumbers = [] // 0. declare an empty array variable with let where random specified characters items' index number will be assigned

let pass1El = document.getElementById("pass1-el") // 0. declare a variable linked to an element by id where it is used to display the first password
let pass2El = document.getElementById("pass2-el") // 0. declare a variable linked to an element by id where it is used to display the second password
let lengthSelect = document.getElementById("length-el") // 0. declare a variable linked to an element by id where chracter count value will be referenced
lengthSelect.value = "15" // 0. define the initial value of character count to 15
let symbolSelect = document.getElementById("symbols") // 0. declare a variable linked to an element by id where inclusion of symbols to the password will be referenced
symbolSelect.value = "1" // 0. define the initial value of symbols inclusion
let numberSelect = document.getElementById("numbers") // 0. declare a variable linked to an element by id where inclusion of numbers to the password will be referenced
numberSelect.value = "1" // define the initial value of number inclusion

function getRandomNumber () { // 6. declare a function with a name
    for (let i = 0; i < lengthSelect.value * 2; i++) { // declare for loop starting from 0 to the double of the character count value set by the user, and increment i value by 1 for every loop, length is doubled so that it can be divided in to two passwords at the end of the function
        let randomNumber = Math.floor(Math.random() * customCharacters.length) // declare a variable which generates one random whole number from the customCharacters length
        randomCharacterNumbers.push(randomNumber) // push the above variable's value to the randomCharacterNumber array
    }
}

function generate() { // 1. declare a function with a name that is linked to onclick event in HTML
    customCharacters = [] // 2. define the initial customCharacters array to be empty so that the exisitng value won't be in effect the function when the function is called again
    randomCharacterNumbers = [] // 2. define the initial randomCharacterNumbers array to be empty sp that the existing value won't be in effect when the function is called again
    pass1El.textContent = "" // 2. define the initial pass1El text content to be empty so that the exisiting content won't be in effect when the function is called again
    pass2El.textContent = "" // 2. define the initial pass2El text content to be empty so that the exisiting content won't be in effect when the function is called again
    if (symbolSelect.value === "2" && numberSelect.value === "2") { // 3. declare if/else if statement for a condition defined by the user
        customCharacters = characters.slice(0, 52) // 4. define the value of customCharacter array according to the user by using slice on the character array
    } else if (symbolSelect.value === "1" && numberSelect.value === "2") {
        customCharacters = characters.slice(0, 52).concat(characters.slice(62, 91))
    } else if (symbolSelect.value === "2" && numberSelect.value === "1") {
        customCharacters = characters.slice(0, 62)
    } else {
        customCharacters = characters
    }
    
    getRandomNumber () // 5. call the getRandomNumber function
    
    for (let i = 0; i < randomCharacterNumbers.length / 2; i++) { // 7. declare for loop starting from 0 to the half of the length of randomCharacterNumbers array and increment i by 1 for every loop
        pass1El.textContent += customCharacters[randomCharacterNumbers[i]]
    } // 8. add an item from customCharacter indexed by randomCharacterNumbers indexed by i value to the pass1El text content
    for (let i = randomCharacterNumbers.length / 2; i < randomCharacterNumbers.length; i++) { // 9. declare for loop starting from half the length of randomCharacterNumbers array to the whole length of randomCharacterNumbers array, incrementing i by 1 for every loop
        pass2El.textContent += customCharacters[randomCharacterNumbers[i]]
    } // 10. add an item from customCharacter indexed by randomCharacterNumbers indexed by i value to the pass2El text content
}

function copy1() { // 11. declare a function with a name
    let copyText = pass1El.textContent // 12. declare a new variable with name and set its value to be pass1El text content

    navigator.clipboard.writeText(copyText).then(() => { // 13. copy the copyText value to the user's device clipboard
        alert("First password copied") // 14. send alert to the user with a string value
    })
}
function copy2() {
    let copyText = pass2El.textContent

    navigator.clipboard.writeText(copyText).then(() => {
        alert("Second password copied")
    })
}