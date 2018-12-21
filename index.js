// require the discord.js module
const Discord = require('discord.js');

// Grab config file
const config = require('./config.json');
const token = config.token;

// create a new Discord client
const client = new Discord.Client();

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
    console.log('Ready!');
});

// login to Discord with your app's token
client.login(token);

// Listen for commands
client.on('message', message => {
    // Don't reply to yourself
    if (message.author.bot) return;

    // Check for command (!)
    if (message.content.indexOf('!') === 0) {
        
        // Store command
        var text = message.content.substring(1);

        // Now check for the message keyword and run the correct function
        switch(text){
            case "hello":
                sayHello(message);
                break;
            // If the command isn't recognized, give some feedback.
            default:
                message.channel.send("That's not a command!");
        }
    }
});

// First command, but is message global?
function sayHello(message){
    message.channel.send("Hello");
}