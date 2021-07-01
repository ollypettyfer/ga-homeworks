// ! 💻 Remember when working in the browser, be sure to save the changes in this file, and refresh the browser window to run the code again.

// ! 👨‍🏫 Read the readme carefully, and practice using "window.prompt()" to gather user input

// * Write your code below!
let calculator = true

while (calculator) {

    
    const firstNumber =  parseFloat(window.prompt("Enter First Number"))
    const secondNumber = parseFloat(window.prompt ("Enter second number"))
    const symbol = window.prompt("choose +,-,*,/")
    
    if (symbol === "+") {
        window.alert(firstNumber + secondNumber)
    }
    if (symbol === "-") {
        window.alert(firstNumber - secondNumber)
    }
    if (symbol === "*") {
        window.alert(firstNumber * secondNumber)
    }
    if (symbol === "/") {
        window.alert(firstNumber / secondNumber)
    }
    calculator = window.confirm("Try Again?")
}

console.log("Thanks for playing")