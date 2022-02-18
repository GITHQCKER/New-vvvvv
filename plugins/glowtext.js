const AlphaX = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const thiccysapi = require('@phaticusthiccy/open-apis'); // Import NPM Package
const axios = require("axios");
const fs = require("fs");
const Config = require('../config');
let WType = Config.WORKTYPE == 'public' ? false : true

AlphaX.addCommand({ pattern: 'glowtext ?(.*)', fromMe: WType, desc: "send random glowtext by given word > with 140+ beautifull font styles." }, (async (message, match) => {

let text = encodeURIComponent(match[1]);

  let run
  if (!text) { message.client.sendMessage(message.jid, "*Enter any text!*", MessageType.text, { quoted: message.data }); run = false } else { run = true };

  if (run = true) {

    var topText, bottomText;
    if (text.includes(';')) {
        var split = text.split(';');
        topText = split[0].replace(';','');
        bottomText = split[1].replace(';','');
    } else {
        topText = text;
        bottomText = null;
    }

var font_style = new Array();

  font_style[0] = "airman"
  font_style[1] = "alieninvasion"
  font_style[2] = "all stars"
  font_style[3] = "arthouse"
  font_style[4] = "backstreet"
  font_style[5] = "beachfront"
  font_style[6] = "bluegecko"
  font_style[7] = "broadway"
  font_style[8] = "bronco"
  font_style[9] = "bubbles"
  font_style[10] = "cottoncandy"
  font_style[11] = "cupcake"
  font_style[12] = "dearest"
  font_style[13] = "devana"
  font_style[14] = "discodiva"
  font_style[15] = "dragonscale"
  font_style[16] = "electricblue"
  font_style[17] = "fairygarden"
  font_style[18] = "fame"
  font_style[19] = "fictional"
  font_style[20] = "firstedition"
  font_style[21] = "flowerpower"
  font_style[22] = "flutter"
  font_style[23] = "foolsgold"
  font_style[24] = "frontier"
  font_style[25] = "fruityfresh"
  font_style[26] = "funkyzeit"
  font_style[27] = "ghostship"
  font_style[28] = "giftwrap"
  font_style[29] = "glowstick"
  font_style[30] = "glowtxt"
  font_style[31] = "gobstopper"
  font_style[32] = "greenstone"
  font_style[33] = "handbag"
  font_style[34] = "heartbeat"
  font_style[35] = "insignia"
  font_style[36] = "invitation"
  font_style[37] = "ionize"
  font_style[38] = "jet"
  font_style[39] = "jukebox"
  font_style[40] = "jumble"
  font_style[41] = "lavender"
  font_style[42] = "letterboard"
  font_style[43] = "littlehelper"
  font_style[44] = "lollipop"
  font_style[45] = "lokum"
  font_style[46] = "losttales"
  font_style[47] = "magicdust"
  font_style[48] = "medieval"
  font_style[49] = "metropol"
  font_style[50] = "moderno"
  font_style[51] = "mrfrosty"
  font_style[52] = "neonlights"
  font_style[53] = "ohhai"
  font_style[54] = "oldenglish"
  font_style[55] = "orbitron"
  font_style[56] = "orientexpress"
  font_style[57] = "paintbrush"
  font_style[58] = "petalprint"
  font_style[59] = "pinkcandy"
  font_style[60] = "pinkglow"
  font_style[61] = "piratescove"
  font_style[62] = "platformtwo"
  font_style[63] = "purple"
  font_style[64] = "ransom"
  font_style[65] = "republika"
  font_style[66] = "sapphireheart"
  font_style[67] = "rhizome"
  font_style[68] = "seasonsgreetings"
  font_style[69] = "signature"
  font_style[70] = "sketchy"
  font_style[71] = "sprinklesparkle"
  font_style[72] = "stardate"
  font_style[73] = "starlight"
  font_style[74] = "starshine"
  font_style[75] = "sterling"
  font_style[76] = "surprise"
  font_style[77] = "sweetheart"
  font_style[78] = "tiptoe"
  font_style[79] = "typeface"
  font_style[80] = "valentine"
  font_style[81] = "volcano"
  font_style[82] = "warehouse"
  font_style[83] = "yourstruly"
  font_style[84] = "zephyr"
  font_style[85] = "arabic"
  font_style[86] = "arabic2"
  font_style[87] = "arabic3"
  font_style[88] = "arabic4"
  font_style[89] = "arabic5"
  font_style[90] = "arabic6"
  font_style[91] = "armenian"
  font_style[92] = "armenian2"
  font_style[93] = "bengali"
  font_style[94] = "chinese"
  font_style[95] = "cyrillic"
  font_style[96] = "cyrillic2"
  font_style[97] = "cyrillic3"
  font_style[98] = "cyrillic4"
  font_style[99] = "ethiopic"
  font_style[100] = "ethiopic2"
  font_style[101] = "ethiopic3"
  font_style[102] = "euro"
  font_style[103] = "euro2"
  font_style[104] = "euro3"
  font_style[105] = "euro4"
  font_style[106] = "georgian"
  font_style[107] = "georgian2"
  font_style[108] = "greek"
  font_style[109] = "hebrew"
  font_style[110] = "hebrew2"
  font_style[111] = "hebrew3"
  font_style[112] = "hebrew4"
  font_style[113] = "hebrew5"
  font_style[114] = "hebrew6"
  font_style[115] = "hindi"
  font_style[116] = "hindi2"
  font_style[117] = "hindi3"
  font_style[118] = "hindi4"
  font_style[119] = "hindi5"
  font_style[120] = "hindi6"
  font_style[121] = "hindi7"
  font_style[122] = "hindi8"
  font_style[123] = "icelandic"
  font_style[124] = "igbo"
  font_style[125] = "japanese"
  font_style[126] = "japanese2"
  font_style[127] = "japanese3"
  font_style[128] = "japanese4"
  font_style[129] = "japanese5"
  font_style[130] = "japanese6"
  font_style[131] = "japanese7"
  font_style[132] = "japanese8"
  font_style[133] = "japanese9"
  font_style[134] = "kannada"
  font_style[135] = "korean"
  font_style[136] = "malayalam"
  font_style[137] = "odia"
  font_style[138] = "punjabi"
  font_style[139] = "tamil"
  font_style[140] = "telugu"
  font_style[141] = "thai"
  font_style[142] = "thai2"
  font_style[143] = "thai3"
  font_style[144] = "thai4"
  font_style[145] = "vietnamese"
  font_style[146] = "yoruba"

  var random = Math.floor(147*Math.random());

thiccysapi.glowtext({
    text: topText, // Required!
    text2: bottomText,// Optional
    font_style: `${font_style[random]}`, // Optional
    font_size: "x", // Optional
    font_colour: "0", // Optional
    bgcolour: "1", // Optional
    glow_halo: "1", // Optional
    non_trans: "true", // Optional
    glitter_border: "true", // Optional
    anim_type: "sweep", // Optional
    sumbit_type: "text" // Optional
    
    }).then(async (data) => {

    await axios.get(`${data.image}`, {responseType: 'arraybuffer'}).then(async (imgBuffer) => {

    fs.writeFileSync("./media/glowtext.mp4",imgBuffer.data );

                    await message.sendMessage(fs.readFileSync('./media/glowtext.mp4'), MessageType.video, {quoted: message.data, mimetype: Mimetype.mp4, videoPlayback: true , caption: Config.CAPTION});

                });
        });
  };

}));