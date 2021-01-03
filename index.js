const Discord = require("discord.js");
const {token} = require('./config.json');
const client = new Discord.Client;

// global variables
const trigger = [
    ["hi", "hey", "hello"],
    ["how are you", "how are things"],
    ["what is going on", "what is up"],
    ["happy", "good", "well", "fantastic", "cool"],
    ["bad", "bored", "tired", "sad"],
    ["tell me story", "tell me joke"],
    ["thanks", "thank you"],
    ["bye", "good bye", "goodbye"]
];
    
const reply = [
    ["Hello!", "Hi!", "Hey!", "Hi there!"], 
    ["Fine... how are you?", "Pretty well, how are you?", "Fantastic, how are you?"],
    ["Nothing much", "Exciting things!"],
    ["Glad to hear it"],
    ["Why?", "Cheer up buddy"],
    ["What about?", "Once upon a time..."],
    ["You're welcome", "No problem"],
    ["Goodbye", "See you later"],
];

const alternative = [
    "Same",
    "Go on...",
    "Try again",
    "I'm listening...",
    "Bro...",
    "What?"
];



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
    } else {
        receivedMessage.channel.send(replyMessage);
    }
}


client.login(token);
