const AlphaX = require('../events');
const {MessageType, Mimetype} = require('@adiwajshing/baileys');
const Config = require('../config');
const yts = require('yt-search');
const axios = require("axios");
const Language = require('../language');
const Lang = Language.getString('scrapers');
let WType = Config.WORKTYPE == 'public' ? false : true

AlphaX.addCommand({pattern: 'video ?(.*)', fromMe: WType, desc: Lang.VIDEO_DESC}, (async (message, match) => {

        const ppurl = await message.client.getProfilePicture(message.jid);
        let PIC
        try { PIC = await axios.get(`${Config.A_PIC}`, {responseType: 'arraybuffer'}) } catch { PIC = await axios.get(ppurl, {responseType : 'arraybuffer'}) };

   const alphaX = ["df59d70f7dmshb25eeb2878e2b08p191ff8jsnf7bb5ac19cd1","8e7b1ce970msh0c0735abe062836p1bbcafjsn6754b0519374","1b18fea793mshe9e7efc7c9d367ap10f8c5jsn0e8c1f6aa558","e9f0a4d6b3mshe431834d8ad3a02p1dde7cjsn5ca4ed1f7780","f3f6d7b2ecmshb525e2812f261f5p11c029jsn4b640d820f54","d6323387d2msh94341adc0728053p106e12jsnecd8c9f2d3b4","f3290901a7msh9793dfcc9409623p1813ebjsneccc2743718b","f9e64fee20mshe68a078ea4757f1p1c5d80jsn5c913502baeb","b004ac0b6fmshfa8a6cd984efcbbp1a8042jsne24f4834cc60","b1f8c1a7fcmshe929ed84add257bp199a8bjsn83b0f605fc27","76d43a6d40mshaaeafe5aee515e9p1a2e18jsn696a613d98d5","b90c5df914msh897fe1994dbc32ap199665jsn08d8a4d08445","5bf1770897mshb2a4b6ea56c4db4p180cbfjsn9ddb1889602c","252a3cc4camsh1b4974de34b75f7p144193jsn91f125bcbbca","8b348360a6mshc461a9d0b015749p19e3cfjsne997037004ef","4ff0a84b4cmsha90b0fb138fae2cp109585jsn8948357cb3cd"]

  let yt_search // search yt using yt-search npm for get video Id
  let find_id // video id
  try {
       const videos = await yts(match[1]);
       find_id = videos.all[0].videoId;
       yt_search = true

     } catch {
       yt_search = false;
       find_id = null

     }; // end search video Id

  if (yt_search == true) { // if find id on youtube

    try {

     var dpic = await axios.get(`${Config.D_VIDEO_PIC}`, {responseType: 'arraybuffer'});

         var download = await message.client.sendMessage(message.jid, Config.D_VIDEO, MessageType.text, { contextInfo: { forwardingScore: 49, isForwarded: false }, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": 'ᴘʟᴇᴀsᴇ ᴡᴀɪᴛ 👀...', "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": Buffer.from(dpic.data)}}}});


  var api_link = new Array();

    api_link[0] = `https://ytstream-download-youtube-videos.p.rapidapi.com/dl?rapidapi-key=${alphaX[0]}&id=${find_id}`
    api_link[1] = `https://ytstream-download-youtube-videos.p.rapidapi.com/dl?rapidapi-key=${alphaX[1]}&id=${find_id}`
    api_link[2] = `https://ytstream-download-youtube-videos.p.rapidapi.com/dl?rapidapi-key=${alphaX[2]}&id=${find_id}`
    api_link[3] = `https://ytstream-download-youtube-videos.p.rapidapi.com/dl?rapidapi-key=${alphaX[3]}&id=${find_id}`
    api_link[4] = `https://ytstream-download-youtube-videos.p.rapidapi.com/dl?rapidapi-key=${alphaX[4]}&id=${find_id}`
    api_link[5] = `https://ytstream-download-youtube-videos.p.rapidapi.com/dl?rapidapi-key=${alphaX[5]}&id=${find_id}`
    api_link[6] = `https://ytstream-download-youtube-videos.p.rapidapi.com/dl?rapidapi-key=${alphaX[6]}&id=${find_id}`
    api_link[7] = `https://ytstream-download-youtube-videos.p.rapidapi.com/dl?rapidapi-key=${alphaX[7]}&id=${find_id}`
    api_link[8] = `https://ytstream-download-youtube-videos.p.rapidapi.com/dl?rapidapi-key=${alphaX[8]}&id=${find_id}`
    api_link[9] = `https://ytstream-download-youtube-videos.p.rapidapi.com/dl?rapidapi-key=${alphaX[9]}&id=${find_id}`
    api_link[10] = `https://ytstream-download-youtube-videos.p.rapidapi.com/dl?rapidapi-key=${alphaX[10]}&id=${find_id}`
    api_link[11] = `https://ytstream-download-youtube-videos.p.rapidapi.com/dl?rapidapi-key=${alphaX[11]}&id=${find_id}`
    api_link[12] = `https://ytstream-download-youtube-videos.p.rapidapi.com/dl?rapidapi-key=${alphaX[12]}&id=${find_id}`
    api_link[13] = `https://ytstream-download-youtube-videos.p.rapidapi.com/dl?rapidapi-key=${alphaX[13]}&id=${find_id}`
    api_link[14] = `https://ytstream-download-youtube-videos.p.rapidapi.com/dl?rapidapi-key=${alphaX[14]}&id=${find_id}`
    api_link[15] = `https://ytstream-download-youtube-videos.p.rapidapi.com/dl?rapidapi-key=${alphaX[15]}&id=${find_id}`

  var random = Math.floor(16*Math.random());

        await axios.get(`${api_link[random]}`).then(async (response) => {
        
        let result    = response.data;
        let link      = result.link;
        let vidBuffer = link[18]; // quality - 360p
        let quality   = vidBuffer[2] + ' - ' + vidBuffer[3];
        let size      = vidBuffer[1];
        let title     = result.title;
        let duration  = result.length;
        let views     = result.view_count;
        let thumb     = result.thumb;
        let author    = result.author;
        let date      = result.date;
        let dis       = result.description;
        let keys      = result.keywords
        let channelid = result.channelid
        
const msg = `*⏯️ ɴᴀᴍᴇ »* ${title}
*‍🌎 ᴀᴜᴛʜᴏʀ »* ${author}
*💸 ᴅᴜʀᴀᴛɪᴏɴ »* ${duration}
*👀 ᴠɪᴇᴡs »* ${views}
*💹 sɪᴢᴇ »* ${size}
*🖍 ️ǫᴜᴀʟɪᴛʏ »* ${quality}
`
const msg_2 = `

*🖇 ️ᴄʜᴀɴɴᴇʟ ɪᴅ »* ${channelid}
*🔧 ᴋᴇʏᴡᴏʀᴅs »*
${keys}
*🗓 ️ᴅᴀᴛᴇ »* ${date}
*🔭 ᴅɪsᴄʀɪᴘᴛɪᴏɴ »*
${dis}
`
     var thumb_pp = await axios.get(`${thumb}`, {responseType: 'arraybuffer'});

         var upload   = await message.client.sendMessage(message.jid, Config.U_VIDEO, MessageType.text, { contextInfo: { forwardingScore: 49, isForwarded: false }, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": '👾 ᴜᴘʟᴏᴀᴅɪɴɢ...', "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": Buffer.from(thumb_pp.data)}}}});

        await message.client.deleteMessage(message.jid, {id: download.key.id, remoteJid: message.jid, fromMe: true})

     var file = await axios.get(vidBuffer[0] ,{ responseType: "arraybuffer"});

    const media = await message.client.prepareMessage(message.jid, Buffer.from(file.data) , MessageType.video, { thumbnail: Buffer.from(thumb_pp.data) });

    const buttons = [
    {
      buttonId: "new_ytdl_📜",
      buttonText: { displayText: "ᴍᴏʀᴇ ᴅᴇᴛᴀɪʟs 💎" + msg_2 },
      type: 1
    }
      ];

    const buttonMessage = {
        contentText: "‎" ,
        footerText: msg ,
        buttons: buttons,
        headerType: 5,
        videoMessage: media.message.videoMessage    
    };

    await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage, { quoted: message.data } );

    await message.client.deleteMessage(message.jid, {id: upload.key.id, remoteJid: message.jid, fromMe: true})

    });

    } catch {
    
    await message.client.sendMessage(message.jid, Config.W_EMOJI +  " *ʀᴇǫᴜᴇsᴛ ғᴀɪʟᴇᴅ*", MessageType.text, { quoted: message.data })

            };

  } else if (yt_search == false) {
  
  await message.client.sendMessage(message.jid, Lang.NO_RESULT, MessageType.text, { quoted: message.data, contextInfo: { forwardingScore: 49, isForwarded: false }, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "🚫 No results found!", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": Buffer.from(PIC.data)}}}})

  }

}));

/* ============================================================================================================= */

AlphaX.addCommand({pattern: 'song ?(.*)', fromMe: WType, desc: Lang.SONG_DESC}, (async (message, match) => {

        const ppurl = await message.client.getProfilePicture(message.jid);
        let PIC
        try { PIC = await axios.get(`${Config.A_PIC}`, {responseType: 'arraybuffer'}) } catch { PIC = await axios.get(ppurl, {responseType : 'arraybuffer'}) };

   const alphaX = ["df59d70f7dmshb25eeb2878e2b08p191ff8jsnf7bb5ac19cd1","8e7b1ce970msh0c0735abe062836p1bbcafjsn6754b0519374","1b18fea793mshe9e7efc7c9d367ap10f8c5jsn0e8c1f6aa558","e9f0a4d6b3mshe431834d8ad3a02p1dde7cjsn5ca4ed1f7780","f3f6d7b2ecmshb525e2812f261f5p11c029jsn4b640d820f54","d6323387d2msh94341adc0728053p106e12jsnecd8c9f2d3b4","f3290901a7msh9793dfcc9409623p1813ebjsneccc2743718b","f9e64fee20mshe68a078ea4757f1p1c5d80jsn5c913502baeb","b004ac0b6fmshfa8a6cd984efcbbp1a8042jsne24f4834cc60","b1f8c1a7fcmshe929ed84add257bp199a8bjsn83b0f605fc27","76d43a6d40mshaaeafe5aee515e9p1a2e18jsn696a613d98d5","b90c5df914msh897fe1994dbc32ap199665jsn08d8a4d08445","5bf1770897mshb2a4b6ea56c4db4p180cbfjsn9ddb1889602c","252a3cc4camsh1b4974de34b75f7p144193jsn91f125bcbbca","8b348360a6mshc461a9d0b015749p19e3cfjsne997037004ef","4ff0a84b4cmsha90b0fb138fae2cp109585jsn8948357cb3cd"]

  let yt_search // search yt using yt-search npm for get video Id
  let find_id // video id
  try {
       const videos = await yts(match[1]);
       find_id = videos.all[0].videoId;
       yt_search = true

     } catch {
       yt_search = false;
       find_id = null

     }; // end search video Id

  if (yt_search == true) { // if find id on youtube

    try {

     var dpic = await axios.get(`${Config.D_SONG_PIC}`, {responseType: 'arraybuffer'});

         var download = await message.client.sendMessage(message.jid, Config.D_SONG, MessageType.text, { contextInfo: { forwardingScore: 49, isForwarded: false }, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": 'ᴘʟᴇᴀsᴇ ᴡᴀɪᴛ 👀...', "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": Buffer.from(dpic.data)}}}});

  var api_link = new Array();

    api_link[0] = `https://ytstream-download-youtube-videos.p.rapidapi.com/dl?rapidapi-key=${alphaX[0]}&id=${find_id}`
    api_link[1] = `https://ytstream-download-youtube-videos.p.rapidapi.com/dl?rapidapi-key=${alphaX[1]}&id=${find_id}`
    api_link[2] = `https://ytstream-download-youtube-videos.p.rapidapi.com/dl?rapidapi-key=${alphaX[2]}&id=${find_id}`
    api_link[3] = `https://ytstream-download-youtube-videos.p.rapidapi.com/dl?rapidapi-key=${alphaX[3]}&id=${find_id}`
    api_link[4] = `https://ytstream-download-youtube-videos.p.rapidapi.com/dl?rapidapi-key=${alphaX[4]}&id=${find_id}`
    api_link[5] = `https://ytstream-download-youtube-videos.p.rapidapi.com/dl?rapidapi-key=${alphaX[5]}&id=${find_id}`
    api_link[6] = `https://ytstream-download-youtube-videos.p.rapidapi.com/dl?rapidapi-key=${alphaX[6]}&id=${find_id}`
    api_link[7] = `https://ytstream-download-youtube-videos.p.rapidapi.com/dl?rapidapi-key=${alphaX[7]}&id=${find_id}`
    api_link[8] = `https://ytstream-download-youtube-videos.p.rapidapi.com/dl?rapidapi-key=${alphaX[8]}&id=${find_id}`
    api_link[9] = `https://ytstream-download-youtube-videos.p.rapidapi.com/dl?rapidapi-key=${alphaX[9]}&id=${find_id}`
    api_link[10] = `https://ytstream-download-youtube-videos.p.rapidapi.com/dl?rapidapi-key=${alphaX[10]}&id=${find_id}`
    api_link[11] = `https://ytstream-download-youtube-videos.p.rapidapi.com/dl?rapidapi-key=${alphaX[11]}&id=${find_id}`
    api_link[12] = `https://ytstream-download-youtube-videos.p.rapidapi.com/dl?rapidapi-key=${alphaX[12]}&id=${find_id}`
    api_link[13] = `https://ytstream-download-youtube-videos.p.rapidapi.com/dl?rapidapi-key=${alphaX[13]}&id=${find_id}`
    api_link[14] = `https://ytstream-download-youtube-videos.p.rapidapi.com/dl?rapidapi-key=${alphaX[14]}&id=${find_id}`
    api_link[15] = `https://ytstream-download-youtube-videos.p.rapidapi.com/dl?rapidapi-key=${alphaX[15]}&id=${find_id}`

  var random = Math.floor(16*Math.random());

        await axios.get(`${api_link[random]}`).then(async (response) => {
        
        let result    = response.data;
        let link      = result.link;
        let songBuffer = link[251]; // mp3
        let quality   = songBuffer[2] + ' - ' + songBuffer[3];
        let size      = songBuffer[1];
        let title     = result.title;
        let duration  = result.length;
        let views     = result.view_count;
        let thumb     = result.thumb;
        let author    = result.author;
        let date      = result.date;
        let dis       = result.description;
        let keys      = result.keywords
        let channelid = result.channelid
        
const msg = `

*⏯️ ɴᴀᴍᴇ »* ${title}
*👩 ᴀᴜᴛʜᴏʀ »* ${author}
*💸 ᴅᴜʀᴀᴛɪᴏɴ »* ${duration}
*💹 sɪᴢᴇ »* ${size}
`
const msg_2 = `📊 ᴍᴏʀᴇ ᴅᴇᴛᴀɪʟs 💎

*🖇 ️ᴄʜᴀɴɴᴇʟ ɪᴅ »* ${channelid}
*🔧 ᴋᴇʏᴡᴏʀᴅs »*
${keys}
*🗓 ️ᴅᴀᴛᴇ »* ${date}
*🔭 ᴅɪsᴄʀɪᴘᴛɪᴏɴ »*
${dis}
`
     var thumb_pp = await axios.get(`${thumb}`, {responseType: 'arraybuffer'});

         var upload   = await message.client.sendMessage(message.jid, Config.U_SONG + msg, MessageType.text, { contextInfo: { forwardingScore: 49, isForwarded: false }, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": '👾 ᴜᴘʟᴏᴀᴅɪɴɢ...', "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": Buffer.from(thumb_pp.data)}}}});

        await message.client.deleteMessage(message.jid, {id: download.key.id, remoteJid: message.jid, fromMe: true})

     var file = await axios.get(songBuffer[0] ,{ responseType: "arraybuffer"});

    await message.client.sendMessage(message.jid, Buffer.from(file.data), MessageType.document, { mimetype: 'audio/mpeg', quoted: message.data, filename: title + ".mp3", ptt: false });

    await message.client.sendMessage(message.jid, Buffer.from(file.data), MessageType.audio, { mimetype: Mimetype.m4a, quoted: message.data });

    });

    } catch {
    
    await message.client.sendMessage(message.jid, Config.W_EMOJI +  " *ʀᴇǫᴜᴇsᴛ ғᴀɪʟᴇᴅ*", MessageType.text, { quoted: message.data })

            };

  } else if (yt_search == false) {
  
  await message.client.sendMessage(message.jid, Lang.NO_RESULT, MessageType.text, { quoted: message.data, contextInfo: { forwardingScore: 49, isForwarded: false }, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "🚫 No results found!", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": Buffer.from(PIC.data)}}}})

  }

}));
