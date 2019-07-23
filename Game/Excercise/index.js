const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

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

function askQuestion(storyObject) {

    rl.question(storyObject.q, answer => {
        if ( story.answers == 'no' ){
            console.log(storyObject.no); // logs "Alright then. Enjoy your day!"
            rl.close(); // ends game
        } else if ( story.answers == 'yes' ) {
            console.log(storyObject.yes.q); //logs "There's a scary wizard! He asks you a tough question. What's 1+1?",
            if (story.answers == 'left') {
                console.log(storyObject.q); // logs "There's a scary wizard! He asks you a tough question. What's 1+1?",
            } else if (story.answers == 'right') {
                console.log(storyObject.right); // logs "This was not the right choice. Goodbye!"
                rl.close(); // ends game
            } if (story.answers == '2') {
                console.log(storyObject.answers); // logs "congratulations!"
            }
        }
        askQuestion(storyObject);
    });
}

askQuestion(story);


// answer => {
//            if (typeof storyObject.answers[answer] == 'object') {
//                askQuestion(storyObject.answers[answer]);
//            } else if (typeof storyObject.answers[answer] == 'string') {
//                console.log(storyObject.answers[answer]);
//                rl.close();
//            } else {
//                console.log('Bad user!');
//                askQuestion(storyObject);
//            }
