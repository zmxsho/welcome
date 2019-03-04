const Discord = require('discord.js');
const { Client, Util } = require('discord.js');
const client = new Discord.Client();
const { PREFIX, GOOGLE_API_KEY } = require('./config');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');

const youtube = new YouTube(GOOGLE_API_KEY);

const queue = new Map();


client.on('warn', console.warn);

client.on('error', console.error);

client.on('ready', () => console.log('Yo this ready!'));
client.on('message',async message => {
  if(message.author.bot) return;
client.on('guildMemberAdd', member => {
    var embed = new Discord.RichEmbed()
    .setAuthor(member.user.username, member.user.avatarURL)
    .setThumbnail(member.user.avatarURL)
    .setTitle(`عضو جديد`)
    .setDescription(`Welcome to the server!`)
    .addField(' 👤  انت رقم',`**[ ${member.guild.memberCount} ]**`,true)
    .setColor('Red')
    .setFooter('Legend Welcome', 'https://cdn.discordapp.com/icons/390551815072251904/418fa2788d8115808951c9881ba8f190.jpg')

var channel =member.guild.channels.find('name', '↠join')
if (!channel) return;
channel.send({embed : embed});
});
client.login(process.env.BOT_TOKEN);
