const AlphaX = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const Axios = require('axios');
const fs = require('fs');
let WType = Config.WORKTYPE == 'public' ? false : true

const Language = require('../language');
const Lang = Language.getString('system_stats');

let msg = ` ╭──────────────────╮
${Config.C_EMOJI} *Ａｌｐｈａ-Ｘ-WA-BOT* ${Config.D_EMOJI}
 ╭──────────────────╯
 │ 🗿 *Dᴇᴠᴇʟᴏᴘᴇʀs*
 │ *• Sʟ-Aʟᴘʜᴀ-X*
 │ *• HᴀɴsᴀᴋᴀBʀᴏ*
 │
 │ *📈 Vᴇʀsɪᴏɴ️*
 │ ➲ _${Config.VERSION}_
 │
 │ *👾 Bʀᴀɴᴄʜ 🛠️*
 │ ➲ _${Config.BRANCH}_
 │
 │ *💸 Tᴇʟᴇɢʀᴀᴍ Gʀᴏᴜᴘ*
 │ ➲ _https://t.me/AlphaX_SUPPORT_
 │
 │ *🔌 Pʟᴜɢɪɴ Cʜᴀɴɴᴇʟ*
 │ ➲ _https://t.me/AlphaX_plugin_
 │
 │ *📂 Wʜᴀᴛsᴀᴘᴘ Gʀᴏᴜᴘ*
 │ ➲ _${Config.GROUP}_
 ╰──────────────────╯
`


AlphaX.addCommand({pattern: `${Config.AM_KEY} ?(.*)`, fromMe: WType, desc: Lang.ALIVE_DESC}, (async (message, match) => {

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8');

        if (Config.ALIVEMSG == 'default') {

        const ppurl = await message.client.getProfilePicture(message.jid)
        let PIC
        try { PIC = await Axios.get(`${Config.A_PIC}`, {responseType: 'arraybuffer'}) } catch { PIC = await Axios.get(ppurl, {responseType : 'arraybuffer'}) }

    const media = await message.client.prepareMessage(message.jid, Buffer.from(PIC.data) , MessageType.image, { thumbnail: Buffer.from(PIC.data) })

    const buttons = [
    {
      buttonId: "-sysd",
      buttonText: { displayText: "🔐 sʏsᴛᴇᴍ sᴛᴀᴛᴜs \n\n" + child },
      type: 1
    }
      ];

    const buttonMessage = {
        contentText: "‎" ,
        footerText: msg ,
        buttons: buttons,
        headerType: 4,
        imageMessage: media.message.imageMessage    
    };

    await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage, { quoted: message.data } );

        }
        else {
            var payload = Config.ALIVEMSG
            const status = await message.client.getStatus()

            if (payload.includes('{pp}')) {

                const ppUrl = await message.client.getProfilePicture() 
                const resim = await Axios.get(ppUrl, {responseType: 'arraybuffer'})

    var imgBuffer = Buffer.from(resim.data)

    const media = await message.client.prepareMessage(message.jid, imgBuffer , MessageType.image, { thumbnail: imgBuffer })

    const buttons = [
    {
      buttonId: "-sysd",
      buttonText: { displayText: "🔐 sʏsᴛᴇᴍ sᴛᴀᴛᴜs \n\n" + child },
      type: 1
    }
      ];

    const buttonMessage = {
        contentText: "‎" ,
        footerText: payload.replace('{version}', Config.VERSION).replace('{pp}', '').replace('{info}', `${status.status}`).replace('{plugin}', Config.CHANNEL) ,
        buttons: buttons,
        headerType: 4,
        imageMessage: media.message.imageMessage    
    };

    await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage, { quoted: message.data } );

            }
            else if (payload.includes('{logo}')) {

    const media = await message.client.prepareMessage(message.jid, fs.readFileSync('/root/WhatsAlphaXDuplicated/media/Alpha-X.png') , MessageType.image, { thumbnail: fs.readFileSync('/root/WhatsAlphaXDuplicated/media/Alpha-X.png') })

    const buttons = [
    {
      buttonId: "-sysd",
      buttonText: { displayText: "🔐 sʏsᴛᴇᴍ sᴛᴀᴛᴜs \n\n" + child },
      type: 1
    }
      ];

    const buttonMessage = {
        contentText: "‎" ,
        footerText: payload.replace('{version}', Config.VERSION).replace('{pp}', '').replace('{info}', `${status.status}`).replace('{plugin}', Config.CHANNEL).replace('{logo}', '') ,
        buttons: buttons,
        headerType: 4,
        imageMessage: media.message.imageMessage    
    };

    await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage, { quoted: message.data } );

            }
            else {
            var payload = Config.ALIVEMSG
            const ppurl = await message.client.getProfilePicture(message.jid)
            let PIC
            try { PIC = await Axios.get(`${Config.A_PIC}`, {responseType: 'arraybuffer'}) } catch { PIC = await Axios.get(ppurl, {responseType : 'arraybuffer'}) }

    const media = await message.client.prepareMessage(message.jid, Buffer.from(PIC.data), MessageType.image, { thumbnail: Buffer.from(PIC.data) })

    const buttons = [
    {
      buttonId: "-sysd",
      buttonText: { displayText: "🔐 sʏsᴛᴇᴍ sᴛᴀᴛᴜs \n\n" + child },
      type: 1
    }
      ];

    const buttonMessage = {
        contentText: "‎" ,
        footerText: payload.replace('{version}', Config.VERSION).replace('{info}', `${status.status}`).replace('{plugin}', Config.CHANNEL) ,
        buttons: buttons,
        headerType: 4,
        imageMessage: media.message.imageMessage    
    };

    await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage, { quoted: message.data } );

            }
        }
    }));

    AlphaX.addCommand({pattern: 'sysd$', fromMe: WType, desc: Lang.SYSD_DESC}, (async (message, match) => {

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8');
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
}));
