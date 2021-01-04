const Discord = require("discord.js");
const {token} = require('./config.json');
const client = new Discord.Client;


const trigger = [
    ["hi", "hii", "hey", "heyy", "hello", "good morning", "morning", "good afternoon", "hola", "allo"],
    ["how are you", "how is life", "how are things", "how have you been"],
    ["what are you doing", "what is going on", "what is up", "what have you been upto"],
    ["how old are you"],
    ["who are you", "are you human", "are you bot", "are you human or bot"],
    ["who created you", "who made you"],
    ["your name please", "your name", "may i know your name", "what is your name", "what call yourself"],
    ["i love you"],
    ["happy", "good", "fun", "wonderful", "fantastic", "cool"],
    ["bad", "bored", "tired"],
    ["tell me story", "tell me joke"],
    ["ah", "yes", "ok", "okay", "nice"],
    ["bye", "good bye", "goodbye", "see you later"],
    ["what should i eat today"],
    ["bro"],
    ["what", "why", "how", "where", "when"],
    ["no", "not sure", "maybe", "no thanks"],
    [""],
    ["haha", "ha", "lol", "hehehe", "funny", "joke"],
    ["youre pretty", "do you know krishma"]
]

const reply = [
    ["Hello!", "Hi!", "Hey!", "Hi there!", "Howdy", "Bonjour!"],
    ["Fine... how are you?", "Pretty well, how are you?", "Fantastic, how are you?", "Gucci  : )"],
    ["Nothing much", "About to go to sleep", "Can you guess?", "I don't know actually"],
    ["I am infinite ∞  : )"],
    ["I am a martian chatbot  : )"],
    ["Rogers  : )"],
    ["I am krmartin"],
    ["I love me too"],
    ["Glad to hear that"],
    ["Why?", "Why? You shouldn't!", "Try watching TV"],
    ["What about?", "Once upon a time..."],
    ["Tell me a story", "Tell me a joke", "Tell me about yourself"],
    ["Bye", "Goodbye", "See you later"],
    ["Burger King's Whopper", "Pizza", "Spaghetti"],
    ["Bro!"],
    ["Great question"],
    ["That's ok","I understand","What do you want to talk about?"],
    ["Please say something :("],
    ["Haha!","Good one!"],
    ["ik  : )", "yeh  : )"]
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
    else sendReplyCommand(receivedMessage);
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
    return replyMessage
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

function sendReplyCommand(receivedMessage){

    if (receivedMessage.content.toLowerCase() == "are you dumb?"){
        receivedMessage.channel.send("yeh  : )");
    } else if (receivedMessage.content.toLowerCase() == "69" || receivedMessage.content.toLowerCase() == "420") {
        receivedMessage.channel.send("Nice");
    } else if (receivedMessage.content.toLowerCase() == "what is the meaning of life?") {
        receivedMessage.channel.send("42  : )");
    } else if (receivedMessage.content.toLowerCase() == "food night") {
        receivedMessage.channel.send("Food night!");
    } else {
        replyMessage = textCommand(receivedMessage)
        receivedMessage.channel.send(replyMessage);
    }
}


client.login(token);
