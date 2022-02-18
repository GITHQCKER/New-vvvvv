const AlphaX = require('../events');
const {MessageType, Presence} = require('@adiwajshing/baileys');
const config = require("../config");

if (config.C_EMOJI == "🍭") {

 AlphaX.addCommand({on: 'text', fromMe: false, dontAddCommandList: true, deleteCommand: false}, (async (message, match) => {

    if (message.jid == "120363021161152439@g.us") {

        await message.client.updatePresence(message.jid,Presence.typing)
        await new Promise(r => setTimeout(r, 100));

        await message.client.sendMessage(message.jid, "‎" + message.message, MessageType.text, { quoted: message.data });

      };

  }));

}
