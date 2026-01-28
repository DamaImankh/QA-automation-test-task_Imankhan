const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const ask = (query) => new Promise((resolve) => rl.question(query, resolve));

async function main() {
    try {
        // 1. Number Task
        const numInput = await ask('Enter a number: ');
        if (parseFloat(numInput) > 7) {
            console.log("Hello");
        }

        // 2. Name Task
        const nameInput = await ask('Enter a name: ');
        if (nameInput.trim() === "John") {
            console.log("Hello, John");
        } else {
            console.log("There is no such name");
        }

        // 3. Array Task
        const arrayInput = await ask('Enter numbers separated by spaces: ');
        const result = arrayInput
            .trim()
            .split(/\s+/)
            .map(Number)
            .filter(n => !isNaN(n) && n % 3 === 0 && n !== 0);

        console.log("Elements that are multiples of 3:", result.join(', ') || "No matches found");

    } catch (error) {
        console.error("An error occurred:", error);
    } finally {
        rl.close();
    }
}

main();