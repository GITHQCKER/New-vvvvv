const AlphaX = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const Config = require('../config');
let WType = Config.WORKTYPE == 'public' ? false : true

var ARTP_DESC = '' 
if (Config.LANG == 'EN') ARTP_DESC = 'Beautifull artpack with more than 100 messages.'
if (Config.LANG == 'SI') ARTP_DESC = 'පණිවිඩ 100 කට වඩා ඇති ලස්සන කලා ඇසුරුම.'
if (Config.LANG == 'KN') ARTP_DESC = '100 ಕ್ಕೂ ಹೆಚ್ಚು ಸಂದೇಶಗಳೊಂದಿಗೆ ಸುಂದರವಾದ ಕಲಾ ಪ್ಯಾಕ್.'
if (Config.LANG == 'TR') ARTP_DESC = '100 den fazla mesaj içeren güzel sanat paketi.'
if (Config.LANG == 'ML') ARTP_DESC = '100-ലധികം സന്ദേശങ്ങളുള്ള മനോഹരമായ ആർട്ട് പായ്ക്ക്.'
if (Config.LANG == 'AZ') ARTP_DESC = '100-dən çox mesajı olan gözəl sənət paketi.'
if (Config.LANG == 'RU') ARTP_DESC = 'Красивый арт-пак с более чем 100 сообщениями.'

AlphaX.addCommand({pattern: 'art$', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
  await message.client.sendMessage(message.jid,'```🔎 Need Word!```',MessageType.text);

  }));

AlphaX.addCommand({pattern: 'art pack$', fromMe: WType, desc: ARTP_DESC, dontAddCommandList: false}, (async (message, match) => {
  await message.client.sendMessage(message.jid,'*' + Config.C_EMOJI + ' ᴄᴏᴍᴍᴀɴᴅ ➠ .art joke*\n *' + Config.C_EMOJI + ' ᴄᴏᴍᴍᴀɴᴅ ➠ .art notbad*\n *' + Config.C_EMOJI + ' ᴄᴏᴍᴍᴀɴᴅ ➠ .art smile*\n *' + Config.C_EMOJI + ' ᴄᴏᴍᴍᴀɴᴅ ➠ .art wlcm*\n *' + Config.C_EMOJI + ' ᴄᴏᴍᴍᴀɴᴅ ➠ .art heart*\n *' + Config.C_EMOJI + ' ᴄᴏᴍᴍᴀɴᴅ ➠ .art logo*\n *' + Config.C_EMOJI + ' ᴄᴏᴍᴍᴀɴᴅ ➠ .art skull*\n *' + Config.C_EMOJI + ' ᴄᴏᴍᴍᴀɴᴅ ➠ .art gun*\n *' + Config.C_EMOJI + ' ᴄᴏᴍᴍᴀɴᴅ ➠ .art bad*\n *' + Config.C_EMOJI + ' ᴄᴏᴍᴍᴀɴᴅ ➠ .art santa*\n *' + Config.C_EMOJI + ' ᴄᴏᴍᴍᴀɴᴅ ➠ .art hacker*\n *' + Config.C_EMOJI + ' ᴄᴏᴍᴍᴀɴᴅ ➠ .art fail*\n *' + Config.C_EMOJI + ' ᴄᴏᴍᴍᴀɴᴅ ➠ .art warn*\n *' + Config.C_EMOJI + ' ᴄᴏᴍᴍᴀɴᴅ ➠ .art hello*\n *' + Config.C_EMOJI + ' ᴄᴏᴍᴍᴀɴᴅ ➠ .art cat* \n *' + Config.C_EMOJI + ' ᴄᴏᴍᴍᴀɴᴅ ➠ .art human*\n *' + Config.C_EMOJI + ' ᴄᴏᴍᴍᴀɴᴅ ➠ .art run* \n *' + Config.C_EMOJI + ' ᴄᴏᴍᴍᴀɴᴅ ➠ .art bed*\n *' + Config.C_EMOJI + ' ᴄᴏᴍᴍᴀɴᴅ ➠ .art hello*\n *' + Config.C_EMOJI + ' ᴄᴏᴍᴍᴀɴᴅ ➠ .art love* \n *' + Config.C_EMOJI + ' ᴄᴏᴍᴍᴀɴᴅ ➠ .art 2love* \n *' + Config.C_EMOJI + ' ᴄᴏᴍᴍᴀɴᴅ ➠ .art pig*\n *' + Config.C_EMOJI + ' ᴄᴏᴍᴍᴀɴᴅ ➠ .art dog* \n *' + Config.C_EMOJI + ' ᴄᴏᴍᴍᴀɴᴅ ➠ .art music* \n *' + Config.C_EMOJI + ' ᴄᴏᴍᴍᴀɴᴅ ➠ .art lock* \n *' + Config.C_EMOJI + ' ᴄᴏᴍᴍᴀɴᴅ ➠ .art plane* \n *' + Config.C_EMOJI + ' ᴄᴏᴍᴍᴀɴᴅ ➠ .art watch*\n *' + Config.C_EMOJI + ' ᴄᴏᴍᴍᴀɴᴅ ➠ .art happy*\n *' + Config.C_EMOJI + ' ᴄᴏᴍᴍᴀɴᴅ ➠ .art warn*\n *' + Config.C_EMOJI + ' ᴄᴏᴍᴍᴀɴᴅ ➠ .art del*\n *' + Config.C_EMOJI + ' ᴄᴏᴍᴍᴀɴᴅ ➠ .art mk*\n *' + Config.C_EMOJI + ' ᴄᴏᴍᴍᴀɴᴅ ➠ .art truck*\n *' + Config.C_EMOJI + ' ᴄᴏᴍᴍᴀɴᴅ ➠ .art game*\n *' + Config.C_EMOJI + ' ᴄᴏᴍᴍᴀɴᴅ ➠ .art ship*\n *' + Config.C_EMOJI + ' ᴄᴏᴍᴍᴀɴᴅ ➠ .art duck*\n *' + Config.C_EMOJI + ' ᴄᴏᴍᴍᴀɴᴅ ➠ .art ant*\n *' + Config.C_EMOJI + ' ᴄᴏᴍᴍᴀɴᴅ ➠ .art drink*\n *' + Config.C_EMOJI + ' ᴄᴏᴍᴍᴀɴᴅ ➠ .art what*\n *' + Config.C_EMOJI + ' ᴄᴏᴍᴍᴀɴᴅ ➠ .art confused*\n *' + Config.C_EMOJI + ' ᴄᴏᴍᴍᴀɴᴅ ➠ .art batterylow*\n *' + Config.C_EMOJI + ' ᴄᴏᴍᴍᴀɴᴅ ➠ .art wtf*\n *' + Config.C_EMOJI + ' ᴄᴏᴍᴍᴀɴᴅ ➠ .art smiles*\n *' + Config.C_EMOJI + ' ᴄᴏᴍᴍᴀɴᴅ ➠ .art hbd*\n *' + Config.C_EMOJI + ' ᴄᴏᴍᴍᴀɴᴅ ➠ .art 99*\n *' + Config.C_EMOJI + ' ᴄᴏᴍᴍᴀɴᴅ ➠ .art vup*\n *' + Config.C_EMOJI + ' ᴄᴏᴍᴍᴀɴᴅ ➠ .art lock*\n *' + Config.C_EMOJI + ' ᴄᴏᴍᴍᴀɴᴅ ➠ .art eat*\n *' + Config.C_EMOJI + ' ᴄᴏᴍᴍᴀɴᴅ ➠ .art ghost*\n *' + Config.C_EMOJI + ' ᴄᴏᴍᴍᴀɴᴅ ➠ .art kidding*\n *' + Config.C_EMOJI + ' ᴄᴏᴍᴍᴀɴᴅ ➠ .art hi*\n *' + Config.C_EMOJI + ' ᴄᴏᴍᴍᴀɴᴅ ➠ .art up*\n *' + Config.C_EMOJI + ' ᴄᴏᴍᴍᴀɴᴅ ➠ .art like*\n *' + Config.C_EMOJI + ' ᴄᴏᴍᴍᴀɴᴅ ➠ .art iphone*\n *' + Config.C_EMOJI + ' ᴄᴏᴍᴍᴀɴᴅ ➠ .art wtzp*\n *' + Config.C_EMOJI + ' ᴄᴏᴍᴍᴀɴᴅ ➠ .art tiktok*\n*' + Config.C_EMOJI + ' ᴄᴏᴍᴍᴀɴᴅ ➠ .art gm*\n*' + Config.C_EMOJI + ' ᴄᴏᴍᴍᴀɴᴅ ➠ .art gn*\n*' + Config.C_EMOJI + ' ᴄᴏᴍᴍᴀɴᴅ ➠ .art ga*\n*' + Config.C_EMOJI + ' ᴄᴏᴍᴍᴀɴᴅ ➠ .art ge*\n*' + Config.C_EMOJI + ' ᴄᴏᴍᴍᴀɴᴅ ➠ .art a - z*\n*' + Config.C_EMOJI + ' ᴄᴏᴍᴍᴀɴᴅ ➠ .art 1 - 9*',MessageType.text);

  }));

AlphaX.addCommand({pattern: 'art joke$', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
  await message.client.sendMessage(message.jid,'```░░░░░░░░███████████████░░░░░░░░\n░░░░░█████████████████████░░░░░\n░░░░████████████████████████░░░\n░░░██████████████████████████░░\n░░█████████████████████████████\n░░███████████▀░░░░░░░░████████\n░░███████████░░░░░░░░░░░░░░░███\n░████████████░░░░░░░░░░░░░░░░██\n░█░░███████░░░░░░░░░░░▄▄░░░░░██\n█░░░░█████░░░░░░▄███████░░██░░█\n█░░█░░░███░░░░░██▀▀░░░░░░░░██░█\n█░░░█░░░░░░░░░░░░▄██▄░░░░░░░███\n█░░▄█░░░░░░░░░░░░░░░░░░█▀▀█▄░██\n█░░░░░░░░░░░░░░░░░░░░░░█░░░░██░\n░███░░░░░░░░░░░░░░░░░░░█░░░░█░░\n░░█░█░░░░░░░█░░░░░██▀▄░▄██░░░█░\n░░█░█░░░░░░█░░░░░░░░░░░░░░░░░█░\n░░░██░░░░░░█░░░░▄▄▄▄▄▄░░░░░░█░░\n░░░██░░░░░░░█░░█▄▄▄▄░▀▀██░░█░░░\n░░░██░░░░░░░█░░▀████████░░█░░░░\n░░█░░█░░░░░░░█░░▀▄▄▄▄██░░█░░░░░\n░░█░░░█░░░░░░░█░░░░░░░░░█░░░░░░\n░█░░░░░█░░░░░░░░░░░░░░░░█░░░░░░\n░░░░░░░░█░░░░░░█░░░░░░░░█░░░░░░\n░░░░░░░░░░░░░░░░████████░░░░░░░```',MessageType.text);

  }));

AlphaX.addCommand({pattern: 'art notbad$', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
  await message.client.sendMessage(message.jid,'```░░█▀░░░░░░░░░░░▀▀███████░░░░\n░░█▌░░░░░░░░░░░░░░░▀██████░░░\n░█▌░░░░░░░░░░░░░░░░███████▌░░\n░█░░░░░░░░░░░░░░░░░████████░░\n▐▌░░░░░░░░░░░░░░░░░▀██████▌░░\n░▌▄███▌░░░░▀████▄░░░░▀████▌░░\n▐▀▀▄█▄░▌░░░▄██▄▄▄▀░░░░████▄▄░\n▐░▀░░═▐░░░░░░══░░▀░░░░▐▀░▄▀▌▌\n▐░░░░░▌░░░░░░░░░░░░░░░▀░▀░░▌▌\n▐░░░▄▀░░░▀░▌░░░░░░░░░░░░▌█░▌▌\n░▌░░▌░▄▄▄▄░░░▌░░░░░░░░▐░░▀▐░░\n░█░▐▄██████▄░▐░░░░░░░░█▀▄▄▀░░\n░▐░▌▌░░░░░░▀▀▄▐░░░░░░█▌░░░░░░\n░░█░░▄▀▀▀▀▄░▄═╝▄░░░▄▀░▌░░░░░░\n░░░▌▐░░░░░░▌░▀▀░░▄▀░░▐░░░░░░░\n░░░▀▄░░░░░░░░░▄▀▀░░░░█░░░░░░░\n░░░▄█▄▄▄▄▄▄▄▀▀░░░░░░░▌▌░░░░░░\n░░▄▀▌▀▌░░░░░░░░░░░░░▄▀▀▄░░░░░\n▄▀░░▌░▀▄░░░░░░░░░░▄▀░░▌░▀▄░░░\n░░░░▌█▄▄▀▄░░░░░░▄▀░░░░▌░░░▌▄▄\n░░░▄▐██████▄▄░▄▀░░▄▄▄▄▌░░░░▄░\n░░▄▌████████▄▄▄███████▌░░░░░▄\n░▄▀░██████████████████▌▀▄░░░░\n▀░░░█████▀▀░░░▀███████░░░▀▄░░\n░░░░▐█▀░░░▐░░░░░▀████▌░░░░▀▄░\n░░░░░░▌░░░▐░░░░▐░░▀▀█░░░░░░░▀\n░░░░░░▐░░░░▌░░░▐░░░░░▌░░░░░░░\n░╔╗║░╔═╗░═╦═░░░░░╔╗░░╔═╗░╦═╗░\n░║║║░║░║░░║░░░░░░╠╩╗░╠═╣░║░║░\n░║╚╝░╚═╝░░║░░░░░░╚═╝░║░║░╩═╝░```',MessageType.text);

  }));

AlphaX.addCommand({pattern: 'art smile$', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
  await message.client.sendMessage(message.jid,'```░░░░░░░░░░░███████░░░░░░░░░░░\n░░░░░░░████░░░░░░░████░░░░░░░\n░░░░░██░░░░░░░░░░░░░░░██░░░░░\n░░░██░░░░░░░░░░░░░░░░░░░██░░░\n░░█░░░░░░░░░░░░░░░░░░░░░░░█░░\n░█░░████░░░░░░░░██████░░░░░█░\n█░░█░░░██░░░░░░█░░░░███░░░░░█\n█░█░░░░░░█░░░░░█░░░░░░░█░░░░█\n█░█████████░░░░█████████░░░░█\n█░░░░░░░░░░░░░░░░░░░░░░░░░░░█\n█░░░░░░░░░░░░░░░░░░░░░░░░░░░█\n█░░░████████████████████░░░░█\n░█░░░█▓▓▓▓▓▓▓▓█████▓▓▓█░░░░█░\n░█░░░░█▓▓▓▓▓██░░░░██▓██░░░░█░\n░░█░░░░██▓▓█░░░░░░░▒██░░░░█░░\n░░░██░░░░██░░░░░░▒██░░░░██░░░\n░░░░░██░░░░███████░░░░██░░░░░\n░░░░░░░███░░░░░░░░░███░░░░░░░\n░░░░░░░░░░█████████░░░░░░░░░░```',MessageType.text);

  }));

AlphaX.addCommand({pattern: 'art wlcm$', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
  await message.client.sendMessage(message.jid,'````───▄▀▀▀▄▄▄▄▄▄▄▀▀▀▄───\n───█▒▒░░░░░░░░░▒▒█───\n────█░░█░░░░░█░░█────\n─▄▄──█░░░▀█▀░░░█──▄▄─\n█░░█─▀▄░░░░░░░▄▀─█░░█\n█▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█\n█░░╦─╦╔╗╦─╔╗╔╗╔╦╗╔╗░░█\n█░░║║║╠─║─║─║║║║║╠─░░█\n█░░╚╩╝╚╝╚╝╚╝╚╝╩─╩╚╝░░█\n█▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█```',MessageType.text);

  }));

AlphaX.addCommand({pattern: 'art heart$', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
  await message.client.sendMessage(message.jid,'```_░▒███████\n░██▓▒░░▒▓██\n██▓▒░__░▒▓██___██████\n██▓▒░____░▓███▓__░▒▓██\n██▓▒░___░▓██▓_____░▒▓██\n██▓▒░_______________░▒▓██\n██▓▒░______________░▒▓██\n██▓▒░__________░▒▓██\n_██▓▒░________░▒▓██\n_██▓▒░________░▒▓██\n_██▓▒░_____░▒▓██\n__██▓▒░__░▒▓██\n___█▓▒░░▒▓██\n_____░▒▓██\n___░▒▓██\n_░▒▓██```',MessageType.text);

  }));

AlphaX.addCommand({pattern: 'art logo$', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
  await message.client.sendMessage(message.jid,'```───────────▄▄▄▄▄▄▄▄▄───────────\n────────▄█████████████▄────────\n█████──█████████████████──█████\n▐████▌─▀███▄───────▄███▀─▐████▌\n─█████▄──▀███▄───▄███▀──▄█████─\n─▐██▀███▄──▀███▄███▀──▄███▀██▌─\n──███▄▀███▄──▀███▀──▄███▀▄███──\n──▐█▄▀█▄▀███─▄─▀─▄─███▀▄█▀▄█▌──\n───███▄▀█▄██─██▄██─██▄█▀▄███───\n────▀███▄▀██─█████─██▀▄███▀────\n───█▄─▀█████─█████─█████▀─▄█───\n───███────────███────────███───\n───███▄────▄█─███─█▄────▄███───\n───█████─▄███─███─███▄─█████───\n───█████─████─███─████─█████───\n───█████─████─███─████─█████───\n───█████─████─███─████─█████───\n───█████─████▄▄▄▄▄████─█████───\n────▀███─█████████████─███▀────\n──────▀█─███─▄▄▄▄▄─███─█▀──────\n─────────▀█▌▐█████▌▐█▀─────────\n────────────███████────────────```',MessageType.text);

  }));

AlphaX.addCommand({pattern: 'art skull$', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
  await message.client.sendMessage(message.jid,'```███████████████████████████\n███████▀▀▀░░░░░░░▀▀▀███████\n████▀░░░░░░░░░░░░░░░░░▀████\n███│░░░░░░░░░░░░░░░░░░░│███\n██▌│░░░░░░░░░░░░░░░░░░░│▐██\n██░└┐░░░░░░░░░░░░░░░░░┌┘░██\n██░░└┐░░░░░░░░░░░░░░░┌┘░░██\n██░░┌┘▄▄▄▄▄░░░░░▄▄▄▄▄└┐░░██\n██▌░│██████▌░░░▐██████│░▐██\n███░│▐███▀▀░░▄░░▀▀███▌│░███\n██▀─┘░░░░░░░▐█▌░░░░░░░└─▀██\n██▄░░░▄▄▄▓░░▀█▀░░▓▄▄▄░░░▄██\n████▄─┘██▌░░░░░░░▐██└─▄████\n█████░░▐█─┬┬┬┬┬┬┬─█▌░░█████\n████▌░░░▀┬┼┼┼┼┼┼┼┬▀░░░▐████\n█████▄░░░└┴┴┴┴┴┴┴┘░░░▄█████\n███████▄░░░░░░░░░░░▄███████\n██████████▄▄▄▄▄▄▄██████████\n███████████████████████████```',MessageType.text);

  }));

AlphaX.addCommand({pattern: 'art gun$', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
  await message.client.sendMessage(message.jid,'```░▐█▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█▄☆\n░███████████████████████\n░▓▓▓▓▓▓▓▓▓▓▓▓██▓▓▓▓▓▓▓▓◤\n╬▀░▐▓▓▓▓▓▓▌▀█░░░█▀░\n▒░░▓▓▓▓▓▓█▄▄▄▄▄█▀╬░\n░░█▓▓▓▓▓▌░▒▒▒▒▒▒▒▒▒\n░▐█▓▓▓▓▓░░▒▒▒▒▒▒▒▒▒\n░▐██████▌╬░▒▒▒▒▒▒▒▒```',MessageType.text);

  }));

AlphaX.addCommand({pattern: 'art shaggy$', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
  
  await message.client.sendMessage(message.jid,'```░░░░░░░░░░░░░░░░▄▄█▀▀██▄▄░░░░░░░\n░░░░░░░░░░░░░▄█▀▀░░░░░░░▀█░░░░░░\n░░░░░░░░░░░▄▀░░░░░░░░░░░░░█░░░░░\n░░░░░░░░░▄█░░░░░░░░░░░░░░░█░░░░░\n░░░░░░░██▀░░░░░░░▄▄▄░░▄░█▄█▄░░░░\n░░░░░▄▀░░░░░░░░░░████░█▄██░▀▄░░░\n░░░░█▀░░░░░░░░▄▄██▀░░█████░██░░░\n░░░█▀░░░░░░░░░▀█░▀█▀█▀▀▄██▄█▀░░░\n░░░██░░░░░░░░░░█░░█░█░░▀▀▄█▀░░░░\n░░░░█░░░░░█░░░▀█░░░░▄░░░░░▄█░░░░\n░░░░▀█░░░░███▄░█░░░░░░▄▄▄▄█▀█▄░░\n░░░░░▀██░░█▄▀▀██░░░░░░░░▄▄█░░▀▄░\n░░░░░░▀▀█▄░▀▄▄░▄░░░░░░░███▀░░▄██\n░░░░░░░░░▀▀▀███▀█▄░░░░░█▀░▀░░░▀█\n░░░░░░░░░░░░▄▀░░░▀█▄░░░░░▄▄░░▄▄░\n░░░▄▄▄▀▀▀▀▀█▀░░░░░█▄▀▄▄▄▄▄▄█▀▀░░\n░▄█░░░▄██▀░░░░░░░░░█▄░░░░░░░░░░░\n█▀▀░▄█░░░░░░░░░░░░░░▀▀█▄░░░░░░░░\n█░░░█░░░░░░░░░░░░░░░░░░█▄░░░░░░░```',MessageType.text);

  }));

AlphaX.addCommand({pattern: 'art bad$', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
  await message.client.sendMessage(message.jid,'```░░░░░░░░░░░█████████████\n░░░░░░░░░███░███░░░░░░██\n███░░░░░██░░░░██░██████████\n████████░░░░░░████░░░░░░░██\n████░░░░░░░░░░██░░██████████\n████░░░░░░░░░░░███░░░░░░░░░██\n████░░░░░░░░░░░██░░██████████\n████░░░░░░░░░░░░████░░░░░░░░█\n████░░░░░░░░░░░░░███░░████░░█\n█████████░░░░░░░░░░████░░░░░█\n███░░░░░██░░░░░░░░░░░░░█████\n░░░░░░░░░███░░░░░░░██████\n░░░░░░░░░░░██░░░░░░██\n░░░░░░░░░░░░███░░░░░██\n░░░░░░░░░░░░░░██░░░░██\n░░░░░░░░░░░░░░░███░░░██\n░░░░░░░░░░░░░░░░░██░░░█\n░░░░░░░░░░░░░░░░░░█░░░█\n░░░░░░░░░░░░░░░░░░██░██\n░░░░░░░░░░░░░░░░░░░███```',MessageType.text);

  }));

AlphaX.addCommand({pattern: 'art santa$', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
  await message.client.sendMessage(message.jid,'```______(█)\n___██████\n_ ████████\n_███████████\n_ (░░░░░░░)░░░)\n_(░(░█░░█░)░░░)\n (░░(░░●░░░)░░░)\n (░░░░◡░░)░░░░)\n_██(░░░░░░░░░░)██\n_███(░░░░░░░░░)███\n████ ██(░░░)██ ████\n████ █████████ ███\n████ ████░████ ███\n(░░)_ ▓▓▓▓▌▓▐▓▓▓_(░░)\n(██) ███████████ (██)\n___█████░█████_▓▓▓/\n_█████-,█████▓▓▓▓▓)\n_█████-,█████▓▓▓▓▓)\n_(░░░░░░)(░░░░░) ▓▓▓▓)\n____(███)_(███)▓▓▓▓▓▓)\n____ (████)_(████)▓▓▓▓▓)```',MessageType.text);

  }));

AlphaX.addCommand({pattern: 'art hacker$', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {

  await message.client.sendMessage(message.jid,'```███████████████████████████████\n████╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬████\n██╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬██\n█╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬█\n█╬╬╬███████╬╬╬╬╬╬╬╬╬███████╬╬╬█\n█╬╬██╬╬╬╬███╬╬╬╬╬╬╬███╬╬╬╬██╬╬█\n█╬██╬╬╬╬╬╬╬██╬╬╬╬╬██╬╬╬╬╬╬╬██╬█\n█╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬█\n█╬╬╬╬█████╬╬╬╬╬╬╬╬╬╬╬█████╬╬╬╬█\n█╬╬█████████╬╬╬╬╬╬╬█████████╬╬█\n█╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬█\n█╬╬╬╬╬╬╬╬╬╬╬╬╬╬█╬╬╬╬╬╬╬╬╬╬╬╬╬╬█\n█╬╬╬╬╬╬╬╬╬╬╬╬╬╬█╬╬╬╬╬╬╬╬╬╬╬╬╬╬█\n█╬╬╬╬╬╬╬╬╬╬╬╬╬╬█╬╬╬╬╬╬╬╬╬╬╬╬╬╬█\n█╬╬╬▓▓▓▓╬╬╬╬╬╬╬█╬╬╬╬╬╬╬▓▓▓▓╬╬╬█\n█╬╬▓▓▓▓▓▓╬╬█╬╬╬█╬╬╬█╬╬▓▓▓▓▓▓╬╬█\n█╬╬╬▓▓▓▓╬╬██╬╬╬█╬╬╬██╬╬▓▓▓▓╬╬╬█\n█╬╬╬╬╬╬╬╬██╬╬╬╬█╬╬╬╬██╬╬╬╬╬╬╬╬█\n█╬╬╬╬╬████╬╬╬╬███╬╬╬╬████╬╬╬╬╬█\n█╬╬╬╬╬╬╬╬╬╬╬╬╬███╬╬╬╬╬╬╬╬╬╬╬╬╬█\n██╬╬█╬╬╬╬╬╬╬╬█████╬╬╬╬╬╬╬╬█╬╬██\n██╬╬██╬╬╬╬╬╬███████╬╬╬╬╬╬██╬╬██\n██╬╬▓███╬╬╬████╬████╬╬╬███▓╬╬██\n███╬╬▓▓███████╬╬╬███████▓▓╬╬███\n███╬╬╬╬▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓╬╬╬╬███\n████╬╬╬╬╬╬╬╬╬╬███╬╬╬╬╬╬╬╬╬╬████\n█████╬╬╬╬╬╬╬╬╬╬█╬╬╬╬╬╬╬╬╬╬█████\n██████╬╬╬╬╬╬╬╬███╬╬╬╬╬╬╬╬██████\n███████╬╬╬╬╬╬╬███╬╬╬╬╬╬╬███████\n████████╬╬╬╬╬╬███╬╬╬╬╬╬████████\n█████████╬╬╬╬╬███╬╬╬╬╬█████████\n███████████╬╬╬╬█╬╬╬╬███████████\n███████████████████████████████```',MessageType.text);

  }));

AlphaX.addCommand({pattern: 'art fail$', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {

  await message.client.sendMessage(message.jid,'```▄██████████████▄▐█▄▄▄▄█▌\n██████▌▄▌▄▐▐▌███▌▀▀██▀▀\n████▄█▌▄▌▄▐▐▌▀███▄▄█▌\n▄▄▄▄▄██████████████▀```',MessageType.text);

  }));

AlphaX.addCommand({pattern: 'art cat$', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {

  await message.client.sendMessage(message.jid,'```──────▄▀▄─────▄▀▄\n─────▄█░░▀▀▀▀▀░░█▄\n─▄▄──█░░░░░░░░░░░█──▄▄\n█▄▄█─█░░▀░░┬░░▀░░█─█▄▄█```',MessageType.text);

  }));

AlphaX.addCommand({pattern: 'art human$', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {

  await message.client.sendMessage(message.jid,'```───────────────▄▄───▐█\n───▄▄▄───▄██▄──█▀───█─▄\n─▄██▀█▌─██▄▄──▐█▀▄─▐█▀\n▐█▀▀▌───▄▀▌─▌─█─▌──▌─▌\n▌▀▄─▐──▀▄─▐▄─▐▄▐▄─▐▄─▐▄```',MessageType.text);

  }));

AlphaX.addCommand({pattern: 'art run$', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {

  await message.client.sendMessage(message.jid,'```────██──────▀▀▀██\n──▄▀█▄▄▄─────▄▀█▄▄▄\n▄▀──█▄▄──────█─█▄▄\n─▄▄▄▀──▀▄───▄▄▄▀──▀▄\n─▀───────▀▀─▀───────▀▀```',MessageType.text);

  }));

AlphaX.addCommand({pattern: 'art bad$', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {

  await message.client.sendMessage(message.jid,'```O────────────────O\n█▓██▄────────────█\n█▓▓░▀▄▀░░░░░░░░░░█\n█▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█\n█────────────────█```',MessageType.text);

  }));

AlphaX.addCommand({pattern: 'art hello$', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {

  await message.client.sendMessage(message.jid,'```╔┓┏╦━━╦┓╔┓╔━━╗╔╗\n║┗┛║┗━╣┃║┃║╯╰║║║\n║┏┓║┏━╣┗╣┗╣╰╯║╠╣\n╚┛┗╩━━╩━╩━╩━━╝╚╝```',MessageType.text);

  }));

AlphaX.addCommand({pattern: 'art love$', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {

  await message.client.sendMessage(message.jid,'```████████████████████████\n█▄─▄███─▄▄─█▄─█─▄█▄─▄▄─█\n██─██▀█─██─██─█─███─▄█▀█\n▀▄▄▄▄▄▀▄▄▄▄▀▀▄▄▄▀▀▄▄▄▄▄▀```',MessageType.text);

  }));

AlphaX.addCommand({pattern: 'art 2love$', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {

  await message.client.sendMessage(message.jid,'```█───▄▀▀▀▀▄─▐█▌▐█▌▐██\n█──▐▄▄────▌─█▌▐█─▐▌─\n█──▐█▀█─▀─▌─█▌▐█─▐██\n█──▐████▄▄▌─▐▌▐▌─▐▌─\n███─▀████▀───██──▐██```',MessageType.text);

  }));

AlphaX.addCommand({pattern: 'art pig$', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {

  await message.client.sendMessage(message.jid,'```▂╱▔▔╲╱▔▔▔▔╲╱▔▔╲▂\n╲┈▔╲┊╭╮┈┈╭╮┊╱▔┈╱\n┊▔╲╱▏┈╱▔▔╲┈▕╲╱▔┊\n┊┊┊┃┈┈▏┃┃▕┈┈┃┊┊┊\n┊┊┊▏╲┈╲▂▂╱┈╱▕┊┊┊```',MessageType.text);

  }));

AlphaX.addCommand({pattern: 'art dog$', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {

  await message.client.sendMessage(message.jid,'```╥━━━━━━━━╭━━╮━━┳\n╢╭╮╭━━━━━┫┃▋▋━▅┣\n╢┃╰┫┈┈┈┈┈┃┃┈┈╰┫┣\n╢╰━┫┈┈┈┈┈╰╯╰┳━╯┣\n╢┊┊┃┏┳┳━━┓┏┳┫┊┊┣\n╨━━┗┛┗┛━━┗┛┗┛━━┻```',MessageType.text);

  }));

AlphaX.addCommand({pattern: 'art music$', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {

  await message.client.sendMessage(message.jid,'```────█▀█▄▄▄▄─────██▄\n────█▀▄▄▄▄█─────█▀▀█\n─▄▄▄█─────█──▄▄▄█\n██▀▄█─▄██▀█─███▀█\n─▀▀▀──▀█▄█▀─▀█▄█▀```',MessageType.text);

  }));

AlphaX.addCommand({pattern: 'art lock$', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {

  await message.client.sendMessage(message.jid,'```──▄▀▀▀▄───────────────\n──█───█───────────────\n─███████─────────▄▀▀▄─\n░██─▀─██░░█▀█▀▀▀▀█░░█░\n░███▄███░░▀░▀░░░░░▀▀░░``` \n \n \n___________________\n ╮╭┻┻╮╭┻┻╮╭▕╮╲\n▕╯┃╭╮┃┃╭╮┃╰▕╯╭▏\n▕╭┻┻┻┛┗┻┻┛  ▕ ╰▏\n▕╰━━━┓┈┈┈╭╮▕╭╮▏\n▕╭╮╰┳┳┳┳╯╰╯▕╰╯▏▕╰╯┈┗┛┗┛┈╭╮▕╮┈▏```',MessageType.text);

  }));

AlphaX.addCommand({pattern: 'art plane$', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {

  await message.client.sendMessage(message.jid,'```░░░░░░░░░░█\n░░░░░░░░▄▄█▄▄\n░░░░▀▀▀██▀▀▀██▀▀▀\n▄▄▄▄▄▄▄███████▄▄▄▄▄▄▄\n░░█▄█░░▀██▄██▀░░█▄█```',MessageType.text);

  }));

AlphaX.addCommand({pattern: 'art watch$', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {

  await message.client.sendMessage(message.jid,'```╦╦╦╦╦╦▄▀▀▀▀▀▀▄╦╦╦╦╦╦\n▒▓▒▓▒█╗░░▐░░░╔█▒▓▒▓▒\n▒▓▒▓▒█║░░▐▄▄░║█▒▓▒▓▒\n▒▓▒▓▒█╝░░░░░░╚█▒▓▒▓▒\n╩╩╩╩╩╩▀▄▄▄▄▄▄▀╩╩╩╩╩╩```',MessageType.text);

  }));

AlphaX.addCommand({pattern: 'art tv$', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {

  await message.client.sendMessage(message.jid,'```░▀▄░░▄▀\n▄▄▄██▄▄▄▄▄░▀█▀▐░▌\n█▒░▒░▒░█▀█░░█░▐░▌\n█░▒░▒░▒█▀█░░█░░█\n█▄▄▄▄▄▄███══════```',MessageType.text);

  }));

AlphaX.addCommand({pattern: 'art happy$', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {

  await message.client.sendMessage(message.jid,'```╔══╗░░░░╔╦╗░░╔═════╗\n║╚═╬════╬╣╠═╗║░▀░▀░║\n╠═╗║╔╗╔╗║║║╩╣║╚═══╝║\n╚══╩╝╚╝╚╩╩╩═╝╚═════╝```',MessageType.text);

  }));

AlphaX.addCommand({pattern: 'art apple$', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {

  await message.client.sendMessage(message.jid,'```┊┊┊┊┊┊┊╱▏┊┊┊┊┊┊┊\n┊┊┊┊┊┊▕╱┊┊┊┊┊┊┊┊\n┊┊┊╱▔▔╲┊╱▔▔╲┊┊┊┊\n┊┊▕┈┈┈┈▔┈┈┈╱┊┊┊┊\n┊┊▕┈┈┈┈┈┈┈┈╲┊┊┊┊\n┊┊┊╲┈┈┈┈┈┈┈╱┊┊┊┊\n┊┊┊┊╲▂▂▂▂▂╱┊┊┊┊┊```',MessageType.text);

  }));

AlphaX.addCommand({pattern: 'art mug$', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {

  await message.client.sendMessage(message.jid,'```█▄▀▄▀▄█\n█░▀░▀░█▄\n█░▀░░░█─█\n█░░░▀░█▄▀\n▀▀▀▀▀▀▀```',MessageType.text);

  }));

AlphaX.addCommand({pattern: 'art snake$', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {

  await message.client.sendMessage(message.jid,'```▄▄▀█▄───▄───────▄\n▀▀▀██──███─────███\n░▄██▀░█████░░░█████░░\n███▀▄███░███░███░███░▄\n▀█████▀░░░▀███▀░░░▀██▀```',MessageType.text);

  }));

AlphaX.addCommand({pattern: 'art paris$', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {

  await message.client.sendMessage(message.jid,'```░░░░░█\n░░░░▄█▄░░╔╗╔╗╔╗─╦╔╗\n░░░▄█▀█▄░╠╝╠╣╠╩╗║╚╗\n░░▄█▄▄▄█▄╚═╩╩╩─╩╩╚╝\n▄██▀░░░▀██▄```',MessageType.text);

  }));

AlphaX.addCommand({pattern: 'art warn$', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {

  await message.client.sendMessage(message.jid,'```╭╮╭╮╭┳━━━┳━━━┳━╮╱╭┳━━┳━╮╱╭┳━━━╮╭┳┳┳╮\n┃┃┃┃┃┃╭━╮┃╭━╮┃┃╰╮┃┣┫┣┫┃╰╮┃┃╭━╮┃┃┃┃┃┃\n┃┃┃┃┃┃┃╱┃┃╰━╯┃╭╮╰╯┃┃┃┃╭╮╰╯┃┃╱╰╯┃┃┃┃┃\n┃╰╯╰╯┃╰━╯┃╭╮╭┫┃╰╮┃┃┃┃┃┃╰╮┃┃┃╭━╮╰┻┻┻╯\n╰╮╭╮╭┫╭━╮┃┃┃╰┫┃╱┃┃┣┫┣┫┃╱┃┃┃╰┻━┃╭┳┳┳╮\n╱╰╯╰╯╰╯╱╰┻╯╰━┻╯╱╰━┻━━┻╯╱╰━┻━━━╯╰┻┻┻╯```',MessageType.text);

  }));

AlphaX.addCommand({pattern: 'art del$', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {

  await message.client.sendMessage(message.jid,'```▒█▀▀▄ █▀▀ █░░ █▀▀ ▀▀█▀▀ █▀▀ \n▒█░▒█ █▀▀ █░░ █▀▀ ░░█░░ █▀▀ \n▒█▄▄▀ ▀▀▀ ▀▀▀ ▀▀▀ ░░▀░░ ▀▀▀```',MessageType.text);

  }));

AlphaX.addCommand({pattern: 'art mk$', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {

  await message.client.sendMessage(message.jid,'```███╗░░░███╗ ██╗░░██╗\n████╗░████║ ██║░██╔╝\n██╔████╔██║ █████═╝░\n██║╚██╔╝██║ ██╔═██╗░\n██║░╚═╝░██║ ██║░╚██╗\n╚═╝░░░░░╚═╝ ╚═╝░░╚═╝```',MessageType.text);

  }));

AlphaX.addCommand({pattern: 'art truck$', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {

  await message.client.sendMessage(message.jid,'```──────▄▌▐▀▀▀▀▀▀▀▀▀▀▀▀▌\n───▄▄██▌█░░░░░░░░░░░░▐\n▄▄▄▌▐██▌█░░░░░░░░░░░░▐\n███████▌█▄▄▄▄▄▄▄▄▄▄▄▄▌\n▀❍▀▀▀▀▀▀▀❍❍▀▀▀▀▀▀❍❍▀```',MessageType.text);

  }));

AlphaX.addCommand({pattern: 'art game$', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {

  await message.client.sendMessage(message.jid,'```─▄▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▄\n█░░░█░░░░░░░░░░▄▄░██░█\n█░▀▀█▀▀░▄▀░▄▀░░▀▀░▄▄░█\n█░░░▀░░░▄▄▄▄▄░░██░▀▀░█\n─▀▄▄▄▄▄▀─────▀▄▄▄▄▄▄▀```',MessageType.text);

  }));

AlphaX.addCommand({pattern: 'art ship$', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {

  await message.client.sendMessage(message.jid,'```───────▓▓╬▓\n──────▓▓▓║▓▓\n─────▓▓▓▓╬▓▓▓▓\n░░▄░▓▓▓▓▓║▓▓▓▓▓░░░░░\n░▀████████████████▀░░```',MessageType.text);

  }));

AlphaX.addCommand({pattern: 'art duck$', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {

  await message.client.sendMessage(message.jid,'```──────────▄██▄▄\n─▄▄█████▄─██▀\n▀█████████▄██▄\n▒▒▀██████████▀▒\n▒▒▒▒▒█▄█▄▄▒▒▒▒▒```',MessageType.text);

  }));

AlphaX.addCommand({pattern: 'art ant$', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {

  await message.client.sendMessage(message.jid,'```░░╚══╗░╔═╔════╝\n╚═╦═╗╠═╩═╩╗╔═╦═╗\n░░║▒╠╣▒▒▒▒╠╣▒║▒║\n╔═╩═╝╠═╦═╦╝╚═╩═╝░░╔══╝░╚═╚════╗```',MessageType.text);

  }));

AlphaX.addCommand({pattern: 'art drink$', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {

  await message.client.sendMessage(message.jid,'```░░░░░▓███▓\n░░░░▓█████▓\n░░░░▓█████▓\n░░░░░▓███▓\n░░░░ *;;;;;;;;;*\n░░░░* ;;;;;;;;;*\n░░░ * ;;;;;;;;;;;*\n░░░* ;;;;;;;;;;;;*\n░░░░▓█████▓\n░░░░▓█████▓\n░░░░▓█████▓\n░░░▓███████▓\n░░▓█████████▓\n░▓███████████▓\n▓█████████████▓\n▓███░░░░░░░▀▀▀▓\n▓███░░░░████████████\n▓███░░░░█▒▒▒▒▒▒▒▒▒▒█\n▓███░░░░░█▒▒▒▒▒▒▒▒█\n▓███░░░░░░█▒▒▒▒▒▒█\n▓███░░░░░░░█▒▒▒▒█\n▓███░░░░░░░░████\n▓███░░░░░░░░▌██▌\n▓███░░░░░░░░▌██▌\n▓███░░░░░░░░▌██▌\n▓███░░░░░░░░▌██▌\n░▓██░░░░░░░▓████▓\n░▓████▓▓█████████▓```',MessageType.text);

  }));

AlphaX.addCommand({pattern: 'art what$', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {

  await message.client.sendMessage(message.jid,'```┌┐┌┐┌┐┌┐▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒┌┐▒┌───┐\n││││││││▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒┌┘└┐│┌─┐│\n│││││││└─┬──┬──┬──┬──┬──┼┐┌┘└┘┌┘│\n│└┘└┘││┌┐│┌┐│┌┐│┌┐│┌┐│┌┐│││▒▒▒│┌┘\n└┐┌┐┌┘││││┌┐│┌┐│┌┐│┌┐│┌┐││└┐▒▒┌┐▒\n▒└┘└┘▒└┘└┴┘└┴┘└┴┘└┴┘└┴┘└┘└─┘▒▒└┘▒```',MessageType.text);

  }));

AlphaX.addCommand({pattern: 'art confused$', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {

  await message.client.sendMessage(message.jid,'```╔═╗▒▒▒▒▒▒▒╔═╗▒▒▒╔═╗▒▒▒▒╔╗\n║╔╝╔═╗╔═╦╗║═╣╔╦╗║═╣╔═╗╔╝║\n║╚╗║╬║║║║║║╔╝║║║╠═║║╩╣║╬║\n╚═╝╚═╝╚╩═╝╚╝▒╚═╝╚═╝╚═╝╚═╝```',MessageType.text);

  }));

AlphaX.addCommand({pattern: 'art batterylow$', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {

  await message.client.sendMessage(message.jid,'```╔════════════════════╗\n║║██░░░░░░░░░░░░░░░░░░╚╗\n║║██░░░░░Battery Low ░░░░░\n║║██░░░░░░░░░░░░░░░░░░╔╝\n╝════════════════════╝```',MessageType.text);

  }));

AlphaX.addCommand({pattern: 'art wtf$', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {

  await message.client.sendMessage(message.jid,'```┏┓┏┓┏┓┏━━━┓┏━━━┓\n┃┃┃┃┃┃┗┓╱┏┛┃╱┏━┛\n┃┗┛┗┛┃┈┃╱┃┈┃╱┗┓\n┃╱╱╱╱┃┈┃╱┃┈┃╱┏┛\n┗━━━━┛◯┗━┛◯┗━┛◯```',MessageType.text);

  }));

AlphaX.addCommand({pattern: 'art smiles$', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {

  await message.client.sendMessage(message.jid,'```╲╲╭━━━━━━━╮╱╱\n╲╭╯╭━╮┈╭━╮╰╮╱\n╲┃┈┃┈▊┈┃┈▊┈┃╱\n╲┃┈┗━┛┈┗━┛┈┃╱\n╱┃┈┏━━━━━┓┈┃╲\n╱┃┈┃┈┈╭━╮┃┈┃╲\n╱╰╮╰━━┻━┻╯╭╯╲```',MessageType.text);

  }));

AlphaX.addCommand({pattern: 'art hbd$', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {

  await message.client.sendMessage(message.jid,'```Wait For Next Update```',MessageType.text);

  }));

AlphaX.addCommand({pattern: 'art 99$', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {

  await message.client.sendMessage(message.jid,'```██████████████]99%```',MessageType.text);

  }));

AlphaX.addCommand({pattern: 'art vup$', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {

  await message.client.sendMessage(message.jid,'```Music♩♪♫♬ Volume: ▁ ▂ ▃ ▄ ▅ ▆ █ 100 %```',MessageType.text);

  }));

AlphaX.addCommand({pattern: 'art eatyou$', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {

  await message.client.sendMessage(message.jid,'```█████████\n█▄█████▄█\n█▼▼▼▼▼\n█\n I will eat you!\n█▲▲▲▲▲\n█████████\n ██ ██```',MessageType.text);

  }));

AlphaX.addCommand({pattern: 'art ghost$', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {

  await message.client.sendMessage(message.jid,'```▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒\n▒▒▒▒▒▒▒▒▄▄▄▄▄▄▄▄▒▒▒▒▒▒\n▒▒█▒▒▒▄██████████▄▒▒▒▒\n▒█▐▒▒▒████████████▒▒▒▒\n▒▌▐▒▒██▄▀██████▀▄██▒▒▒\n▐┼▐▒▒██▄▄▄▄██▄▄▄▄██▒▒▒\n▐┼▐▒▒██████████████▒▒▒\n▐▄▐████─▀▐▐▀█─█─▌▐██▄▒\n▒▒█████──────────▐███▌\n▒▒█▀▀██▄█─▄───▐─▄███▀▒\n▒▒█▒▒███████▄██████▒▒▒\n▒▒▒▒▒██████████████▒▒▒\n▒▒▒▒▒██████████████▒▒▒\n▒▒▒▒▒█████████▐▌██▌▒▒▒\n▒▒▒▒▒▐▀▐▒▌▀█▀▒▐▒█▒▒▒▒▒\n▒▒▒▒▒▒▒▒▒▐▒▒▒▒▌▒▒▒▒▒▒▒\n▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒```',MessageType.text);

  }));

AlphaX.addCommand({pattern: 'art kidding$', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {

  await message.client.sendMessage(message.jid,'```░░▄▀░░░░░░░░░░░░░░░▀▀▄▄░░░░░\n░░▄▀░░░░░░░░░░░░░░░░░░░░▀▄░░░\n░▄▀░░░░░░░░░░░░░░░░░░░░░░░█░░\n░█░░░░░░░░░░░░░░░░░░░░░░░░░█░\n▐░░░░░░░░░░░░░░░░░░░░░░░░░░░█\n█░░░░▀▀▄▄▄▄░░░▄▌░░░░░░░░░░░░▐\n▌░░░░░▌░░▀▀█▀▀░░░▄▄░░░░░░░▌░▐\n▌░░░░░░▀▀▀▀░░░░░░▌░▀██▄▄▄▀░░▐\n▌░░░░░░░░░░░░░░░░░▀▄▄▄▄▀░░░▄▌\n▐░░░░▐░░░░░░░░░░░░░░░░░░░░▄▀░\n░█░░░▌░░▌▀▀▀▄▄▄▄░░░░░░░░░▄▀░░\n░░█░░▀░░░░░░░░░░▀▌░░▌░░░█░░░░\n░░░▀▄░░░░░░░░░░░░░▄▀░░▄▀░░░░░\n░░░░░▀▄▄▄░░░░░░░░░▄▄▀▀░░░░░░░\n░░░░░░░░▐▌▀▀▀▀▀▀▀▀░░░░░░░░░░░\n░░░░░░░░█░░░░░░░░░░░░░░░░░░░░\n░░╔═╗╔═╗╔═╗░░░░░║░║╔═╗║░║░░░░\n░░╠═╣╠╦╝╠╣░░░░░░╚╦╝║░║║░║░░░░\n░░║░║║╚═╚═╝░░░░░░║░╚═╝╚═╝░░░░\n║╔═░╦░╦═╗╦═╗╦╔╗║╔═╗░░╔╦╗╔═╗╔╗\n╠╩╗░║░║░║║░║║║║║║═╗░░║║║╠╣░╔╝\n║░╚░╩░╩═╝╩═╝╩║╚╝╚═╝░░║║║╚═╝▄░```',MessageType.text);

  }));

AlphaX.addCommand({pattern: 'art hi$', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {

  await message.client.sendMessage(message.jid,'```░░░░░░░░░░░░░▄▐░░░░\n░HI!!░░▄▄▄░░▄██▄░░░\n░░░░░░▐▀█▀▌░░░░▀█▄░\n░░░░░░▐█▄█▌░░░░░░▀█▄\n░░░░░░░▀▄▀░░░▄▄▄▄▄▀▀\n░░░░░▄▄▄██▀▀▀▀░░░░░\n░░░░█▀▄▄▄█░▀▀░░░░░░\n░░░░▌░▄▄▄▐▌▀▀▀░░░░░\n░▄░▐░░░▄▄░█░▀▀░░░░░\n░▀█▌░░░▄░▀█▀░▀░░░░░\n░░░░░░░░▄▄▐▌▄▄░░░░░\n░░░░░░░░▀███▀█▄░░░░\n░░░░░░░▐▌▀▄▀▄▀▐░░░░\n░░░░░░░▐▀░░░░░░▐▌░░\n░░░░░░░█░░░░░░░░█░░\n░░░░░░▐▌░░░░░░░░░█░```',MessageType.text);

  }));

AlphaX.addCommand({pattern: 'art up$', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {

  await message.client.sendMessage(message.jid,'```─────▄▀▀▄──────────\n─────█──█──────────\n─────█──█▄▄────────\n─────█──█──█▀▀▄▄───\n─▄▄▄─█──█──█──█─▀▄─\n─█──▀█────────▀──█─\n──▀▄─█───────────█─\n───▀▄───────────█──\n────▀▄──────────█──\n─────▀▄────────█───\n──────█▄▄▄▄▄▄▄▄█───```',MessageType.text);

  }));

AlphaX.addCommand({pattern: 'art like$', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {

  await message.client.sendMessage(message.jid,'```░░░░░░▄▄\n░░░░░█░░█\n▄▄▄▄▄█░░█▄▄▄\n▓▓▓▓█░░░░░░░█\n▓▓▓▓█░░░░░░░░█\n▓▓▓▓█░░░░░░░░█\n▓▓▓▓█░░░░░░░░█\n███▀▀▀███████```',MessageType.text);

  }));

AlphaX.addCommand({pattern: 'art iphone$', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {

  await message.client.sendMessage(message.jid,'```─────────▄────\n───────▐█▌────\n───▄▄▄─▀─▄▄▄──\n─▄█████▄█████▄\n▐███████████▀─\n▐██████████───\n─███████████▄─\n──███████████▀\n───▀██▀─▀██▀──\n──────────────\n▀▐▀█▐────▄──▄▄\n█▐▀▀▐█▐█▌▐█▌▌█\n█▐──▐▐▐▄▌▐▐▌█▄\n```',MessageType.text);

  }));

AlphaX.addCommand({pattern: 'art wtzp$', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {

  await message.client.sendMessage(message.jid,'```──▄▄█▀▀▀▀▀█▄▄──\n▄█▀░░▄▄░░░░░▀█▄\n█░░░███░░░░░░░█\n█░░░██▄░░░░░░░█\n█░░░░▀██▄░██░░█\n█░░░░░░▀███▀░░█\n▀█▄░░░░░░░░░▄█▀\n─▄█░░░▄▄▄▄█▀▀──\n─█░░▄█▀────────\n─▀▀▀▀──────────\n.<> Whatsapp <>.```',MessageType.text);

  }));

AlphaX.addCommand({pattern: 'art tiktok$', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {

  await message.client.sendMessage(message.jid,'```████████▀▀▀████\n████████────▀██\n████████──█▄──█\n███▀▀▀██──█████\n█▀──▄▄██──█████\n█──█████──█████\n█▄──▀▀▀──▄█████\n███▄▄▄▄▄███████\n╔══╦╦╦╗╔══╦═╦╦╗\n╚╗╔╣║═╣╚╗╔╣║║═╣\n═╚╝╚╩╩╝═╚╝╚═╩╩╝\n▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀```',MessageType.text);

  }));

AlphaX.addCommand({pattern: 'art gm$', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
  
  await message.client.sendMessage(message.jid,'```█████▀█████████████████\n█─▄▄▄▄█─▄▄─█─▄▄─█▄─▄▄▀█\n█─██▄─█─██─█─██─██─██─█\n▀▄▄▄▄▄▀▄▄▄▄▀▄▄▄▄▀▄▄▄▄▀▀\n \n╔═╗╔═╗\n║║╚╝║║ \n║╔╗╔╗╠══╦═╦═╗╔╦═╗╔══╗\n║║║║║║╔╗║╔╣╔╗╬╣╔╗╣╔╗║\n║║║║║║╚╝║║║║║║║║║║╚╝║\n╚╝╚╝╚╩══╩╝╚╝╚╩╩╝╚╩═╗║\n─────────────────╔═╝║\n─────────────────╚══╝```',MessageType.text);

  }));


AlphaX.addCommand({pattern: 'art ga$', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
  
  await message.client.sendMessage(message.jid,'```░█▀▀█ █▀▀█ █▀▀█ █▀▀▄ \n░█─▄▄ █──█ █──█ █──█ \n░█▄▄█ ▀▀▀▀ ▀▀▀▀ ▀▀▀─\n \n╭━━━╮╭━┳╮\n┃╭━╮┃┃╭╯╰╮ \n┃┃╱┃┣╯╰╮╭╋━━┳━┳━╮╭━━┳━━┳━╮\n┃╰━╯┣╮╭┫┃┃┃━┫╭┫╭╮┫╭╮┃╭╮┃╭╮╮\n┃╭━╮┃┃┃┃╰┫┃━┫┃┃┃┃┃╰╯┃╰╯┃┃┃┃\n╰╯╱╰╯╰╯╰━┻━━┻╯╰╯╰┻━━┻━━┻╯╰╯```',MessageType.text);

  }));


AlphaX.addCommand({pattern: 'art ge$', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
  
  await message.client.sendMessage(message.jid,'```┏━━┓╋╋╋╋┏┓\n┃┏━╋━┳━┳┛┃\n┃┗┓┃╋┃╋┃╋┃\n┗━━┻━┻━┻━┛\n \n▒█▀▀▀ ▀█░█▀ █▀▀ █▀▀▄ ░▀░ █▀▀▄ █▀▀▀ \n▒█▀▀▀ ░█▄█░ █▀▀ █░░█ ▀█▀ █░░█ █░▀█ \n▒█▄▄▄ ░░▀░░ ▀▀▀ ▀░░▀ ▀▀▀ ▀░░▀ ▀▀▀▀```',MessageType.text);

  }));

AlphaX.addCommand({pattern: 'art gn$', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
  
  await message.client.sendMessage(message.jid,'```╭━━━╮╱╱╱╱╱╱╱╭╮\n┃╭━╮┃╱╱╱╱╱╱╱┃┃\n┃┃╱╰╋━━┳━━┳━╯┃\n┃┃╭━┫╭╮┃╭╮┃╭╮┃\n┃╰┻━┃╰╯┃╰╯┃╰╯┃\n╰━━━┻━━┻━━┻━━╯\n\n╔═╗─╔╗───╔╗─╔╗\n║║╚╗║║───║║╔╝╚╗\n║╔╗╚╝╠╦══╣╚╩╗╔╝\n║║╚╗║╠╣╔╗║╔╗║║\n║║─║║║║╚╝║║║║╚╗\n╚╝─╚═╩╩═╗╠╝╚╩═╝\n──────╔═╝║\n──────╚══╝```',MessageType.text);

  }));
 
AlphaX.addCommand({pattern: 'art a$', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
  
  await message.client.sendMessage(message.jid,'```░█████╗░\n██╔══██╗\n███████║\n██╔══██║\n██║░░██║\n╚═╝░░╚═╝```',MessageType.text);

  }));

AlphaX.addCommand({pattern: 'art b$', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
  
  await message.client.sendMessage(message.jid,'```██████╗░\n██╔══██╗\n██████╦╝\n██╔══██╗\n██████╦╝\n╚═════╝░```',MessageType.text);

  }));

AlphaX.addCommand({pattern: 'art c$', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
  
  await message.client.sendMessage(message.jid,'```░█████╗░\n██╔══██╗\n██║░░╚═╝\n██║░░██╗\n╚█████╔╝\n░╚════╝░```',MessageType.text);

  }));

AlphaX.addCommand({pattern: 'art d$', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
  
  await message.client.sendMessage(message.jid,'```██████╗░\n██╔══██╗\n██║░░██║\n██║░░██║\n██████╔╝\n╚═════╝░```',MessageType.text);

  }));

AlphaX.addCommand({pattern: 'art e$', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
  
  await message.client.sendMessage(message.jid,'```███████╗\n██╔════╝\n█████╗░░\n██╔══╝░░\n███████╗\n╚══════╝```',MessageType.text);

  }));

AlphaX.addCommand({pattern: 'art f$', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
  
  await message.client.sendMessage(message.jid,'```███████╗\n██╔════╝\n█████╗░░\n██╔══╝░░\n██║░░░░░\n╚═╝░░░░░```',MessageType.text);

  }));

AlphaX.addCommand({pattern: 'art g$', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
  
  await message.client.sendMessage(message.jid,'```░██████╗░\n██╔════╝░\n██║░░██╗░\n██║░░╚██╗\n╚██████╔╝\n░╚═════╝░```',MessageType.text);

  }));

AlphaX.addCommand({pattern: 'art h$', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
  
  await message.client.sendMessage(message.jid,'```██╗░░██╗\n██║░░██║\n███████║\n██╔══██║\n██║░░██║\n╚═╝░░╚═╝```',MessageType.text);

  }));

AlphaX.addCommand({pattern: 'art ı$', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
  
  await message.client.sendMessage(message.jid,'```██╗\n██║\n██║\n██║\n██║\n╚═╝```',MessageType.text);

  }));

AlphaX.addCommand({pattern: 'art i$', fromMe: WType, dontAddCommandList: true,}, (async (message, match) => {
  
  await message.client.sendMessage(message.jid,'```██╗\n╚═╝\n██╗\n██║\n██║\n██║\n██║\n╚═╝```',MessageType.text);

  }));

AlphaX.addCommand({pattern: 'art j$', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
  
  await message.client.sendMessage(message.jid,'```░░░░░██╗\n░░░░░██║\n░░░░░██║\n██╗░░██║\n╚█████╔╝\n░╚════╝░```',MessageType.text);

  }));

AlphaX.addCommand({pattern: 'art k$', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
  
  await message.client.sendMessage(message.jid,'```██╗░░██╗\n██║░██╔╝\n█████═╝░\n██╔═██╗░\n██║░╚██╗\n╚═╝░░╚═╝```',MessageType.text);

  }));

AlphaX.addCommand({pattern: 'art l$', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
  
  await message.client.sendMessage(message.jid,'```██╗░░░░░\n██║░░░░░\n██║░░░░░\n██║░░░░░\n███████╗\n╚══════╝```',MessageType.text);

  }));

AlphaX.addCommand({pattern: 'art m$', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
  
  await message.client.sendMessage(message.jid,'```███╗░░░███╗\n████╗░████║\n██╔████╔██║\n██║╚██╔╝██║\n██║░╚═╝░██║\n╚═╝░░░░░╚═╝```',MessageType.text);

  }));

AlphaX.addCommand({pattern: 'art n$', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
  
  await message.client.sendMessage(message.jid,'```███╗░░██╗\n████╗░██║\n██╔██╗██║\n██║╚████║\n██║░╚███║\n╚═╝░░╚══╝```',MessageType.text);

  }));

AlphaX.addCommand({pattern: 'art o$', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
  
  await message.client.sendMessage(message.jid,'```░█████╗░\n██╔══██╗\n██║░░██║\n██║░░██║\n╚█████╔╝\n░╚════╝░```',MessageType.text);

  }));

AlphaX.addCommand({pattern: 'art p$', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
  
  await message.client.sendMessage(message.jid,'```██████╗░\n██╔══██╗\n██████╔╝\n██╔═══╝░\n██║░░░░░\n╚═╝░░░░░```',MessageType.text);

  }));

AlphaX.addCommand({pattern: 'art q$', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
  
  await message.client.sendMessage(message.jid,'```░██████╗░\n██╔═══██╗\n██║██╗██║\n╚██████╔╝\n░╚═██╔═╝░\n░░░╚═╝░░░```',MessageType.text);

  }));

AlphaX.addCommand({pattern: 'art r$', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
  
  await message.client.sendMessage(message.jid,'```██████╗░\n██╔══██╗\n██████╔╝\n██╔══██╗\n██║░░██║\n╚═╝░░╚═╝```',MessageType.text);

  }));

AlphaX.addCommand({pattern: 'art s$', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
  
  await message.client.sendMessage(message.jid,'```░██████╗\n██╔════╝\n╚█████╗░\n░╚═══██╗\n██████╔╝\n╚═════╝░```',MessageType.text);

  }));

AlphaX.addCommand({pattern: 'art t$', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
  
  await message.client.sendMessage(message.jid,'```████████╗\n╚══██╔══╝\n░░░██║░░░\n░░░██║░░░\n░░░██║░░░\n░░░╚═╝░░░```',MessageType.text);

  }));

AlphaX.addCommand({pattern: 'art u$', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
  
  await message.client.sendMessage(message.jid,'```██╗░░░██╗\n██║░░░██║\n██║░░░██║\n██║░░░██║\n╚██████╔╝\n░╚═════╝░```',MessageType.text);

  }));

AlphaX.addCommand({pattern: 'art w$', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
  
  await message.client.sendMessage(message.jid,'```░██╗░░░░░░░██╗\n░██║░░██╗░░██║\n░╚██╗████╗██╔╝\n░░████╔═████║░\n░░╚██╔╝░╚██╔╝░\n░░░╚═╝░░░╚═╝░░```',MessageType.text);

  }));

AlphaX.addCommand({pattern: 'art v$', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
  
  await message.client.sendMessage(message.jid,'```██╗░░░██╗\n██║░░░██║\n╚██╗░██╔╝\n░╚████╔╝░\n░░╚██╔╝░░\n░░░╚═╝░░░```',MessageType.text);

  }));

AlphaX.addCommand({pattern: 'art x$', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
  
  await message.client.sendMessage(message.jid,'```██╗░░██╗\n╚██╗██╔╝\n░╚███╔╝░\n░██╔██╗░\n██╔╝╚██╗\n╚═╝░░╚═╝```',MessageType.text);

  }));

AlphaX.addCommand({pattern: 'art y$', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
  
  await message.client.sendMessage(message.jid,'```██╗░░░██╗\n╚██╗░██╔╝\n░╚████╔╝░\n░░╚██╔╝░░\n░░░██║░░░\n░░░╚═╝░░░```',MessageType.text);

  }));

AlphaX.addCommand({pattern: 'art z$', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
  
  await message.client.sendMessage(message.jid,'```███████╗\n╚════██║\n░░███╔═╝\n██╔══╝░░\n███████╗\n╚══════╝```',MessageType.text);

  }));

AlphaX.addCommand({pattern: 'art 1$', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
  
  await message.client.sendMessage(message.jid,'```░░███╗░░\n░████║░░\n██╔██║░░\n╚═╝██║░░\n███████╗\n╚══════╝```',MessageType.text);

  }));

AlphaX.addCommand({pattern: 'art 2$', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
  
  await message.client.sendMessage(message.jid,'```██████╗░\n╚════██╗\n░░███╔═╝\n██╔══╝░░\n███████╗\n╚══════╝```',MessageType.text);

  }));

AlphaX.addCommand({pattern: 'art 3$', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
  
  await message.client.sendMessage(message.jid,'```██████╗░\n╚════██╗\n░█████╔╝\n░╚═══██╗\n██████╔╝\n╚═════╝░```',MessageType.text);

  }));

AlphaX.addCommand({pattern: 'art 4$', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
  
  await message.client.sendMessage(message.jid,'```░░██╗██╗\n░██╔╝██║\n██╔╝░██║\n███████║\n╚════██║\n░░░░░╚═╝```',MessageType.text);

  }));

AlphaX.addCommand({pattern: 'art 5$', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
  
  await message.client.sendMessage(message.jid,'```███████╗\n██╔════╝\n██████╗░\n╚════██╗\n██████╔╝\n╚═════╝░```',MessageType.text);

  }));

AlphaX.addCommand({pattern: 'art 6$', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
  
  await message.client.sendMessage(message.jid,'```░█████╗░\n██╔═══╝░\n██████╗░\n██╔══██╗\n╚█████╔╝\n░╚════╝░```',MessageType.text);

  }));

AlphaX.addCommand({pattern: 'art 7$', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
  
  await message.client.sendMessage(message.jid,'```███████╗\n╚════██║\n░░░░██╔╝\n░░░██╔╝░\n░░██╔╝░░\n░░╚═╝░░░```',MessageType.text);

  }));

AlphaX.addCommand({pattern: 'art 8$', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
  
  await message.client.sendMessage(message.jid,'```░█████╗░\n██╔══██╗\n╚█████╔╝\n██╔══██╗\n╚█████╔╝\n░╚════╝░```',MessageType.text);

  }));

AlphaX.addCommand({pattern: 'art 9$', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
  
  await message.client.sendMessage(message.jid,'```░█████╗░\n██╔══██╗\n╚██████║\n░╚═══██║\n░█████╔╝\n░╚════╝░```',MessageType.text);

  }));

AlphaX.addCommand({pattern: 'art cry$', fromMe: WType, dontAddCommandList: true}, (async (message, match) => {
  var r_text = new Array ();

r_text[0] = " *๐·°(৹˃̵﹏˂̵৹)°·๐* ";
r_text[1] = " *‧º·(˚ ˃̣̣̥⌓˂̣̣̥ )‧º·˚* ";
r_text[2] = " *(つ﹏<)･ﾟ｡* ";
r_text[3] = " *｡ﾟ･（>﹏<）･ﾟ｡* ";
r_text[4] = " *๐·°(৹˃̵﹏˂̵৹)°·๐* ";
r_text[5] = " *.·´¯`(>▂<)´¯`·.* ";
r_text[6] = " *｡･ﾟﾟ･(>д<)･ﾟﾟ･｡* ";
r_text[7] = " *(ToT)* ";
r_text[8] = " *(┳Д┳)* ";
r_text[9] = " *(ಥ﹏ಥ)* ";
r_text[10] = " *（；へ：）* ";
r_text[11] = " *ಥʖ̯ಥ* ";
r_text[12] = " *ಥ ͜ʖಥ* ";
r_text[13] = " *☭ ͜ʖ ☭* ";
r_text[14] = " *ཀ ʖ̯ ཀ* ";
r_text[15] = " *(;﹏;)* ";
r_text[16] = " *（πーπ）* ";
r_text[17] = " *(⋟﹏⋞)* ";
r_text[18] = " *（>﹏<）* ";
r_text[19] = " *(つ﹏⊂)* ";
r_text[20] = " *༼☯﹏☯༽* ";
r_text[21] = " *(ノ﹏ヽ)* ";
r_text[22] = " *(╥_╥)* ";
r_text[23] = " *(T⌓T)* ";
r_text[24] = " *(༎ຶ⌑༎ຶ)* ";
r_text[25] = " *(☍﹏⁰)｡* ";
r_text[26] = " *(இ﹏இ`｡)* ";
r_text[27] = " *༼ ༎ຶ ෴ ༎ຶ༽* ";
r_text[28] = " *ᕕ( ཀ ʖ̯ ཀ)ᕗ* ";
r_text[29] = " *( ɵ̥̥ ˑ̫ ɵ̥̥)* ";
r_text[30] = " *(个_个)* ";
r_text[31] = " *( ͒˃̩̩⌂˂̩̩ ͒)* ";
r_text[32] = " *╥﹏╥* ";
r_text[33] = " *༼ಢ_ಢ༽* ";

var i = Math.floor(34*Math.random())

await message.client.sendMessage(message.jid,`${r_text[i]}`,MessageType.text);

  }));
