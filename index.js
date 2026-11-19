// archivo index.js
const {Client, Events} = require('discord.js');

// crear nuevo cliente de discord
const client = new Client({
  intents: 3276799
});

// creando nuestro primer evento
client.on(Events.ClientReady, async () => {
    console.log(`Conectado como ${client.user.username}`)
});

// respuestas a mensajes
client.on(Events.MessageCreate, async (message) => {
    
    if(message.author.bot) return; // si el autor del mensaje es un bot nos retiramos
    if(!message.content.startsWith('-')) return; // si el contenido del mensaje NO comienza por !

    const args = message.content.slice(1).split(' ')[0] // el contenido del mensaje menos 1 caracter (-)

    // text command handler
    try{
        const command = require(`./commands/${args}`);
        command.run(message);

    } catch (error){
        console.log(`Ha ocurrido un error al utilizar el comando -${args}`, error.message);
    }


})

// Conectar el bot
client.login("MTMzMzYxNzEzNzUwNzUwNDE0OA.GbleiI.I8YyOfIcvmiT20jx5JsHn1uE_wktvWwiXW4ypU");
