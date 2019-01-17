//////////////////////////////////////////////
//
// MATCH MAKER BOT
// CREATED BY ATTICUS ZAMBRANA (MrBeefSteak)
//
// HELP PEOPLE IN RYTHEM, FIND THE PERFECT MATCH!
//
//////////////////////////////////////////////

// Here is code that I want to save for later
// if(!message.member.roles.some(r=>["Owner", "Admin", "Manager", "Moderator"].includes(r.name)) ) {

var runLogin = true;

var AdminsOnly = true;
var LimitationReason = "Bot still being coded! :face_palm:";

var VERSION = "0.2";
const LOGIN = "NTA5MDM4MDg1NzI4ODk0OTc4.DyA51Q.bXsym83U-ggqtJlxJ61KoLy7HJY";

console.log("Now loading Match maker bot - Created by Atticus Zambrana");

console.log("Loading Discord.js...");
const Discord = require("discord.js");
console.log("Getting Discord.js Ready...");
const client = new Discord.Client();

var runLogin = true;

// PLAYING, WATCHING, LISTENING
var activityType = "WATCHING";
var activityName = "YouTube";

console.log("Logging in to Official Discord Servers...");
if(runLogin == true) {
  client.login(LOGIN);
  console.log("");
  console.log("Welcome to Atticus Zambrana's ");
  console.log(" __   __  _______  _______  _______  __   __    __   __  _______  ___   _  _______  ______   \n|  |_|  ||   _   ||       ||       ||  | |  |  |  |_|  ||   _   ||   | | ||       ||    _ |  \n|       ||  |_|  ||_     _||       ||  |_|  |  |       ||  |_|  ||   |_| ||    ___||   | ||  \n|       ||       |  |   |  |       ||       |  |       ||       ||      _||   |___ |   |_||_ \n|       ||       |  |   |  |      _||       |  |       ||       ||     |_ |    ___||    __  |\n| ||_|| ||   _   |  |   |  |     |_ |   _   |  | ||_|| ||   _   ||    _  ||   |___ |   |  | |\n|_|   |_||__| |__|  |___|  |_______||__| |__|  |_|   |_||__| |__||___| |_||_______||___|  |_|\n");
}

// General Guild Code
client.on("guildCreate", guild => {
  // This event triggers when the bot joins a guild.
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setActivity(activityName, { type: activityType });
});

client.on("guildDelete", guild => {
  // this event triggers when the bot is removed from a guild.
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setActivity(activityName, { type: activityType });
});

client.on("message", async message => {
	client.user.setActivity(activityName, { type: activityType });
	// Message Code (for any messages that get passed through)
	// use ! for all command prefixes
	if(message.content.indexOf("!") !== 0) return;
	
	const args = message.content.slice(1).trim().split(/ +/g);
	const command = args.shift().toLowerCase();
	
	// Check if the bot is limited to only Admins
	if(AdminsOnly) {
		if(!message.member.roles.some(r=>["Administrator"].includes(r.name)) ) {
			console.log(`[SYSTEM] ${message.author.username} just tried to run ${command} however it was blocked due to a limitation in place!`);
			message.reply("Sorry, but at the moment in time, all commands are limited to Administrators only! This limitation has been set because: " + LimitationReason);
			return;
		}
	}
	
	// Help command
	if(command === "help") {
		console.log(`[USER ACCOUNTS] ${message.author.username} has run command !help`);
		message.channel.send(` === MATCH MAKER COMMAND LIST === `);
		message.channel.send(` - !ping = Get ping of your client and Discord API`);
		message.channel.send(` - !info = Show information about the Match Maker bot`);
		message.channel.send(` - !admire <@User> = Admire another user`);
		//message.channel.send(` - !matchme = Let Match Maker find you the perfect match!`);
	}
	
	// The Ping command
	if(command === "ping") {
		const m = await message.channel.send("Ping?");
		console.log(`[USER ACCOUNTS] ${message.author.username} has run command !ping`);
		m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms = API Latency is ${Math.round(client.ping)}ms`);
	}
	
	// Info command
	if(command === "info") {
		console.log(`[USER ACCOUNTS] ${message.author.username} has run command !info`);
		message.channel.send("Hi! I am the Match Maker bot, coded by MrBeefSteak! I am currently running version " + VERSION);
	}
	
	// Info command
	if(command === "admire") {
		console.log(`[USER ACCOUNTS] ${message.author.username} has run command !admire`);
		let member = message.mentions.members.first();
		if(!member) {
			return message.reply("Please mention a valid member of this server");
		}
		message.delete();
		console.log(`[SECRET] ${message.author.username} has a secret admiration on ${member.user.username}!`);
		member.send(`Hey! I was just told that you have a new secret admirer :wink: `);
	}
	
	// TESTING!!! Basic Match command
	/*
	if(command === "matchme") {
		console.log(`[USER ACCOUNTS] ${message.author.username} has run command !matchme`);
		
		var user1 = message.guild.members.random().user;
		var user2 = message.guild.members.random().user;
		var user3 = message.guild.members.random().user;
		var user4 = message.guild.members.random().user;
		var user5 = message.guild.members.random().user;
		
		
		console.log(message.guild.members.random().user.username);
	}
	*/
});

// Match Maker API
// Created by Atticus Zambrana

// TODO: Code an api, lol