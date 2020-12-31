const Discord = require("discord.js");
const {token} = require('./config.json');
const client = new Discord.Client;

var counter = 0;


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
    
    console.log(receivedMessage.content);
    processCommand(receivedMessage);
})


function processCommand(receivedMessage){

    var num = counter % 20;
    console.log(counter);
    console.log(num);

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


client.login(token);
