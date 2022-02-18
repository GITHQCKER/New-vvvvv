const AlphaX = require('../events');
const {MessageType, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

AlphaX.addCommand({pattern:'axiosmp4 ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

var mp4file = await axios.get(match[1], { responseType: "arraybuffer" });

await message.client.sendMessage(message.jid, Buffer.from(mp4file.data), MessageType.video, { mimetype: Mimetype.mp4, quoted: message.data, caption: "*UviYaBro - axios video downloader* 🚀" });

}));
