import inquirer from 'inquirer';
async function calculate() {
    let answer = await inquirer.prompt([
        {
            name: "num1",
            type: "number",
            message: "Select your first number"
        },
        {
            name: "num2",
            type: "number",
            message: "Select your second number"
        },
        {
            name: "operator",
            type: "list",
            choices: [
                { name: " Addition ➕", value: "addition" },
                { name: " Subtraction ➖", value: "subtraction" },
                { name: " Multiplication ✖️", value: "multiplication" },
                { name: " Division ➗", value: "division" },
                { name: " Percentage %", value: "percentage" }
            ],
            message: "Select your operator"
        }
    ]);
    const { num1, num2, operator } = answer;
    if (num1 !== undefined && num2 !== undefined && operator !== undefined) {
        let result = 0;
        let resultString = "Result: ";
        if (operator === "addition") {
            result = num1 + num2;
            resultString += result;
        }
        else if (operator === "subtraction") {
            result = num1 - num2;
            resultString += result;
        }
        else if (operator === "multiplication") {
            result = num1 * num2;
            resultString += result;
        }
        else if (operator === "division") {
            result = num1 / num2;
            resultString += result;
        }
        else if (operator === "percentage") {
            result = (num1 * 100) / num2;
            resultString += result + "%"; // Calculate the percentage of num1 relative to num2
        }
        console.log(`Great your result is:   ${resultString}`); // Moved console.log outside the if-else block to ensure it's executed in all cases
    }
    else {
        console.log("Oops! Enter valid numbers and select operator.");
    }
}
calculate();
