const Discord = require("discord.js");
const {token} = require('./config.json');
const client = new Discord.Client;

// global variables
/* var counter = 0; */
const trigger = [
    //0 
    ["hi", "hey", "hello"],
    //1
    ["how are you", "how are things"],
    //2
    ["what is going on", "what is up"],
    //3
    ["happy", "good", "well", "fantastic", "cool"],
    //4
    ["bad", "bored", "tired", "sad"],
    //5
    ["tell me story", "tell me joke"],
    //6
    ["thanks", "thank you"],
    //7
    ["bye", "good bye", "goodbye"]
];
    
const reply = [
    //0 
    ["Hello!", "Hi!", "Hey!", "Hi there!"], 
    //1
    ["Fine... how are you?", "Pretty well, how are you?", "Fantastic, how are you?"],
    //2
    ["Nothing much", "Exciting things!"],
    //3
    ["Glad to hear it"],
    //4
    ["Why?", "Cheer up buddy"],
    //5
    ["What about?", "Once upon a time..."],
    //6
    ["You're welcome", "No problem"],
    //7
    ["Goodbye", "See you later"],
];

const alternative = [
    "Same",
    "Go on...",
    "Try again",
    "I'm listening...",
    "Bro..."
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

    // remove this later on
    console0.log(text, rawText);

}


/*
function processCommand(receivedMessage){

    var num = counter % 23;

    switch(num){

        case 0:
            counter = 1;
            messageCommand0(receivedMessage);
            break;

        case 1:
            counter++;
            messageCommand1(receivedMessage);
            break;
        
        case 2:
            counter++;
            messageCommand2(receivedMessage);
            break;

        case 3:
            counter++;
            messageCommand3(receivedMessage);
            break;

        case 4:
            counter++;
            messageCommand4(receivedMessage);
            break;
        
        case 5:
            counter++;
            messageCommand5(receivedMessage);
            break;

        case 6:
            counter++;
            messageCommand6(receivedMessage);
            break;

        case 7:
            counter++;
            messageCommand7(receivedMessage);
            break;
        
        case 8:
            counter++;
            messageCommand8(receivedMessage);
            break;

        case 9:
            counter++;
            messageCommand9(receivedMessage);
            break;

        case 10:
            counter++;
            messageCommand10(receivedMessage);
            break;

        case 11:
            counter++;
            messageCommand11(receivedMessage);
            break;
        
        case 12:
            counter++;
            messageCommand12(receivedMessage);
            break;

        case 13:
            counter++;
            messageCommand13(receivedMessage);
            break;

        case 14:
            counter++;
            messageCommand14(receivedMessage);
            break;
        
        case 15:
            counter++;
            messageCommand15(receivedMessage);
            break;

        case 16:
            counter++;
            messageCommand16(receivedMessage);
            break;

        case 17:
            counter++;
            messageCommand17(receivedMessage);
            break;
        
        case 18:
            counter++;
            messageCommand18(receivedMessage);
            break;

        case 19:
            counter++;
            messageCommand19(receivedMessage);
            break;

        case 20:
            counter++;
            messageCommand20(receivedMessage);
            break;
        
        case 21:
            counter++;
            messageCommand21(receivedMessage);
            break;

        case 22:
            counter++;
            messageCommand22(receivedMessage);
            break;
    }
    num = 0;
}

function messageCommand0(receivedMessage){
    receivedMessage.channel.send('ig');
}

function messageCommand1(receivedMessage){
    receivedMessage.channel.send('lol');
}

function messageCommand2(receivedMessage){
    receivedMessage.channel.send('wow');
}

function messageCommand3(receivedMessage){
    receivedMessage.channel.send('ikr');
}

function messageCommand4(receivedMessage){
    receivedMessage.channel.send('hooman!');
}

function messageCommand5(receivedMessage){
    receivedMessage.channel.send('ic');
}

function messageCommand6(receivedMessage){
    receivedMessage.channel.send('understable ig');
}

function messageCommand7(receivedMessage){
    receivedMessage.channel.send('well');
}

function messageCommand8(receivedMessage){
    receivedMessage.channel.send('stay holy');
}

function messageCommand9(receivedMessage){
    receivedMessage.channel.send('anyways');
}

function messageCommand10(receivedMessage){
    receivedMessage.channel.send('damnnnn');
}

function messageCommand11(receivedMessage){
    receivedMessage.channel.send('**speechless face**');
}

function messageCommand12(receivedMessage){
    receivedMessage.channel.send('forget it');
}

function messageCommand13(receivedMessage){
    receivedMessage.channel.send('but it\'s okay ig');
}

function messageCommand14(receivedMessage){
    receivedMessage.channel.send('coolcool');
}

function messageCommand15(receivedMessage){
    receivedMessage.channel.send(': )');
}

function messageCommand16(receivedMessage){
    receivedMessage.channel.send('wow lol');
}

function messageCommand17(receivedMessage){
    receivedMessage.channel.send('very good ⛧');
}

function messageCommand18(receivedMessage){
    receivedMessage.channel.send('-_-');
}

function messageCommand19(receivedMessage){
    receivedMessage.channel.send('food night!');
}

function messageCommand20(receivedMessage){
    receivedMessage.channel.send('iq = ∞');
}

function messageCommand21(receivedMessage){
    receivedMessage.channel.send('mind = blown');
}

function messageCommand22(receivedMessage){
    receivedMessage.channel.send('voot?');
}
*/


client.login(token);
