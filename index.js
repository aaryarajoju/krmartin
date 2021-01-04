const Discord = require("discord.js");
const {token} = require('./config.json');
const client = new Discord.Client;


const trigger = [
    /*0*/["hi", "hii", "hey", "heyy", "hello", "good morning", "morning", "good afternoon"],
    /*1*/["how are you", "how is life", "how are things"],
    /*2*/["what are you doing", "what is going on", "what is up"],
    /*3*/["how old are you"],
    /*4*/["who are you", "are you human", "are you bot", "are you human or bot"],
    /*5*/["who created you", "who made you"],
    /*6*/["your name please", "your name", "may i know your name", "what is your name", "what call yourself"],
    /*7*/["i love you"],
    /*8*/["happy", "good", "fun", "wonderful", "fantastic", "cool"],
    /*9*/["bad", "bored", "tired"],
    /*10*/["help me", "tell me story", "tell me joke"],
    /*11*/["ah", "yes", "ok", "okay", "nice"],
    /*12*/["bye", "good bye", "goodbye", "see you later"],
    /*13*/["what should i eat today"],
    /*14*/["bro"],
    /*15*/["what", "why", "how", "where", "when"],
    /*16*/["no","not sure","maybe","no thanks"],
    /*17*/[""],
    /*18*/["haha","ha","lol","hehe","funny","joke"],
    /*19*/["youre pretty", "you know krishma"]
]

const reply = [
    /*0*/["Hello!", "Hi!", "Hey!", "Hi there!", "Howdy"],
    /*1*/["Fine... how are you?", "Pretty well, how are you?", "Fantastic, how are you?", "Gucci  : )"],
    /*2*/["Nothing much", "About to go to sleep", "Can you guess?", "I don't know actually"],
    /*3*/["I am infinite"],
    /*4*/["I am a martian chatbot"],
    /*5*/["Rogers  : )"],
    /*6*/["I am krmartin"],
    /*7*/["I love me too", "Me too"],
    /*8*/["Have you ever felt bad?", "Glad to hear it"],
    /*9*/["Why?", "Why? You shouldn't!", "Try watching TV"],
    /*10*/["What about?", "Once upon a time..."],
    /*11*/["Tell me a story", "Tell me a joke", "Tell me about yourself"],
    /*12*/["Bye", "Goodbye", "See you later"],
    /*13*/["Sushi", "Pizza", "Spaghetti"],
    /*14*/["Bro!"],
    /*15*/["Great question"],
    /*16*/["That's ok","I understand","What do you want to talk about?"],
    /*17*/["Please say something :("],
    /*18*/["Haha!","Good one!"],
    /*19*/["ik  : )"]
]

const alternative = [
    "ig",
    "wow",
    "wow lol",
    "ikr",
    "anyways,",
    "I don't understand, but okay ig",
    "voot?",
    "damnnnn",
    "forget it",
    "well",
    "understandable ig"
]


client.once('ready', () => {
    console.log("The bot is online! Connected as " + client.user.tag);
    client.user.setActivity("not you", {type: "LISTENING"});
   });
client.once('reconnecting', () => {
    console.log("The bot is reconnecting! Reconnecting as " + client.user.tag);
   });
client.once('disconnect', () => {
    console.log("The bot is disconnected!");
   });

client.on('message', (receivedMessage) => {
    if (receivedMessage.author == client.user) return;
    else textCommand(receivedMessage);
})


function textCommand(receivedMessage){

    let rawText = receivedMessage.content.toLowerCase();

    let text = rawText.replace(/[^\w\s\d]/gi, "");
    text = text
        .replace(/ a /g, " ")
        .replace(/i feel /g, "")
        .replace(/whats/g, "what is")
        .replace(/please /g, "")
        .replace(/ please/g, "");

    let replyMessage = replyTextCommand(trigger, reply, alternative, text);
    sendReplyCommand(replyMessage, receivedMessage);
}

function replyTextCommand(triggerArray, replyArray, alternativeArray, text) {

    let item;

    for (let x = 0; x < triggerArray.length; x++) {
      for (let y = 0; y < replyArray.length; y++) {
        if (triggerArray[x][y] == text) {
            items = replyArray[x];
            item = items[Math.floor(Math.random() * items.length)];
        }
      }
    }

    if (item == undefined){
        item = alternativeArray[Math.floor(Math.random() * alternativeArray.length)];
    }

    return item;
}

function sendReplyCommand(replyMessage, receivedMessage){

    if (receivedMessage.content.toLowerCase() == "are you dumb?"){
        receivedMessage.channel.send("yeh  : )");
    } else if (receivedMessage.content.toLowerCase() == "food night") {
        receivedMessage.channel.send("Food night!");
    } else {
        receivedMessage.channel.send(replyMessage);
    }
}


client.login(token);
