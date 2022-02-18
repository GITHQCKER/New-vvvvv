const AlphaX = require('../events');
const config = require('../config');
const {MessageType, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
let WType = config.WORKTYPE == 'public' ? false : true
const Language = require('../language');
const Lang = Language.getString('scrapers');

  var api_key = new Array (); // get random api
  
  api_key[0] = "2I5EWYfhxn87p0N2FysdtFWFZA8";
  api_key[1] = "K0CyiROYe22bqBw5qtnoY3qtcpj";
  api_key[2] = "u3nt946d9zm3bwAZTXOFgOpYpRM";
  api_key[3] = "apivinz"; // free api

//-----API KEY LIMIT = 3000 per 1 day ✅----

  var random_api = Math.floor(4*Math.random())


AlphaX.addCommand({pattern: 'playmp3 ?(.*)', fromMe: WType, desc: Lang.SONG_DESC}, (async (message, match) => {

        const ppurl = await message.client.getProfilePicture(message.jid)
        let PIC
        try { PIC = await axios.get(`${config.A_PIC}`, {responseType: 'arraybuffer'}) } catch { PIC = await axios.get(ppurl, {responseType : 'arraybuffer'}) }

     if (match[1] === '') {
     await message.client.sendMessage(message.jid,Lang.NEED_TEXT_SONG,MessageType.text, {quoted: message.data, contextInfo: { forwardingScore: 49, isForwarded: false }, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "📎 Need Song! 📎", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": Buffer.from(PIC.data)}}}});
     };
      
     let run;
     try { await axios.get('https://api.zeks.me/api/ytplaymp3?apikey=' + `${api_key[random_api]}` + '&q=' + match[1] ); run = true } catch { run = false };

     /* ---ᴅᴏᴡɴʟᴏᴀᴅ > Upload--- */

     if (run == true) { /*if site is down and this is not working */

     await axios.get('https://api.zeks.me/api/ytplaymp3?apikey=' + `${api_key[random_api]}` + '&q=' + `${encodeURIComponent(match[1])}`).then(async (response) => {

     let down;
     try {
     
     down = true
     
     const result = response.data.result
     const title = result.title
     const url = result.url_audio
     const thumb = result.thumbnail
     const time = result.duration
     const size = result.size
     const link = result.source

     let msg = '*' ;
     msg += '🍹 ɴᴀᴍᴇ  »*  ```' + title + '```\n' ;
     msg += '*⏯️ ᴅᴜʀᴀᴛɪᴏɴ  »*  ```' + time + '```\n' ;
     msg += '*🌍 sᴏᴜʀᴄᴇ  »*  ```' + link + '```\n' ;
     msg += '*▫️️ ᴅɪʀᴇᴄᴛ ʟɪɴᴋ  »*  ```' + url + '```\n\n' ;


     var dpic = await axios.get(`${config.D_SONG_PIC}`, {responseType: 'arraybuffer'});

          await message.client.sendMessage(message.jid, Buffer.from(dpic.data), MessageType.image, { mimetype: Mimetype.png, caption: config.D_SONG, thumbnail: Buffer.from(dpic.data), contextInfo: { forwardingScore: 49, isForwarded: false }, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": '📩 Dᴏᴡɴʟᴏᴀᴅɪɴɢ 📩', "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": Buffer.from(PIC.data)}}}});

     var pp = await axios.get(`${thumb}`, {responseType: 'arraybuffer'})
     
          await message.client.sendMessage(message.jid, Buffer.from(pp.data), MessageType.image, { mimetype: Mimetype.png, caption: msg + config.U_SONG, thumbnail: Buffer.from(pp.data), contextInfo: { forwardingScore: 49, isForwarded: false }, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": '📤 ' + match[1] + ' 📤', "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": Buffer.from(PIC.data)}}}});

     var song = await axios.get( url , {responseType: 'arraybuffer' })

      } catch { down = false; await message.client.sendMessage(message.jid, Lang.NO_RESULT, MessageType.text, { quoted: message.data, contextInfo: { forwardingScore: 49, isForwarded: false }, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "🚫 No results found!", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": Buffer.from(PIC.data)}}}}); };

      if (down == true) { /* If file is up to 100mb it send a error msg ✅ */

          try { 
          await message.client.sendMessage(message.jid, Buffer.from(song.data) , MessageType.audio, { mimetype: 'audio/mpeg',quoted: message.data, ptt: false});
          await message.client.sendMessage(message.jid, Buffer.from(song.data) , MessageType.document, {filename: response.data.result.title + '.mp3', mimetype: 'audio/mpeg', quoted: message.data});
          } catch { await message.client.sendMessage(message.jid, "*🚫 ᴄᴀɴ'ᴛ ᴜᴘʟᴏᴀᴅ ᴜᴘ ᴛᴏ* _100MB_ *ғɪʟᴇs*", MessageType.text, { quoted: message.data }); };

              };
              
         });

    } else if (run == false) { /* site is down now */ await message.client.sendMessage(message.jid, "*:( sᴇʀᴠᴇʀ ᴇʀʀᴏʀ !!* ```ᴘʟᴇᴀsᴇ ᴛʀʏ ᴀɢᴀɪɴ ʟᴀᴛᴇʀ..```\n• *ᴜsᴇ ᴛʜᴇ* _[music or song]_ *ᴄᴏᴍᴍᴀɴᴅ ᴜɴᴛɪʟ ᴛʜɪs sɪᴛᴜᴀᴛɪᴏɴ ɪs ʀᴇsᴏʟᴠᴇᴅ*" ,MessageType.text, {quoted: message.data, contextInfo: { forwardingScore: 49, isForwarded: false }, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "⚠️️ server error.", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": Buffer.from(PIC.data)}}}}); };

}));

AlphaX.addCommand({pattern: 'playmp4 ?(.*)', fromMe: WType, desc: Lang.VIDEO_DESC}, (async (message, match) => {

        const ppurl = await message.client.getProfilePicture(message.jid)
        let PIC
        try { PIC = await axios.get(`${config.A_PIC}`, {responseType: 'arraybuffer'}) } catch { PIC = await axios.get(ppurl, {responseType : 'arraybuffer'}) }

     if (match[1] === '') {
          await message.client.sendMessage(message.jid, '🔭 *ɴᴇᴇᴅ ɴᴀᴍᴇ ᴏʀ ᴜʀʟ!*\n_ex:- .video https://youtu.be/c9rRLLdNTVQ_\n._video Telegram Bot @Anything SL_' ,MessageType.text, {quoted: message.data, contextInfo: { forwardingScore: 49, isForwarded: false }, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "📎 Need yt video name or url 📎", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": Buffer.from(PIC.data)}}}});
                          };

     let run;
     try { await axios.get('https://api.zeks.me/api/ytplaymp4?apikey=' + `${api_key[random_api]}` + '&q=' + match[1] ); run = true } catch { run = false };

     /* ---ᴅᴏᴡɴʟᴏᴀᴅ > Upload--- */

     if (run == true) { /*if site is down and this is not working */

     await axios('https://api.zeks.me/api/ytplaymp4?apikey=' + `${api_key[random_api]}` + '&q=' + `${encodeURIComponent(match[1])}`).then (async (response) => {

     let down;
     try {
     
     down = true
     
     const result = response.data.result
     const title = result.title
     const url = result.url_video
     const thumb = result.thumbnail
     const source = result.source
     const size = result.size
     
     let msg = '*' ;
     msg += '☄️ ɴᴀᴍᴇ  »*  ```' + title + '```\n' ;
     msg += '*✂️ ғɪʟᴇ sɪzᴇ  »*  ```' + size + '```\n' ;
     msg += '*🌍 sᴏᴜʀᴄᴇ  »*  ```' + source + '```\n' ;
     msg += '*▫️️ ᴅɪʀᴇᴄᴛ ʟɪɴᴋ  »*  ```' + url + '```\n\n' ;


     var dpic = await axios.get(`${config.D_VIDEO_PIC}`, {responseType: 'arraybuffer'})
        
          await message.client.sendMessage(message.jid, Buffer.from(dpic.data), MessageType.image, { mimetype: Mimetype.png, caption: config.D_VIDEO, thumbnail: Buffer.from(dpic.data), contextInfo: { forwardingScore: 49, isForwarded: false }, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": '📩 Dᴏᴡɴʟᴏᴀᴅɪɴɢ 📩', "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": Buffer.from(PIC.data)}}}});

     var pp = await axios.get(`${thumb}`, {responseType: 'arraybuffer'})

          await message.client.sendMessage(message.jid, Buffer.from(pp.data), MessageType.image, { mimetype: Mimetype.png, caption: msg + config.U_VIDEO, thumbnail: Buffer.from(pp.data), contextInfo: { forwardingScore: 49, isForwarded: false }, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": '📤 ' + match[1] + ' 📤', "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": Buffer.from(PIC.data)}}}});

     var vid = await axios.get( url , {responseType: 'arraybuffer' })

      } catch { down = false; await message.client.sendMessage(message.jid, Lang.NO_RESULT, MessageType.text, { quoted: message.data, contextInfo: { forwardingScore: 49, isForwarded: false }, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "🚫 No results found!", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": Buffer.from(PIC.data)}}}}); };

      if (down == true) { /* If file is up to 100mb it send a error msg ✅ */

          try {
          await message.client.sendMessage(message.jid, Buffer.from(vid.data) , MessageType.video, { mimetype: Mimetype.mp4 ,quoted: message.data, thumbnail: Buffer.from(pp.data), caption: '```' + response.data.result.title + '```' });
          } catch { await message.client.sendMessage(message.jid, "*🚫 ᴄᴀɴ'ᴛ ᴜᴘʟᴏᴀᴅ ᴜᴘ ᴛᴏ* _100MB_ *ғɪʟᴇs*", MessageType.text, { quoted: message.data }); };

              };
          
         });

    } else if (run == false) { /* site is down now */ await message.client.sendMessage(message.jid, "*:( sᴇʀᴠᴇʀ ᴇʀʀᴏʀ !!* ```ᴘʟᴇᴀsᴇ ᴛʀʏ ᴀɢᴀɪɴ ʟᴀᴛᴇʀ..```\n• *ᴜsᴇ ᴛʜᴇ* _[mp4 or video]_ *ᴄᴏᴍᴍᴀɴᴅ ᴜɴᴛɪʟ ᴛʜɪs sɪᴛᴜᴀᴛɪᴏɴ ɪs ʀᴇsᴏʟᴠᴇᴅ*" ,MessageType.text, {quoted: message.data, contextInfo: { forwardingScore: 49, isForwarded: false }, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "⚠️️ server error.", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": Buffer.from(PIC.data)}}}}); };

}));

var DESC = ""
if (config.LANG == "EN") DESC = "ᴅᴏᴡɴʟᴏᴀᴅ video from facebook."
if (config.LANG == "SI") DESC = "Facebook video බාගත කරයි."

var FAIL = ""
if (config.LANG == "EN") FAIL = "*ʀᴇǫᴜᴇsᴛ ғᴀɪʟᴇᴅ!! :-(*"
if (config.LANG == "SI") FAIL = "*ඉල්ලීම අසාර්ථක විය!! :-(*"

AlphaX.addCommand({pattern: 'fb ?(.*)', fromMe: WType, desc: DESC}, (async (message, match) => {
   
   if (!match[1]) { await message.client.sendMessage(message.jid, "*:-(️ Need fb url!*" ,MessageType.text, { quoted: message.data }) };
   if (!config.XAPI && config.XAPI == undefined) { await message.client.sendMessage(message.jid, "⚠️️ *Can't ᴅᴏᴡɴʟᴏᴀᴅ fb videos without API key*\n_• get it using_ ```xteam.xyz```" ,MessageType.text, { quoted: message.data }) };

   try { await axios("https://xteam.xyz") } catch { await message.client.sendMessage(message.jid, "*🚫 sᴇʀᴠᴇʀ ᴇʀʀᴏʀ !!* ```ᴘʟᴇᴀsᴇ ᴛʀʏ ᴀɢᴀɪɴ ʟᴀᴛᴇʀ..```" , MessageType.text, { quoted: message.data }) };

   await axios("https://xteam.xyz/dl/fbv2?url=" + `${encodeURIComponent(match[1])}` + "&APIKEY=" + `${config.XAPI}`).then (async (webpage) => {

  if (match[1].includes("https://")) {
         try {

   const status = webpage.data.status
   
   if (status == true) {

   await message.client.sendMessage(message.jid, "*ᴅᴏᴡɴʟᴏᴀᴅɪɴɢ ғʙ ᴠɪᴅᴇᴏ....⬇️*" ,MessageType.text, { quoted: message.data });

   const result = webpage.data.result
   const url    = result.hd.url
   const host   = result.hosting
   const time   = result.meta.duration
   const title  = result.meta.title
   const thumb  = result.thumb
   const id     = result.id

    var video = await axios.get(url, {responseType: 'arraybuffer'});

    await message.client.sendMessage(message.jid, "*ᴜᴘʟᴏᴀᴅɪɴɢ ғʙ ᴠɪᴅᴇᴏ....️👀*" ,MessageType.text, { quoted: message.data });

    var pp = await axios.get(thumb, {responseType: 'arraybuffer'});
    
    let msg = `✨️ ᴛɪᴛʟᴇ :- ${title} \n⏰ ᴛɪᴍᴇ :- ${time} \n🛠️ ʜᴏsᴛ :- ${host} \n📨 ɪᴅ :- ${id}\n`;
    
    await message.client.sendMessage(message.jid, Buffer.from(video.data), MessageType.video, { mimetype: Mimetype.mp4, caption: '```' + msg + '```', thumbnail: Buffer.from(pp.data), quoted: message.data });

     } else if (!status == true) { await message.client.sendMessage(message.jid, FAIL + "\n\nᴇʀʀᴏʀ 👾:-_\n```" + webpage.data.message + "```", MessageType.text, { quoted: message.data }) };

     } catch { await message.client.sendMessage(message.jid, FAIL + "\n\nᴇʀʀᴏʀ 👾:-_\n```" + webpage.data.message + "```" , MessageType.text, { quoted: message.data }) };
     
     } else if (match[1].includes("https://")) { await message.client.sendMessage(message.jid, "*ᴇɴᴛᴇʀ ᴠᴀʟᴜᴇᴅ ʟɪɴᴋ!*",MessageType.text, { quoted: message.data}) };
     
    });

}));

var TDESC = ""
if (config.LANG == "EN") TDESC = "ᴅᴏᴡɴʟᴏᴀᴅ tiktok video."
if (config.LANG == "SI") TDESC = "Tiktok video බාගත කරයි."

var FAIL = ""
if (config.LANG == "EN") FAIL = "*ʀᴇǫᴜᴇsᴛ ғᴀɪʟᴇᴅ!! :-(*"
if (config.LANG == "SI") FAIL = "*ඉල්ලීම අසාර්ථක විය!! :-(*"

AlphaX.addCommand({pattern: 'tiktok ?(.*)', fromMe: WType, desc: TDESC}, (async (message, match) => {
   
   if (!match[1]) { await message.client.sendMessage(message.jid, "*:-(️ Need tiktok url!*" ,MessageType.text, { quoted: message.data }) };
   if (!config.XAPI && config.XAPI == undefined) { await message.client.sendMessage(message.jid, "⚠️️ *Can't ᴅᴏᴡɴʟᴏᴀᴅ tiktok videos without API key*\n_• get it using_ ```xteam.xyz```" ,MessageType.text, { quoted: message.data }) };

   try { await axios("https://xteam.xyz") } catch { await message.client.sendMessage(message.jid, "*🚫 sᴇʀᴠᴇʀ ᴇʀʀᴏʀ !!* ```ᴘʟᴇᴀsᴇ ᴛʀʏ ᴀɢᴀɪɴ ʟᴀᴛᴇʀ..```" , MessageType.text, { quoted: message.data }) };

   await axios("https://xteam.xyz/dl/tiktok?url=" + `${encodeURIComponent(match[1])}` + "&APIKEY=" + `${config.XAPI}`).then (async (webpage) => {

   if (match[1].includes("https://")) {
         try {

   const status = webpage.data.status
   
   if (status == true) {

   await message.client.sendMessage(message.jid, "*ᴅᴏᴡɴʟᴏᴀᴅɪɴɢ ᴛɪᴋᴛᴏᴋ ᴠɪᴅᴇᴏ....🎨*" ,MessageType.text, { quoted: message.data });

   const result = webpage.data.result
   const url    = result.link_dl1
   const title  = result.name
   const thumb  = result.thumb_img
   const cp     = result.caption

    var video = await axios.get(url, {responseType: 'arraybuffer'});

    await message.client.sendMessage(message.jid, "*ᴜᴘʟᴏᴀᴅɪɴɢ ᴛɪᴋᴛᴏᴋ ᴠɪᴅᴇᴏ....️✨️*" ,MessageType.text, { quoted: message.data });

    var pp = await axios.get(thumb, {responseType: 'arraybuffer'});
    
    let msg = `*🎐️ ᴛɪᴛʟᴇ :-* _${title}_\n*♦️ ᴄᴀᴘᴛɪᴏɴ :-* _${cp}_ \n`;
    
    await message.client.sendMessage(message.jid, Buffer.from(video.data), MessageType.video, { mimetype: Mimetype.mp4, caption: msg , thumbnail: Buffer.from(pp.data), quoted: message.data });

     } else if (!status == true) { await message.client.sendMessage(message.jid, FAIL + "\n\nᴇʀʀᴏʀ 👾:-_\n```" + webpage.data.message + "```", MessageType.text, { quoted: message.data }) };

     } catch { await message.client.sendMessage(message.jid, FAIL + "\n\nᴇʀʀᴏʀ 👾:-_\n```" + webpage.data.message + "```" , MessageType.text, { quoted: message.data }) };
     
     } else if (match[1].includes("https://")) { await message.client.sendMessage(message.jid, "*ᴇɴᴛᴇʀ ᴠᴀʟᴜᴇᴅ ʟɪɴᴋ!*",MessageType.text, { quoted: message.data}) };
     
    });

}));

var IG_DESC = ""
if (config.LANG == "EN") IG_DESC = "ᴅᴏᴡɴʟᴏᴀᴅ instagram video."
if (config.LANG == "SI") IG_DESC = "Instagram video බාගත කරයි."

var IG_FAIL = ""
if (config.LANG == "EN") IG_FAIL = "*ʀᴇǫᴜᴇsᴛ ғᴀɪʟᴇᴅ!! :-(*"
if (config.LANG == "SI") IG_FAIL = "*ඉල්ලීම අසාර්ථක විය!! :-(*"

AlphaX.addCommand({pattern: 'ig ?(.*)', fromMe: WType, desc: IG_DESC}, (async (message, match) => {
   
   if (!match[1]) { await message.client.sendMessage(message.jid, "*:-(️ Need instagram url!*" ,MessageType.text, { quoted: message.data }) };
   if (!config.XAPI && config.XAPI == undefined) { await message.client.sendMessage(message.jid, "⚠️️ *Can't ᴅᴏᴡɴʟᴏᴀᴅ instagram videos without API key*\n_• get it using_ ```xteam.xyz```" ,MessageType.text, { quoted: message.data }) };

   try { await axios.get("https://xteam.xyz") } catch { await message.client.sendMessage(message.jid, "*🚫 sᴇʀᴠᴇʀ ᴇʀʀᴏʀ !!* ```ᴘʟᴇᴀsᴇ ᴛʀʏ ᴀɢᴀɪɴ ʟᴀᴛᴇʀ..```" , MessageType.text, { quoted: message.data }) };

   await axios.get("https://xteam.xyz/dl/igv2?url=" + `${encodeURIComponent(match[1])}` + "&APIKEY=" + `${config.XAPI}`).then (async (webpage) => {

   if (match[1].includes("https://")) {
         try {

   const status = webpage.data.status
   
   if (status == true) {

   await message.client.sendMessage(message.jid, "*ᴅᴏᴡɴʟᴏᴀᴅɪɴɢ ɪɴsᴛᴀɢʀᴀᴍ ᴠɪᴅᴇᴏ....🍁*" ,MessageType.text, { quoted: message.data });

   const result = webpage.data.result
   const source = result.meta.source
   const title  = result.meta.title
   const thumb  = result.thumb
   const host   = result.hosting
   const url    = result.url[0].url

    var video = await axios.get(url, {responseType: 'arraybuffer'});

    await message.client.sendMessage(message.jid, "*ᴜᴘʟᴏᴀᴅɪɴɢ ɪɴsᴛᴀɢʀᴀᴍ ᴠɪᴅᴇᴏ....️🏂️*" ,MessageType.text, { quoted: message.data });

    var pp = await axios.get(thumb, {responseType: 'arraybuffer'});
    
    let msg = `*🥀 ᴛɪᴛʟᴇ :-* _${title}_\n*ℹ️️ sᴏᴜʀᴄᴇ :-* _${source}_ \n*🔱 ʜᴏsᴛ :-* _${host}_`;
    
    await message.client.sendMessage(message.jid, Buffer.from(video.data), MessageType.video, { mimetype: Mimetype.mp4, caption: msg , thumbnail: Buffer.from(pp.data), quoted: message.data });

     } else if (!status == true) { await message.client.sendMessage(message.jid, IG_FAIL + "\n\nᴇʀʀᴏʀ 👾:-_\n```" + webpage.data.message + "```", MessageType.text, { quoted: message.data }) };

     } catch { await message.client.sendMessage(message.jid, IG_FAIL + "\n\nᴇʀʀᴏʀ 👾:-_\n```" + webpage.data.message + "```" , MessageType.text, { quoted: message.data }) };
     
     } else if (!match[1].includes("https://")) { await message.client.sendMessage(message.jid, "*ᴇɴᴛᴇʀ ᴠᴀʟᴜᴇᴅ ʟɪɴᴋ!*",MessageType.text, { quoted: message.data}) };
     
    });

}));