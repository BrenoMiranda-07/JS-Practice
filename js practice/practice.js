//GUESSING NUMBER GAME 

let maximum = parseInt(prompt("Enter the maximum number"));
while (!maximum) {
    maximum = parseInt(prompt("Enter a Valid Number"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;

let guess = parseInt(prompt("Enter Your First Guess"));
let attempts = 1;

while (parseInt(guess) !== targetNum) {
    if (guess === 'q')
        break;
    attempts++;
    if (guess > targetNum) {
        guess = prompt("Too high! Enter A New Guess");
    } else {
        guess = prompt("Too low! Enter A New Guess");
    }
}
if (guess === 'q') {
    console.log("OK, u quit");
}
console.log(`You Got It! It Took You ${attempts} Guesses`);



//TO-DO LIST PROJECT

//NEW - ADD A TO-DO
//LIST - LIST ALL TOOLS
//DELETE - REMOVE SPECIFIC TO-DO
//QUIT - QUIT APP

let input = prompt('What would you like to do?');
const todos = ['collect eggs', 'clean cat']

while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log('*************');
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('*************');
    }
    else if (input === 'new') {
        const newTodo = prompt('Ok, What is the new todo?');
        todos.push(newTodo);
        console.log(`${newTodo} added to the list`);
    }
    else if (input = 'delete') {
        const index = parseInt(prompt('Ok, enter an index to delete: '));
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);
            console.log(`Ok, deleted ${deleted[0]}`);
        } else {
            console.log('Unkown Index');
        }
    }
    input = prompt('What would you like to do?');
}
console.log('OKAY, QUIT APP');


//COLOR CHANGER RANDOM PROJECT
const heading = document.querySelector('h1');
const btn = document.querySelector('button');
btn.addEventListener('click', function () {
    const color = randColor();
    document.body.style.backgroundColor = color;
    heading.innerText = color;
})

const randColor = function () {
    const r = Math.floor(Math.random() * 255) + 1;
    const g = Math.floor(Math.random() * 255) + 1;
    const b = Math.floor(Math.random() * 255) + 1;
    return `rgb(${r}, ${g}, ${b})`;
}
