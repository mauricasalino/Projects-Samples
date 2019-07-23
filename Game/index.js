const readline = require('readline');

const chalk = require('chalk');

//console.log(chalk.cyan('I am cyan'));
// an interface in the backend is an option
// with different properties and methods on it
// that will allow us to do things
// in this case, "do things" means print words
// to the Terminal, and receive input from the user
// that the user typed in the Terminal

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// rl.question('is it Friday?????', (answer) => {
//     console.log('answer I received from user', answer);
//     // TODO: Log the answer in a database
//     rl.close();
// });

// let conversation = {
//     q: 'is it Friday?????',
//     answers: {
//         'yes': 'ok good to know'
//     }
// };

var story = {
    q: "Welcome to The Land Of Wizards! Would you like to play?",
    answers: {
        yes: {
            q: "You are alone in a dark forest and facing a fork in the road. Which direction do you turn?",
            answers: {
                left: {
                    q: "There's a scary wizard! He asks you a tough question. What's 1+1?",
                    answers: {
                        "2": "congratulations!"
                    }
                },
                right: "This was not the right choice. Goodbye!"
            }
        },
        no: "Alright then. Enjoy your day!"
    }
};

function askQuestion(convoObject) {

    rl.question(convoObject.q, answer => {
        //console.log('answer: ', answer);
        //console.log('convoObject.answers: ', convoObject.answers[answer]);
        // if convoObject.asnwers[ answer ]
        // is a string or object, then the user
        // gave me a valid answer
        // if convoObject.answers[answer]
        // is undefined, the user did not give
        // a valid answer
        if (convoObject.answers[answer]) {
            console.log('ok good to know');
            rl.close();
        } else {
            console.log('awwwww');
            askQuestion();
        }
    });
}

askQuestion(story);
