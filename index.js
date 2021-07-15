//MODIFICADO POR SATÁNICA
//MODIFICADO POR TURBO NTR
const sotoy = [
		'🍊 : 🍒 : 🍐',
		'🍒 : 🔔 : 🍊',
		'🍇 : 🍇 : 🍇',
		'🍊 : 🍋 : 🔔',
		'🔔 : 🍒 : 🍐',
		'🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',		
		'🍐 : 🍒 : 🍋',
		'🍐 : 🍐 : 🍐',
		'🍊 : 🍒 : 🍒',
		'🔔 : 🔔 : 🍇',
		'🍌 : 🍒 : 🔔',
		'🍐 : 🔔 : 🔔',
		'🍊 : 🍋 : 🍒',
		'🍋 : 🍋 : 🍌',
		'🔔 : 🔔 : 🍇',
		'🔔 : 🍐 : 🍇',
		'🔔 : 🔔 : 🔔',
		'🍒 : 🍒 : 🍒',
		'🍌 : 🍌 : 🍌',
		]
const {
    WAConnection,
  MessageType,
  Presence, 
  MessageOptions,
  Mimetype,
  WALocationMessage,
  WA_MESSAGE_STUB_TYPES,
  ReconnectMode,
  ProxyAgent,
  GroupSettingChange,
  ChatModification,
  waChatKey,
  WA_DEFAULT_EPHEMERAL,
  mentionedJid,
  processTime
} = require('@adiwajshing/baileys')
const fs = require('fs')
const axios = require("axios")
const speed = require('performance-now')
const request = require('request')
const imgbb = require('imgbb-uploader')
const toMs = require('ms')
const ms = require('parse-ms')
const moment = require('moment-timezone')
const fetch = require('node-fetch')
const phoneNum = require('awesome-phonenumber')
const ffmpeg = require('fluent-ffmpeg')
const imageToBase64 = require('image-to-base64')
const lolis = require('lolis.life')
const loli = new lolis()
const Exif = require('./lib/exif');
const exif = new Exif();


//********** FUNCTIONS **********//
const { removeBackgroundFromImageFile } = require('remove.bg')
const { color, bgcolor } = require('./lib/color')
const { help } = require('./src/help')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { fetchJson, fetchText } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const { exec } = require('child_process')
const { uploadimg } = require('./lib/uploadimg')

//********** DATABASE **********//
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./src/nsfw.json'))
const samih = JSON.parse(fs.readFileSync('./src/simi.json'))
const setting = JSON.parse(fs.readFileSync('./src/settings.json'))
const setiker = JSON.parse(fs.readFileSync('./temp/stik.json'))
const audionye = JSON.parse(fs.readFileSync('./temp/vn.json'))
const imagenye = JSON.parse(fs.readFileSync('./temp/image.json'))
const videonye = JSON.parse(fs.readFileSync('./temp/video.json'))
const antilink = JSON.parse(fs.readFileSync('./src/antilink.json'))
const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
//*********** CUSTOMABLE ***********//
prefix = ''
f = '_'
blocked = []
fake = '- TURBO NTR -'
fakeimage = fs.readFileSync(`./media/TurboNtr.jpeg`)
numbernye = '0'
join = '\`\`\`HOLA 👋🏻, Bienvenido al grupo 🥳🎊 Espero que se sienta como en casa ☕\n Soy Turbo 😎 el bot del Grupo, espero ser de tu agrado 👉🏻👈🏻 lee las reglas por favor para evitar malos entendidos 💣🚀 Te suscribes a mi cabal ? https://youtube.com/channel/UCqiXnIA8_K83MqHtnyMzR2A\n - [ TURBO⚡NTR ] -'
leave = '\`\`\`Adios 🙋🏻‍♂️ estaremos mejor sin ti 😹 no vuelvas por favor 😝 🐈💨~ \`\`\`'
promote = '*Eres el nuevo Admin 😎💖 Se un ejemplo 🌟*'
demote = '*Ya no eres Admin 😔~*'
public = false

//*********** VCARD  ***********//
const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + 'FN:𝚃𝚄𝚁𝙱𝙾 𝙽𝚃𝚁シ︎\n'
            + 'ORG:Owner Turbontr;\n'
            + 'TEL;type=CELL;type=VOICE;waid=12244253896:+1 (224) 425-3896\n'
            + 'END:VCARD'
            
//*********** 𝗔𝗣𝗜𝗞𝗘𝗬 ***********//
const BarBarKey = 'IDxO1TFYnKADlX4pxcHa'
const VhtearKey = '1BlnApiIkyPake'
const XteamKey = 'AbilGanss'
const TobzApi = 'Bidmzz1sJ2L1TKyqaMEU'
const ZeksApi = 'apivinz'
const LolKey = 'save123'
lolkey = '682aeab645ed61cf137cf971'
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Horas ${pad(minutes)} Minuto ${pad(seconds)} Segundo`
}
function tanggal(){
myMonths = ["Enero","Febrero","marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Deciembre"];
			myDays = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'];
			var tgl = new Date();
			var day = tgl.getDate()
			bulan = tgl.getMonth()
			var thisDay = tgl.getDay(),
			thisDay = myDays[thisDay];
			var yy = tgl.getYear()
			var year = (yy < 1000) ? yy + 1900 : yy;
			return `${thisDay}, ${day} - ${myMonths[bulan]} - ${year}`
}

function monospace(string) {
return '```' + string + '```'
}


async function starts() {
	const TurboNtr = new WAConnection()
	TurboNtr.version = [2, 2119, 6]
	TurboNtr.logger.level = 'warn'
	console.log(banner.string)
	TurboNtr.on('qr', () => {
		console.log(color('[','white'), color('!','red'), color(']','white'), color(' Escanea el QR sempai~'))
	})

	fs.existsSync('./TurboNtr.json') && TurboNtr.loadAuthInfo('./TurboNtr.json')
	TurboNtr.on('connecting', () => {
		start('2', 'Soy un poco lento, espera, si te gusta bueno, si no me da igual T-T...')
	})
	TurboNtr.on('open', () => {
		success('2', 'Conectado!!!👌..')
	})
	await TurboNtr.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./TurboNtr.json', JSON.stringify(TurboNtr.base64EncodedAuthInfo(), null, '\t'))

	TurboNtr.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await TurboNtr.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await TurboNtr.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `*User : @${num.split('@')[0]}*
*Join Group : ${mdata.subject}*
 
 ${join}`
				let buff = await getBuffer(ppimg)
				TurboNtr.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await TurboNtr.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `*User : @${num.split('@')[0]}*
${leave}	`
				let buff = await getBuffer(ppimg)
				TurboNtr.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'promote') {
			const mdata = await TurboNtr.groupMetadata(anu.jid)
			num = anu.participants[0]
			try {
					ppimg = await TurboNtr.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
			let buff = await getBuffer(ppimg)
			teks = `𝙋𝙍𝙊𝙈𝙊𝙏𝙀 𝘿𝙀𝙏𝙀𝘾𝙏
			
\`\`\`Numero :\`\`\` ${num.replace('@s.whatsapp.net', '')}

\`\`\`Usuario :\`\`\` @${num.split('@')[0]}

\`\`\`Grupo :\`\`\` ${mdata.subject}

${promote}`
			TurboNtr.sendMessage(mdata.id, buff, MessageType.image, {caption : teks, contextInfo: {mentionedJid: [num]}, quoted: { "key": { "participant": `${numbernye}`, "remoteJid": `Kntl`, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": buff, "mimetype": "application/octet-stream", "title": `PROMOTE`, "fileLength": "36", "pageCount": 0, "fileName": `_Welcome_` }}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		} else if (anu.action == 'demote') {
			num = anu.participants[0]
			const mdata = await TurboNtr.groupMetadata(anu.jid)
			try {
					ppimg = await TurboNtr.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
			let buff = await getBuffer(ppimg)
			teks = `𝘿𝙀??𝙊??𝙀 𝘿𝙀𝙏𝙀𝘾𝙏
			
\`\`\`Numero :\`\`\` ${num.replace('@s.whatsapp.net', '')}

\`\`\`Usuario :\`\`\` @${num.split('@')[0]}

\`\`\`Grupo :\`\`\` ${mdata.subject}

${demote}`
			TurboNtr.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {mentionedJid: [num]}, quoted: { "key": { "participant": `${numbernye}`, "remoteJid": `Ktl`, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": buff, "mimetype": "application/octet-stream", "title": `DEMOTE`, "fileLength": "36", "pageCount": 0, "fileName": `_Welcome_` }}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
})

TurboNtr.on('CB:action,,call', async json => {
    const callerId = json[2][0][1].from;
    console.log("call dari "+ callerId)
        TurboNtr.sendMessage(callerId, "Sistema de bloqueo automático, no llames por favor", MessageType.text)
        await sleep(4000)
        await TurboNtr.blockUser(callerId, "add") // Block user
})
	TurboNtr.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

	TurboNtr.on('chat-update', async (mek) => {
		try {
            if (!mek.hasNewMessage) return
            mek = mek.messages.all()[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		//if (!mek.key.fromMe) return
		global.prefix
			global.blocked
			mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message 
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const apiKey = setting.apiKey 
			const { text, extendedText, contact, caption, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			const date = new Date().toLocaleDateString()
			const jam = moment.tz('Asia/Jakarta').format('HH:mm')
      const wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
      const wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
        
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
				const command = body.trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
			chats = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const arg = chats.slice(command.length + 2, chats.length)
			
			

			mess = {
				wait: ' Soy un poco lento, espera, si te gusta bueno si no me da igual T-T ',
				success: '✔️ Listooo ✔️',
				error: {
					stick: '❌ Falló, se produjo un error al convertir la imagen en una pegatina ❌',
					Iv: '❌ Enlace inválido ❌'
				},
				only: {
					group: '❌ Este comando solo se puede usar en grupos! ❌',
					ownerG: '❌ Este comando solo puede ser utilizado por el propietario del grupo! ❌',
					ownerB: '❌ Este comando solo puede ser utilizado por el propietario Turbo! ❌',
					admin: '❌ Este comando solo puede ser utilizado por administradores de grupo! ❌',
					Badmin: '❌ Este comando solo se puede usar cuando el bot se convierte en administrador! ❌'
				}
			}
      const totalchat = await TurboNtr.chats.all()
			const botNumber = TurboNtr.user.jid
			const ownerNumber = [`${setting.ownerNumber}@s.whatsapp.net`] // replace this with your number
			const isGroup = from.endsWith('@g.us')
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const groupMetadata = isGroup ? await TurboNtr.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
            const isAntilink = isGroup ? antilink.includes(from) : false
            const senderme = mek.participant
			const itsMe = sender == botNumber ? true : false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const isMe = botNumber.includes(senderme)
			let pushname = TurboNtr.contacts[sender] != undefined ? TurboNtr.contacts[sender].vname || TurboNtr.contacts[sender].notify: undefined
			const q = args.join(' ')
			let infoMSG = JSON.parse(fs.readFileSync('./src/msg.data.json'))
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				TurboNtr.sendMessage(from, teks, text, {quoted:freply})
			}
			const sendMess = (hehe, teks) => {
				TurboNtr.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? TurboNtr.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : TurboNtr.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}

//TURBO NTR
const fakethumb = (teks, yes) => {
            TurboNtr.sendMessage(from, teks, image, {thumbnail:fs.readFileSync('./sticker/fake.jpeg'),quoted:mek,caption:yes})
        }
        const fakestatus = (teks) => {
            TurboNtr.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": `Hola ${pushname}`,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./sticker/thumb.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    },
                    contextInfo: {
                      "forwardingScore": 999, "isForwarded": true
                    }
                }
            })
        }
        const faketokoforwaded = (teks) => {
	anu = {
	  key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": fs.readFileSync(`./sticker/thumb.jpeg`)
					},
					"title": `Hola ${pushname}, ${ucapanWaktu}`,
					"retailerId": "Self Bot",
					"productImageCount": 1
				},
				"businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
	TurboNtr.sendMessage(from, teks, text, {
	  quoted: anu,
	  contextInfo:{
	    "forwardingScore": 999, "isForwarded": true
	  }
	})
}
        const fakegroup = (teks) => {
            TurboNtr.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": `Hola ${pushname}`,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./sticker/thumb.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }


const fdocu = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": fake, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('media/TurboNtr.jpeg')}}}
            


const freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": fake, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync(`media/TurboNtr.jpeg`)} } }

const ftoko = {
key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": fs.readFileSync(`./media/TurboNtr.jpeg`)
					},
					"title": fake,
					"description": "TURBO NTR",
					"currencyCode": "USD",
					"priceAmount1000": "2000",
					"retailerId": "Turbocito",
					"productImageCount": 1
				},
				"businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
const uploadImages = (buffData, type) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
        const { ext } = await fromBuffer(buffData)
        const cmd = text.toLowerCase()
        const filePath = 'utils/tmp.' + ext
        const _buffData = type ? await resizeImage(buffData, false) : buffData
        fs.writeFile(filePath, _buffData, { encoding: 'base64' }, (err) => {
            if (err) return reject(err)
            console.log('Uploading image to telegra.ph server...')
            const fileData = fs.readFileSync(filePath)
            const form = new FormData()
            form.append('file', fileData, 'tmp.' + ext)
            fetch('https://telegra.ph/upload', {
                method: 'POST',
                body: form
            })
                .then(res => res.json())
                .then(res => {
                    if (res.error) return reject(res.error)
                    resolve('https://telegra.ph' + res[0].src)
                })
                .then(() => fs.unlinkSync(filePath))
                .catch(err => reject(err))
        })
    })
}



			colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage') 


   if (itsMe){
     if(chats.toLowerCase() == `${prefix}self`){
       public = false
       TurboNtr.sendMessage(from, `Success`, `ESTADO : UNO MISMO`)
     }
     if (chats.toLowerCase() == 'status'){
       TurboNtr.sendMessage(from, `STATUS : ${public ? 'PUBLICO' : 'UNO MISMO'}`)
     }
   }
   
  if (!public){
    if (!mek.key.fromMe) return
  }
            if(budy.match('Turbo')){
  result = fs.readFileSync(`./sticker/Turbo.webp`)
	TurboNtr.sendMessage(from, result, sticker, {
  quoted: mek
	})
  }
  
  if(budy.match('Sexo')){
  result = fs.readFileSync(`./sticker/sexo.webp`)
	TurboNtr.sendMessage(from, result, sticker, {
  quoted: mek
	})
  }
         
			if (!isGroup && !isCmd) console.log(color(time, "white"), color("[ PRIVATE ]", "aqua"), color(budy, "white"), "from", color(sender.split('@')[0], "yellow"))
            if (isGroup && !isCmd) console.log(color(time, "white"), color("[  GROUP  ]", "aqua"), color(budy, "white"), "from", color(sender.split('@')[0], "yellow"), "in", color(groupName, "yellow"))
            if (!isGroup && isCmd) console.log(color(time, "white"), color("[ COMMAND ]", "aqua"), color(budy, "white"), "from", color(sender.split('@')[0], "yellow"))
            if (isGroup && isCmd) console.log(color(time, "white"), color("[ COMMAND ]", "aqua"), color(budy, "white"), "from", color(sender.split('@')[0], "yellow"), "in", color(groupName, "yellow"))
			let authorname = TurboNtr.contacts[from] != undefined ? TurboNtr.contacts[from].vname || TurboNtr.contacts[from].notify : undefined	
			if (authorname != undefined) { } else { authorname = groupName }	
			
			function addMetadata(packname, author) {	
				if (!packname) packname = 'WABot'; if (!author) author = 'Bot';	
				author = author.replace(/[^a-zA-Z0-9]/g, '');	
				let name = `${author}_${packname}`
				if (fs.existsSync(`./src/stickers/${name}.exif`)) return `./src/stickers/${name}.exif`
				const json = {	
					"sticker-pack-name": packname,
					"sticker-pack-publisher": author,
				}
				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

				let len = JSON.stringify(json).length	
				let last	

				if (len > 256) {	
					len = len - 256	
					bytes.unshift(0x01)	
				} else {	
					bytes.unshift(0x00)	
				}	

				if (len < 16) {	
					last = len.toString(16)	
					last = "0" + len	
				} else {	
					last = len.toString(16)	
				}	

				const buf2 = Buffer.from(last, "hex")	
				const buf3 = Buffer.from(bytes)	
				const buf4 = Buffer.from(JSON.stringify(json))	
               
				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

				fs.writeFile(`./src/stickers/${name}.exif`, buffer, (err) => {	
					return `./src/stickers/${name}.exif`	
				})	

			}
			
			
			
			switch(command) {
			  
			
			     case 'menu':
                    wew = fs.readFileSync(`./media/TurboNtr.jpeg`)
                    lzain = `┌「 𝚃𝚄𝚁𝙱𝙾⚡𝙽𝚃𝚁❤️𝙰𝚗𝚍𝚛𝚎𝚊  」」
      
      
      「𝐍𝐮𝐞𝐯𝐚𝐬 𝐚𝐝𝐢𝐜𝐢𝐨𝐧𝐞𝐬」
➤⌔ _info_
➤⌔ _pussy_
➤⌔ _oppai_
➤⌔ _pussyimg_
➤⌔ _neko_
➤⌔ _loli_
➤⌔ _trap_
➤⌔ _pat_
➤⌔ _boobs
➤⌔ _blowjob_
➤⌔ _cum_
➤⌔ _delete_
➤⌔ _anime_
➤⌔ _telesticker (link)_
➤⌔ _tts_
➤⌔ _wallpaperanime_

࣪✦˖⏝࣪꒷꒦꒦꒷꒦⏝⏝꒦꒷˖ ࣪✦
        MENU COMPLETO

➤⌔ ${f}${prefix}turbogrupo${f}
➤⌔ ${f}${prefix}turbogrupo${f}
➤⌔ ${f}${prefix}sticker Reply img${f}
➤⌔ ${f}${prefix}rsticker Reply img${f}
➤⌔ ${f}${prefix}stickergif Reply video${f}
➤⌔ ${f}${prefix}stickerwa Query${f}
➤⌔ ${f}${prefix}stickerwm Nama|Author${f}
➤⌔ ${f}${prefix}attp Text${f}
➤⌔ ${f}${prefix}take Nama|Author${f}
➤⌔ ${f}${prefix}exif Nama|Author${f}
➤⌔ ${f}${prefix}togif Reply stickergif${f}
➤⌔ ${f}${prefix}tovideo Reply sticker${f}
➤⌔ ${f}${prefix}toimg Reply sticker${f}
➤⌔ ${f}${prefix}slot${f}
➤⌔ ${f}${prefix}slot2${f}
⌸ ﹀﹀﹀﹀﹀﹀﹀﹀﹀﹀ ⌸
➤⌔ ${f}${prefix}self${f}
➤⌔ ${f}${prefix}public${f}
➤⌔ ${f}${prefix}mute${f}
➤⌔ ${f}${prefix}unmute${f}
➤⌔ ${f}${prefix}encendido${f}
➤⌔ ${f}${prefix}ping${f}
➤⌔ ${f}${prefix}term${f}
➤⌔ ${f}${prefix}blocklist${f}
➤⌔ ${f}${prefix}run${f}
➤⌔ ${f}${prefix}chatlist${f}
➤⌔ ${f}${prefix}owner${f}
➤⌔ ${f}${prefix}join Linkgroup${f}
➤⌔ ${f}${prefix}getpic @tag${f}
➤⌔ ${f}${prefix}getbio @tag${f}
        𒀭𖤩 ˖˚ 𖠿 ⁿˢᶠʷ 𖠿˖˚𖤩𒀭
        
➤⌔ _nsfwfeets_     
➤⌔ _blowjob_
➤⌔ _boobs_
➤⌔ _futanari_
➤⌔ _femdom_ 
➤⌔ _oppai_
➤⌔ _nekopoi_
➤⌔ _erokemo_
➤⌔ _nsfwahegao_
➤⌔ _nsfwthighs_
➤⌔ _holoero_
➤⌔ _nsfwboobs_
➤⌔ _nsfwblowjob_
➤⌔ _randomhentai_
➤⌔ _nsfwneko_

⌸ ﹀﹀﹀﹀﹀﹀﹀﹀﹀﹀ ⌸
➤⌔ _ranklindo_
➤⌔ _rate .(texto)_
➤⌔ ${f}${prefix}pin${f}
➤⌔ ${f}${prefix}unpin${f}
➤⌔ ${f}${prefix}archive${f}
➤⌔ ${f}${prefix}unarchiveall${f}
➤⌔ ${f}${prefix}readall${f}
➤⌔ ${f}${prefix}delthischat${f}
➤⌔ ${f}${prefix}shutdown${f}
⌸ ﹀﹀﹀﹀﹀﹀﹀﹀﹀﹀ ⌸ 
➤⌔ ${f}${prefix}hidetag Text${f}
➤⌔ ${f}${prefix}tagall${f}
➤⌔ ${f}${prefix}stctag Tag Stc${f}
➤⌔ ${f}${prefix}imgtag Tag Img${f}
➤⌔ ${f}${prefix}kontag Text${f}
⌸ ﹀﹀﹀﹀﹀﹀﹀﹀﹀﹀ ⌸
➤⌔ ${f}${prefix}setthumb${f}
➤⌔ ${f}${prefix}setreply${f}
➤⌔ ${f}${prefix}setbodymenu${f}
➤⌔ ${f}${prefix}setwelcome${f}
➤⌔ ${f}${prefix}setleave${f}
➤⌔ ${f}${prefix}setpromote${f}
➤⌔ ${f}${prefix}setdemote${f}
⌸ ﹀﹀﹀﹀﹀﹀﹀﹀﹀﹀  ⌸
➤⌔ ${f}${prefix}upswtext${f}
➤⌔ ${f}${prefix}upswimg${f}
➤⌔ ${f}${prefix}upswvideo${f}
⌸ ﹀﹀﹀﹀﹀﹀﹀﹀﹀﹀ ⌸
➤⌔ ${f}${prefix}welcome 1/0${f}
➤⌔ ${f}${prefix}linkgroup${f}
➤⌔ ${f}${prefix}group cerrar/abrir${f}
➤⌔ ${f}${prefix}add 6281xxx${f}
➤⌔ ${f}${prefix}kick @tag${f}
➤⌔ ${f}${prefix}promote @tag${f}
➤⌔ ${f}${prefix}demote @tagadmin${f}
➤⌔ ${f}${prefix}demoteall${f}
➤⌔ ${f}${prefix}edotensei @tag${f}
➤⌔ ${f}${prefix}listadmin${f}
➤⌔ ${f}${prefix}online${f}
➤⌔ ${f}${prefix}infoall${f}
➤⌔ ${f}${prefix}notif${f}
➤⌔ ${f}${prefix}leave${f}
⌸ ﹀﹀﹀﹀﹀﹀﹀﹀﹀﹀ ⌸
➤⌔ ${f}${prefix}addstik Optional${f}
➤⌔ ${f}${prefix}adimg Optional${f}
➤⌔ ${f}${prefix}addvid Optional${f}
➤⌔ ${f}${prefix}addvn Optional${f}
➤⌔ ${f}${prefix}getstik Query${f}
➤⌔ ${f}${prefix}getimg Query${f}
➤⌔ ${f}${prefix}getvid Query${f}
➤⌔ ${f}${prefix}getvn Query${f}
➤⌔ ${f}${prefix}liststick${f}
➤⌔ ${f}${prefix}listimg${f}
➤⌔ ${f}${prefix}listvid${f}
➤⌔ ${f}${prefix}listvn${f}
⌸ ﹀﹀﹀﹀﹀﹀﹀﹀﹀﹀ ⌸
➤⌔ _play_
➤⌔ _play2_
➤⌔ ${f}${prefix}ytmp3 Url${f}
➤⌔ ${f}${prefix}ytmp4 Url${f}
⌸ ﹀﹀﹀﹀﹀﹀﹀﹀﹀﹀ ⌸
└「 _*𝚃𝚄𝚁𝙱𝙾⚡𝙽𝚃𝚁❤️𝙰𝚗𝚍𝚛𝚎𝚊*_  」`
TurboNtr.sendMessage(from, wew, image, { quoted: mek, caption: lzain })
     break
  //********** SELF&PUBLIC **********//
 case 'bot':
  
buf = fs.readFileSync(`./audio/putobot.mp3`)
TurboNtr.sendMessage(from, buf, audio, {
  mimetype: 'audio/mp4', quoted: mek, ptt: true
})
break
  case 'puto':
  
buf = fs.readFileSync(`./audio/puta.mp3`)
TurboNtr.sendMessage(from, buf, audio, {
  mimetype: 'audio/mp4', quoted: mek, ptt: true
})
break

case 'avatar':
			anu = await axios.get('https://nekos.life/api/v2/img/avatar')
				avatars = await getBuffer(anu.data.url)
				TurboNtr.sendMessage(from, avatars, image, {quoted: mek, caption: 'Linda foto no?' })
			break
			  case 'self':
			  if (!mek.key.fromMe) return reply('*Usted es propietario?*')
			    public = false
			    TurboNtr.sendMessage(from, `\`\`\`Status : SELF\`\`\``, text,{quoted :freply})
			    break
			    
			  case 'public':
			    if (!mek.key.fromMe) return reply('*Usted es propietario?*')
			    public = true
			    TurboNtr.sendMessage(from, `\`\`\`Status : PUBLIC\`\`\``, text,{quoted :freply})
			    break
			    
			    case 'mute':
                if (!mek.key.fromMe) return reply('*No eres mi dueño Turbo>n<?*')
                TurboNtr.modifyChat(from, ChatModification.mute, 24*60*60*1000)
                reply('*Muteados chicos ÙwÚ*')
                console.log('succes mute chat = ' + from)
                break
            case 'unmute':
                if (!mek.key.fromMe) return reply('*No eres mi dueño Turbo >n<?*')
                TurboNtr.modifyChat(from, ChatModification.unmute)
                reply('*Ù.Ú sus mensajes me caen denuevo*')
                console.log('succes unmute chat = ' + from)
                break
                case 'slot2':
                    result = await fetchJson(`https://api.xteam.xyz/game/virtualslot?APIKEY=AkiraBotWa`)
                        txt = `*🎰Slot adquirido🎰* \n\n${result.map}\n`
                        txt += `\n🔖Resultado : ${result.hasil}\n`
                        txt += `🕹️Score : ${result.score}\n`
                        reply(txt)
                        break
			    case 'unpin':
                if (!mek.key.fromMe) return reply('*No eres mi dueño Turbo >n<?*')
                TurboNtr.modifyChat(from, ChatModification.unpin)
                reply('*abajo UnU*')
                console.log('unpin chat = ' + from)
                break
                case 'bakarnama': 				
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}anakharamserti DappaGanz*`)
				reply(ind.wait())
				ct = body.slice(11)
				dapuhy = await getBuffer(`http://zekais-api.herokuapp.com/sbburn?text=${ct}`)
				TurboNtr.sendMessage(from, dapuhy, image, { quoted: freply, caption: 'Nih Ngab' })
				break
            case 'pin':
                if (!mek.key.fromMe) return reply('*No eres mi dueño Turbo >n<?*')
                TurboNtr.modifyChat(from, ChatModification.pin)
                reply('*Fijados UvU*')
                console.log('pinned chat = ' + from)
                break
case 'anime':
            reply(mess.wait)
            fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
            .then(res => res.text())
            .then(body => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
            .then((response) => {
            media =  Buffer.from(response, 'base64');
            TurboNtr.sendMessage(from,media,image,{quoted:mek,caption:'Aqui tienes 💎🦈'})
            }
            )
            .catch((error) => {
            console.log(error); 
            }
            )
            });
            break

case prefix+ 'turbogrupo':
buffer = await getBuffer(`https://telegra.ph/file/f5252cf0515addf52780b.jpg`)
					TurboNtr.sendMessage(from, buffer, image, {quoted: mek, caption: 'Link del grupo TURBO, Todos son bienvenidos!! 🤗\n-https://chat.whatsapp.com/B4wChDIx5wrICTnhQIACaR', sendEphemeral: true, contextInfo: { forwardingScore: 1000, isForwarded: true }})
break

  case 'felixgrupo':
buffer = await getBuffer(`https://telegra.ph/file/a3d623676c5a237f4ac86.jpg`)
					TurboNtr.sendMessage(from, buffer, image, {quoted: mek, caption: 'Link del grupo Felixcrack BOT OFC, Todos son bienvenidos!! 🤗\n-https://chat.whatsapp.com/B4wChDIx5wrICTnhQIACaR', sendEphemeral: true, contextInfo: { forwardingScore: 1000, isForwarded: true }})
break

  case prefix+ 'pinterest':
			goblog = args.join(" ")
			anu = await fetchJson(`http://api.lolhuman.xyz/api/pinterest?apikey=${apikey}&query=${query}`)
			sasu = JSON.parse(JSON.stringify(anu));
			ke =  sasu[Math.floor(Math.random() * sasu.length)];
			nye = await getBuffer(ke)
			TurboNtr.sendMessage(from, nye, image, { caption: '??TURBO⚡NTR', quoted: mek })
			.catch(err => {
				return('de nuevo genial? qué estás buscando?')
			})
			break
case prefix+ 'holoero':
		holox = await axios.get('https://nekos.life/api/v2/img/holoero')
			bufholox = await getBuffer(holox.data.url)
			TurboNtr.sendMessage(from, bufholox, image, { quoted: mek })
			.catch(err => {
			return('Error 7-7..')
			})
			break
case prefix+ 'cum':
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/cum')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				TurboNtr.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			break
            case 'unreadall':
                if (!mek.key.fromMe) return reply('*No eres mi dueño Turbo >n<?*')
                var chats = await TurboNtr.chats.all()
                chats.map( async ({ jid }) => {
                await TurboNtr.chatRead(jid, 'unread')
                    })
		    var teks = `\`\`\`Marcados sin leer ${chats.length} chats !\`\`\``
		    await TurboNtr.sendMessage(from, teks, text, {quoted: freply})
		    console.log(chats.length)
	        break
            case 'readall':
                if (!mek.key.fromMe) return reply('*No eres mi dueño Turbo >n<?*')
                var chats = await TurboNtr.chats.all()
                chats.map( async ({ jid }) => {
                await TurboNtr.chatRead(jid)
                })
		var teks = `\`\`\`Han sido leidos ${chats.length} chats !\`\`\``
	        await TurboNtr.sendMessage(from, teks, text, {quoted: freply})
		console.log(chats.length)
		break
            case 'unarchiveall':
                if (!mek.key.fromMe) return reply('*No eres mi dueño Turbo >n<?*')
                reply('*éxito desarchivar todo el chat*')
                console.log('succes unarchive chat = ' + from)
                anu = await TurboNtr.chats.all()
                for (let _ of anu) {
                TurboNtr.modifyChat(_.jid, ChatModification.unarchive)
                }
                break
                case 'slot':
            const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
            TurboNtr.sendMessage(from, `[  🎰 | SLOTS ]\n-----------------\n🍋 : 🍌 : 🍍\n${somtoy}<=====\n🍋 : 🍌 : 🍍\n[  🎰 | SLOTS ]\n\nDescripción: si obtienes 3 de la misma fruta, significa que ganas\n\nContoh : 🍌 : 🍌 : 🍌<=====`, text, { quoted: freply })
            break
            case 'archive':
                if (!mek.key.fromMe) return reply('*No eres mi dueño Turbo >n<?*')
                reply('*okey wait..*')
                console.log('chat de archivo de éxito = ' + from)
                await sleep(3000)
                TurboNtr.modifyChat(from, ChatModification.archive)
                break
            case 'delthischat':
                if (!mek.key.fromMe) return reply('*No eres mi dueño Turbo >n<?*')
                reply('*éxito eliminar este chat*')
                console.log('succes delete chat = ' + from)
                await sleep(4000)
                TurboNtr.modifyChat(from, ChatModification.delete)
                break
case 'del':  
case 'd':  
case 'delete':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)	
				    Turbontr.deleteMessage(from, { id: nay.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true }) 
				    break
case 'toimg':
			if (!isQuotedSticker) return reply('Responde a un sticker!')
			reply(mess.wait)
			encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			media = await TurboNtr.downloadAndSaveMediaMessage(encmedia)
			ran = getRandom('.png')
			exec(`ffmpeg -i ${media} ${ran}`, (err) => {
			fs.unlinkSync(media)
			if (err) return reply('Bueno, falló, inténtalo de nuevo ^_^')
			buffer = fs.readFileSync(ran)
			fakethumb(buffer,'Aqui esta sempai <3')
			fs.unlinkSync(ran)
			})
			break
case prefix+ 'setthumb':
		      if (!mek.key.fromMe) return reply('*No eres mi dueño Turbo >n<?*')
	        if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			delb = await TurboNtr.downloadMediaMessage(boij)
			fs.writeFileSync(`./sticker/thumb.jpeg`, delb)
			fakestatus('Hecho mi amo 7~7')
        	} else {
            reply(`envia imagen con comando ${prefix}sethumb`)
          	}
			break
                
                case 'setfakeimg':
	    if (!mek.key.fromMe) return reply('*No eres mi dueño Turbo >n<?*')
        	if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			delb = await TurboNtr.downloadMediaMessage(boij)
			fs.writeFileSync(`./sticker/fake.jpeg`, delb)
			fakestatus('Hecho mi amo 7~7')
        	} else {
            reply(`Envía una imagen con ${prefix}sethumb`)
          	}
			break
                case 'shutdown':
                if (!mek.key.fromMe) return reply('*No eres mi dueño Turbo >n<?*')
	        await TurboNtr.sendMessage(from, `Bye...\n_𝚃𝚄𝚁𝙱𝙾 𝙽𝚃𝚁 apagandose..._`, text,{quoted : freply})
		await sleep(3000)
                TurboNtr.close()
		break
		
		case 'demoteall':
                members_id = []
		for (let mem of groupMembers) {
	   	members_id.push(mem.jid)
	  	}
                TurboNtr.groupDemoteAdmin(from, members_id)
                break
                
           
			  //********** SETTING BOT **********//
			
case 'clone':
if (!mek.key.fromMe) return reply('*No eres mi dueño Turbo >n<?*')
					if (!isGroup) return reply(ind.groupo())
					if (args.length < 1) return reply(' *Tag a quien quieres clonar!!!* ')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await TurboNtr.getProfilePicture(id)
						buffer = await getBuffer(pp)
						TurboNtr.updateProfilePicture(botNumber, buffer)
						mentions(`Foto de perfil actualizada correctamente usando foto de perfil @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply(ind.stikga())
					}
					break
  case 'setleave':
			    if (args.length < 1) return reply('*Y el texto? Ù.ú?*')
                    TurboNtr.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					leave = body.slice(10)
					TurboNtr.sendMessage(from,`\`\`\`Leave cambiado exitosamente a : ${body.slice(10)}\`\`\``, text,{quoted : freply})
				break 
				
				case 'setpromote':
				  if (args.length < 1) return reply('*Y el texto? Ù.ú?*')
                    TurboNtr.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					promote = body.slice(11)
					TurboNtr.sendMessage(from,`\`\`\`La promoción se ha cambiado correctamente a : ${body.slice(11)}\`\`\``, text,{quoted : freply})
				break 
				
					case 'setdemote':
					  if (args.length < 1) return reply('*Y el texto? Ù.ú?*')
                    TurboNtr.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					demote = body.slice(11)
					TurboNtr.sendMessage(from ,`\`\`\`Degradar cambiado correctamente a : ${body.slice(11)}\`\`\``, text,{quoted : freply})
				break 
				
				case 'setbodymenu':
				  if (args.length < 1) return reply('*_EJEMPLO :_*\n\n  *   : *menu*\n  ~   : ~menu~\n  _ : _menu_\n ```   : ```menu```\n\n\n\n Ejemplos de uso : .setbodymenu *')
                    TurboNtr.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					f = body.slice(13)
					TurboNtr.sendMessage(from ,`\`\`\`Body menu cambiado exitosamente a : ${body.slice(13)}\`\`\``, text,{quoted : freply})
				break 
				
					case 'setwelcome':
					  if (args.length < 1) return reply('*Y el texto? Ù.ú?*')
                    TurboNtr.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					join = body.slice(11)
					TurboNtr.sendMessage(from ,`\`\`\`Bienvenida se ha cambiado con éxito a : ${body.slice(11)}\`\`\``, text,{quoted : freply})
				break 
				
			  case 'setreply':
			    if (args.length < 1) return reply('*Y el texto? Ù.ú?*')
                    TurboNtr.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					fake = body.slice(10)
					TurboNtr.sendMessage(from, `reply cambiado exitosamente a : ${fake}`,text,{quoted : freply})
				break 
				
				case 'setthumb':
				if (!isQuotedImage) return reply('Reply imagenya')
				svst = body.slice(8)
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await TurboNtr.downloadMediaMessage(boij)
				imagenye.push(`${svst}`)
				fs.writeFileSync(`./media/TurboNtr.jpeg`, delb)
				fs.writeFileSync('./media/img.json', JSON.stringify(imagenye))
				TurboNtr.sendMessage(from, `\`\`\`Cambiar miniaturas con éxito\`\`\``, MessageType.text, { quoted: freply })
				break
				
				case 'getbio':
                var yy = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
                var p = await TurboNtr.getStatus(`${yy}`, MessageType.text)
                reply(p.status)
                if (p.status == 401) {
                reply("Status Profile Not Found")
                }
                break
				
				case 'getpic':
				if (mek.message.extendedTextMessage != undefined){
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					try {
						pic = await TurboNtr.getProfilePicture(mentioned[0])
					} catch {
						pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
					}
					thumb = await getBuffer(pic)
					TurboNtr.sendMessage(from, thumb, MessageType.image)
				{quoted : freply}}
				break
				
				  case 'join':
                           if (!q) return reply('Ingrese el enlace del grupo')
                           var codeInvite = body.slice(6).split('https://chat.whatsapp.com/')[1]
                           if (!codeInvite) return fakegroup ('asegúrese de que el enlace sea correcto!')
                           var response = await TurboNtr.acceptInvite(codeInvite);
                           console.log(response);
                           break
                           
          //Turbogroup
         
        //********** SYSTEM **********//
        case 'return':
                                case 'run':
                                        return fakegroup(JSON.stringify(eval(args.join(''))))
                                        break
			     case '.':
                        let code = args.join(" ")
                    try {
    
                    if (!code) return TurboNtr.reply(from, 'No JavaScript Code', id)
                    let evaled;
    
                    if (code.includes("--silent") && code.includes("--async")) {
                    code = code.replace("--async", "").replace("--silent", "");
    
                    return await eval(`(async () => { ${code} })()`)
                    } else if (code.includes("--async")) {
                    code = code.replace("--async", "");
            
                    evaled = await eval(`(async () => { ${code} })()`);
                    } else if (code.includes("--silent")) {
                    code = code.replace("--silent", "");
            
                    return await eval(code);
                    } else evaled = await eval(code);
    
                  if (typeof evaled !== "string")
                evaled = require("util").inspect(evaled, { depth: 0 });
      
                let output = clean(evaled);
                var options = {
                    contextInfo: {
                        participant: '0@s.whatsapp.net',
                        quotedMessage: {
                            extendedTextMessage: {
                                text: "𝐄𝐗𝐄𝐂𝐔𝐓𝐎𝐑"
                            }
                        }
                    }
                }
                TurboNtr.sendMessage(from, `${output}`, text, options)
                } catch(err) {
                console.error(err)
                reply(err)
                }
                function clean(text) {
                if (typeof text === "string")
                  return text
                    .replace(/`/g, `\`${String.fromCharCode(8203)}`)
                    .replace(/@/g, `@${String.fromCharCode(8203)}`);
                // eslint-disable-line prefer-template
                else return text;
                }
                break
                
             //--pinterest anime neko
case 'neko':


TurboNtr.updatePresence(from, Presence.composing)
uk = ["anime neko"]
nk = uk[Math.floor(Math.random() * uk.length)]
try {
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
  method: 'get'
})
reply(mess.wait)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
TurboNtr.sendMessage(from, pok, image, {
  quoted: mek, caption: `𝚃𝚄𝚁𝙱𝙾 𝙽𝚃𝚁`
})

} catch {
  reply(mess.ferr)
}
break

//--Pinteres anime loli
  case 'loli':


TurboNtr.updatePresence(from, Presence.composing)
uk = ["anime loli"]
nk = uk[Math.floor(Math.random() * uk.length)]
try {
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
  method: 'get'
})
reply(mess.wait)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
TurboNtr.sendMessage(from, pok, image, {
  quoted: mek, caption: `𝚃𝚄𝚁𝙱𝙾 𝙽𝚃𝚁`
})

} catch {
  reply(mess.ferr)
}
break
				
				case 'block':
				 TurboNtr.updatePresence(from, Presence.composing) 
				 TurboNtr.chatRead (from)
				if (!mek.key.fromMe) return reply('*No eres mi dueño Turbo>n<?*')
					if (!isGroup) return reply(mess.groupo())
					TurboNtr.blockUser (`${body.slice(7)}@c.us`, "add")
					TurboNtr.sendMessage(from, `*Se bloqueo a* ${body.slice(7)}@c.us`, text)
					break
				
				case 'blocklist':
				  case 'listblock':
					teks = 'Personas mala conmigo T-T :\n'
					for (let block of blocked) {
						teks += `┣❥  @${block.split('@')[0]}\n`
					}
					teks += `Total : ${blocked.length}`
					TurboNtr.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					break
					
					//********** CONVERT **********//
					case 'exif':
	        if (!mek.key.fromMe) return reply('*No eres mi dueño Turbo>n<?*')
	        if (args.length < 1) return reply(`Usar ${prefix}exif nama|autho`)
		if (!arg.split('|')) return reply(`Usar ${prefix}exif nama|author`)
		    exif.create(arg.split('|')[0], arg.split('|')[1])
		    reply('Listo UvU')
	        break
	        
	        case 'colong':
		if (!isQuotedSticker) return reply(`Reply sticker dengan caption *${prefix}colong*`)
		const encmediia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	        const meidia = await TurboNtr.downloadAndSaveMediaMessage(encmediia, `./sticker/${sender}`)
		    exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
		    if (error) return reply('error')
		    TurboNtr.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), MessageType.sticker, {quoted: freply})
					fs.unlinkSync(media)
					fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
				})
				break
	        
					case 'take':
					if (!isQuotedSticker) return reply(`Responder a un sticker con *${prefix}takestick nama|author*`)
					var pembawm = body.slice(6)
					var encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					var media = await TurboNtr.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
					var packname = pembawm.split('|')[0]
					var author = pembawm.split('|')[1]
					exif.create(packname, author, `takestick_${sender}`)
					exec(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
					if (error) return reply('Error')
					TurboNtr.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), MessageType.sticker, {quoted: freply})
					fs.unlinkSync(media)
					fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
				})
				break
				
				case 'togif':
                                        if (!isQuotedSticker) return reply('Responde un sticker')
                                        reply(mess.wait)
                                        if (mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated === true){
                                        const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        const media = await TurboNtr.downloadAndSaveMediaMessage(encmedia)
                                        const upload = await uploadimg(media, Date.now() + '.webp')
                                        const rume = await axios.get(`http://nzcha-apii.herokuapp.com/webp-to-mp4?url=${upload.result.image}`)
                                        const buff = await getBuffer(rume.data.result)
                                        TurboNtr.sendMessage(from, buff, video, { mimetype: Mimetype.gif, caption: 'Nih', quoted: freply})
                                }
                                break
				
				case 'tovideo':
                    if ((isMedia && !mek.message.videoMessage || isQuotedSticker)) {
                        const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        filePath = await TurboNtr.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        file_name = getRandom(".gif")
                        ini_txt = args.join(" ").split("|")
                        request({
                            url: `https://api.lolhuman.xyz/api/convert/togif?apikey=${LolKey}`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(filePath),
                            },
                            encoding: "binary"
                        }, function(error, response, body) {
                            fs.unlinkSync(filePath)
                            fs.writeFileSync(file_name, body, "binary")
                            ini_buff = fs.readFileSync(file_name)
                            TurboNtr.sendMessage(from, ini_buff, video, { quoted: freply, mimetype: "video/gif", filename: file_name }).then(() => {
                                fs.unlinkSync(file_name)
                            })
                        });
                    } else {
                        reply(`Envía una imagen con ${prefix + command} o etiquetar imágenes que ya se han enviado`)
                    }
                    break
					
					case 'fdeface':
					var nn = body.slice(9)
					var urlnye = nn.split("|")[0];
					var titlenye = nn.split("|")[1];
					var descnye = nn.split("|")[2];
					//imgbbb = require('imgbb-uploader')
					//run = getRandom('.jpeg')
					//encmedia = isQuotedImage ? JSON.parse(JSON.stringify(lol).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : lol
					//media = await lolteam.downloadAndSaveMediaMessage(encmedia)
					ddatae = await imageToBase64(JSON.stringify('./media/TurboNtr.jpeg').replace(/\"/gi, ''))

					TurboNtr.sendMessage(from, {

						text: `${urlnye}`,

						matchedText: `${urlnye}`,

						canonicalUrl: `${urlnye}`,

						description: `${descnye}`,

						title: `${titlenye}`,

						jpegThumbnail: ddatae
					}, 'extendedTextMessage', { detectLinks: false })
					break
					
					
					case 'tagall':
TurboNtr.updatePresence(from, Presence.composing)
if (!mek.key.fromMe) return reply('*No eres mi dueño Turbo >n<?*')
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
members_id = []
teks = (args.length > 1) ? body.slice(8).trim(): ''
teks += `  Total : ${groupMembers.length}\n`
for (let mem of groupMembers) {
  teks += `┃ @${mem.jid.split('@')[0]}\n`
  members_id.push(mem.jid)
}
mentions('〘  *TAGALL* 〙\n┏━━━━━━━━━━━━━━━━\n┠⊷'+teks+'┃━━━━━━━━━━━━━━━━\n┃────𝚃𝚄𝚁𝙱𝙾 𝙽𝚃𝚁────\n┗━━━━━━━━━━━━━━━━', members_id, true)
break

					
					
case 'attp':
				if (args.length < 1) return reply(`_Y el texto? Ù.ú_\n*ejemplo ${prefix}attp Turbo Ganteng*`)
				attp2 = await getBuffer(`https://api.xteam.xyz/attp?file&text=${body.slice(6)}`)
				TurboNtr.sendMessage(from, attp2, sticker, {quoted: freply})
				break
				
		
                    
                    case 'swm':
                    case 'stickerwm':
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage)) {
                        if (args.length == 0) return reply(`Example: ${prefix + command} FxBot|Rapayee`)
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : lol
                        filePath = await TurboNtr.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        file_name = getRandom(".webp")
                        ini_txt = args.join(" ").split("|")
                        request({
                            url: `https://api.lolhuman.xyz/api/convert/towebpauthor?apikey=${LolKey}`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(filePath),
                                "package": ini_txt[0],
                                "author": ini_txt[1]
                            },
                            encoding: "binary"
                        }, function(error, response, body) {
                            fs.unlinkSync(filePath)
                            fs.writeFileSync(file_name, body, "binary")
                            ini_buff = fs.readFileSync(file_name)
                            TurboNtr.sendMessage(from, ini_buff, sticker, { quoted: freply }).then(() => {
                                fs.unlinkSync(file_name)
                            })
                        });
                    } else {
                        reply(`responde a un sticker con ${prefix + command} o etiquetar imágenes que ya se han enviado`)
                    }
                    break
                    
		case 'gifstiker':
				case 's':
			case 'stickergif':  
				case 'sticker':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await TurboNtr.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.stick)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata('TurboNtr', 'TurbontrBot')} ${ran} -o ${ran}`, async (error) => {
									if (error) return reply(mess.error.stick)
									TurboNtr.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
									fs.unlinkSync(media)	
									fs.unlinkSync(ran)	
								})
								/*TurboNtr.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)*/
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await TurboNtr.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(mess.wait)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`❌ Error al convertir video en pegatina ${tipe} Sticker`)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata('TurboNtr', 'TurboBot')} ${ran} -o ${ran}`, async (error) => {
									if (error) return reply(mess.error.stick)
									TurboNtr.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
									fs.unlinkSync(media)
									fs.unlinkSync(ran)
								})
								/*TurboNtr.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)*/
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await TurboNtr.downloadAndSaveMediaMessage(encmedia)
						ranw = getRandom('.webp')
						ranp = getRandom('.png')
						reply(mess.wait)
						keyrmbg = 'Your-ApiKey'
						await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp}).then(res => {
							fs.unlinkSync(media)
							let buffer = Buffer.from(res.base64img, 'base64')
							fs.writeFileSync(ranp, buffer, (err) => {
								if (err) return reply('Gagal, Terjadi kesalahan, silahkan coba beberapa saat lagi.')
							})
							exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
								fs.unlinkSync(ranp)
								if (err) return reply(mess.error.stick)
								exec(`webpmux -set exif ${addMetadata('TurboNtr', 'TurboBot')} ${ranw} -o ${ranw}`, async (error) => {
									if (error) return reply(mess.error.stick)
									TurboNtr.sendMessage(from, fs.readFileSync(ranw), sticker, {quoted: mek})
									fs.unlinkSync(ranw)
								})
								//TurboNtr.sendMessage(from, fs.readFileSync(ranw), sticker, {quoted: mek})
							})
						})
					/*} else if ((isMedia || isQuotedImage) && colors.includes(args[0])) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await TurboNtr.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.on('start', function (cmd) {
								console.log('Started :', cmd)
							})
							.on('error', function (err) {
								fs.unlinkSync(media)
								console.log('Error :', err)
							})
							.on('end', function () {
								console.log('Finish')
								fs.unlinkSync(media)
								TurboNtr.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=${args[0]}@0.0, split [a][b]; [a] palettegen=reserve_transparent=off; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)*/
					} else {
						reply(`Envíe una imagen con la etiqueta de título ${prefix} o una etiqueta de imagen que ya se haya enviado`)
					}
					break
				
					
					case 'ping':
					  const chatsIds = await TurboNtr.chats.all()
                const timestamp = speed();
                const latensi = speed() - timestamp 
                p0 =` \`\`\`Loaded Message\`\`\`
                
\`\`\` - [ ${totalchat.length} ]  Total Chat\`\`\`
\`\`\` - [ ${TurboNtr.user.phone.wa_version} ] WA Version\`\`\`
\`\`\` - [ SELF ] MODE\`\`\`
\`\`\` - [ ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / 4095 ] RAM\`\`\`

\`\`\`Speed : ${latensi.toFixed(4)} Second\`\`\``
                TurboNtr.sendMessage(from, p0, text, { quoted: freply})
                    break
                    
					case 'encendido':
uptime = process.uptime()
const timestampi = speed();
const latensip = speed() - timestampi
			             anjink =`◪ Encendido
├ *Nombre : 𝚃𝚄𝚁𝙱𝙾 𝙽𝚃𝚁*_
├ *Runtime :*
├  ${kyun(uptime)}
├ *Speed :*
├  ${latensip.toFixed(4)} Second
└─────────────`
			             TurboNtr.sendMessage(from, anjink, text,{quoted : freply})
			           break
			           case 'info':
  me = TurboNtr.user
  uptime = process.uptime()
  teks = `*‣ Nombre del bot* : ${me.name}
  ‣ *Número del bot* : @${me.jid.split('@')[0]}
  ‣ *Dueño* : Turboics
  ‣ *Prefijo* : ${prefix}
  ‣ *Usuarios bloqueados* : ${blocked.length}
  ‣ *Tiempo activo* : ${kyun(uptime)}
  ‣ *Total de chats* : ${totalchat.length}`
  buffer = await getBuffer(me.imgUrl)
  TurboNtr.sendMessage(from, buffer, image, {
caption: teks, contextInfo: {
  mentionedJid: [me.jid]}})
  break

case  'nekopoi':
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/nsfw_neko_gif')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				TurboNtr.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			break
case prefix+ 'emoji':
			if (!q) return fakegroup('emoji UnU?')
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[4].url}`
    		sendStickerFromUrl(from,`${teks}`)	
    		console.log(teks)
   			})
    		break
case  'pussy':
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/pussy')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				TurboNtr.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			break
case  'pussyimage':
  pusiimg = await axios.get('https://nekos.life/api/v2/img/pussy_jpg')
			bufpusy = await getBuffer(pusiimg.data.url)
				TurboNtr.sendMessage(from, bufpusy, MessageType.image, {quoted: mek})
			.catch(err => {
			return('Error 7-7.')
			})
			break
case  'oppai':
			opai = await axios.get('https://nekos.life/api/v2/img/tits')
			opaiz = await getBuffer(opai.data.url)
			TurboNtr.sendMessage(from, opaiz, image, { quoted: mek })
			.catch(err => {
			return('Error 7-7.')
			})
			break
case  'feetg':
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/feetg')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				TurboNtr.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			break
case  'bj':
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/bj')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				TurboNtr.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			break
case  'ero':
			eroz = await axios.get('https://nekos.life/api/v2/img/ero')
			bufero = await getBuffer(eroz.data.url)
			TurboNtr.sendMessage(from, bufero, image, { quoted: mek })
			.catch(err => {
			return('Error 7-7.')
			})
			break
case  'erokemo':
			erokz = await axios.get('https://nekos.life/api/v2/img/erokemo')
			erokzs = await getBuffer(erokz.data.url)
			TurboNtr.sendMessage(from, erokzs, image, { quoted: mek })
			.catch(err => {
			return('Error 7-7.')
			})
			break
case  'eroyuri':
			eroyuriz = await axios.get('https://nekos.life/api/v2/img/eroyuri')
			buferoyu = await getBuffer(opai.data.url)
			TurboNtr.sendMessage(from, buferoyu, image, { quoted: mek })
			.catch(err => {
			return('Error 7-7')
			})
			break
case  'tickle':
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/tickle')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				TurboNtr.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			break
case prefix+ 'wallpaperanime':
			wanime = await axios.get('https://nekos.life/api/v2/img/wallpaper')
			bufwanime = await getBuffer(wanime.data.url)
			TurboNtr.sendMessage(from, bufwanime, image, { quoted: mek })
			.catch(err => {
			return('Anuncio con errores de nuevo intente..')
			})
			break

case  'loli':
		  anu = await axios.get('https://nekos.life/api/v2/img/neko')
				loliz = await getBuffer(anu.data.url)
				TurboicaXB.sendMessage(from, loliz, image, {quoted: mek})
			break
case  'femdom':
      anu = await axios.get('https://nekos.life/api/v2/img/femdom')
			bupemdom = await getBuffer(anu.data.url)
				TurboNtr.sendMessage(from, bupemdom, image, {quoted: mek})
			.catch(err => {
			return('Error 7-7.')
			})
			break
case  'futanari':
			futan = await axios.get('https://nekos.life/api/v2/img/futanari')
			futanz = await getBuffer(futan.data.url)
			TurboNtr.sendMessage(from, futanz, image, { quoted: mek })
			break
case  'trap':
			trapx = await axios.get('https://nekos.life/api/v2/img/tits')
			traps = await getBuffer(trapx.data.url)
			TurboNtr.sendMessage(from, traps, image, { quoted: mek })
			.catch(err => {
			return('Error 7-7.')
			})
			break
case  'pat':
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/pat')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				TurboNtr.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			break
case  'boobs':
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/boobs')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				TurboNtr.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			break
case  'blowjob':
			blowz = await axios.get('https://nekos.life/api/v2/img/blowjob')
			bufblowz = await getBuffer(blowz.data.url)
			TurboNtr.sendMessage(from, bufblowz, image, {quoted: mek})
			.catch(err => {
			return('Error 7-7.')
			})
			break
break
					case 'nsfwfeets':
						if (!mek.key.fromMe) return reply('*No eres mi dueño Turbo >n<?*')
							res = await fetchJson(`https://meme-api.herokuapp.com/gimme/animefeets`, {method: 'get'})
							buffer = await getBuffer(res.url)
							TurboNtr.sendMessage(from, buffer, image, {quoted: mek, caption: 'las patitas UvU'})
				   break
			           case 'term': 
case 'exec':
const cmyd = body.slice(6)
var itsme = `0@s.whatsapp.net`
var split = `*EXECUTOR SELF BOT*`
const term = {
contextInfo: {
participant: itsme,
quotedMessage: {
extendedTextMessage: {
text: split,
}
}
}
}
exec(cmyd, (err, stdout) => {
if (err) return TurboNtr.sendMessage(from, ` ${err}`, text, { quoted: mek })
if (stdout) {
TurboNtr.sendMessage(from, stdout, text, term)
}
})
break
case 'join':
            try {
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
            hen = args[0]
            if (!q) return fakestatus('Ingrese el enlace del grupo')
            var codeInvite = hen.split('https://chat.whatsapp.com/')[1]
            if (!codeInvite) return fakegroup ('asegúrese de que el enlace sea correcto T-T!')
            var response = await TurboNtr.acceptInvite(codeInvite)
            fakestatus('Lito')
            } catch {
            fakegroup('LINK ERROR!')
            }
            break
					  //********** Funny COMMAND **********//
					  
					  case 'kontak':
                        entah = args[0]
                        disname = args[1]
                        if (isNaN(entah)) return reply('numero invalido UnU'.toUpperCase());
                        vcard = 'BEGIN:VCARD\n'
                                  + 'VERSION:3.0\n'
                                  + `FN:${disname}\n`
                                  + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
                                  + 'END:VCARD'.trim()
                            TurboNtr.sendMessage(from, {displayName: disname, vcard: vcard}, contact)
                            break
                            case 'randomhentai': 
						
							if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
							res = await fetchJson(`https://tobz-api.herokuapp.com/api/hentai?apikey=BotWeA`, {method: 'get'})
							buffer = await getBuffer(res.result)
							client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Otaku que se esperaba'})
						
						break
					
					case 'nsfwboobs': 
						
							if (!mek.key.fromMe) return reply('*No eres mi dueño Turbo >n<?*')
							res = await fetchJson(`https://meme-api.herokuapp.com/gimme/biganimetiddies`, {method: 'get'})
							buffer = await getBuffer(res.url)
							client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Quiero ver 😎'})
						
						break
					case 'nsfwblowjob':
						
							if (!mek.key.fromMe) return reply('*No eres mi dueño Turbo >n<?*')
							res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwblowjob`, {method: 'get'})
							buffer = await getBuffer(res.result)
							client.sendMessage(from, buffer, image, {quoted: mek, caption: 'No antojen'})
						
						break
					case 'nsfwneko':
						
							if (!mek.key.fromMe) return reply('*No eres mi dueño Turbo >n<?*')
							res = await fetchJson(`https://api.computerfreaker.cf/v1/neko`, {method: 'get'})
							buffer = await getBuffer(res.result)
							client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Pero que wea?'})
						
						break
			     case 'kontag':
					var bv = body.slice(8)
					var jl = `${bv}`
					if (args[0] === '') {
					var jl = `*CONTACT TAG*`
					}
					var group = await TurboNtr.groupMetadata(from)
					   var member = group['participants']
					   var mem = []
					   member.map(async adm => {
					   mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					   })
					const vcardtag = 'BEGIN:VCARD\n'
					            + 'VERSION:3.0\n'
					            + `FN:${body.slice(8)}\n`
					            + 'ORG:Creator SELF BOT;\n'
					            + `TEL;type=CELL;type=VOICE;waid=${TurboNtr.user.jid.split('@')[0]}:${TurboNtr.user.jid.split('@')[0]}\n`
					            + 'END:VCARD'
            				TurboNtr.sendMessage(from, {displayname: mem, vcard: vcardtag}, MessageType.contact, { quoted: mek, contextInfo: {mentionedJid: mem}, quoted: {
					key: {
						participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
					},
					message: {
						"imageMessage": {
							"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
							"mimetype": "image/jpeg",
							"caption": jl,
							"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
							"fileLength": "28777",
							"height": 1080,
							"width": 1079,
							"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
							"fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
							"directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
							"mediaKeyTimestamp": "1610993486",
							"jpegThumbnail": fs.readFileSync('./media/TurboNtr.jpeg'),
							"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
							}
							}
							}
							})
        break
        
        case 'hidetag':
					if (!isGroup) return reply(mess.only.group)
					var value = body.slice(9)
					var group = await TurboNtr.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: freply
					}
					TurboNtr.sendMessage(from, options, text,{quoted : freply})
					break
					
					
				
					break
				//tobz 
				
				
			           case 'sticktag':
                                        if (!isQuotedSticker) return reply('y el sticker?')
                                        boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                                        delb = await TurboNtr.downloadMediaMessage(boij)
                                        await fs.writeFileSync(`stctagg.webp`, delb)
                                        var group = await TurboNtr.groupMetadata(from)
                                        var member = group['participants']
                                        var mem = []
                                        member.map(async adm => {
                                                mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                                        })
					var itsme = `0@s.whatsapp.net`
					var split = `${body.slice(8)}`
					var selepbot = {
						contextInfo: {
							mentionedJid: mem,
                                                        participant: itsme,                                                                                                                          quotedMessage: {
                                                                extendedTextMessage: {
                                                                text: split,
							   }
					      	      }
					       }
					}
					result = fs.readFileSync(`stctagg.webp`)
                                        TurboNtr.sendMessage(from, result, sticker, selepbot)
					await fs.unlinkSync(`stctagg.webp`)
					break

case 'itsme':
ppimg = await TurboNtr.getProfilePicture(`${sender.split('@')[0]}@c.us`)
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
  teks = `‣ *Nombre* : TurboNtr
  ‣ *Número* : ${sender.split("@")[0]}
  ‣ *Link* : wa.me/${sender.split("@")[0]}`
  its = await getBuffer (ppimg)
  TurboNtr.sendMessage(from, its, image, {quoted: mek, caption: teks})
  break
					case 'telesticker':
                    if (args.length == 0) return reply(`[❗] Ejemplo: ${prefix + command} https://t.me/addstickers/LINE_Menhera_chan_ENG`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`https://lolhuman.herokuapp.com/api/telestick?apikey=${LolKey}&url=${ini_url}`)
                    ini_sticker = ini_url.result.sticker
                    for (sticker_ in ini_sticker) {
                        ini_buffer = await getBuffer(ini_sticker[sticker_])
                        TurboNtr.sendMessage(from, ini_buffer, sticker)
                    }
                    break
					case 'rate':
  if (args.length < 1) return reply('Escribe el nombre')
  TurboNtr.updatePresence(from, Presence.composing)
  random = `${Math.floor(Math.random() * 100)}`
  hasil = `Rating : *${body.slice(6)}*\n\nPorcentaje : *${random}%*`
  reply(hasil)
  break
					
					case 'ranklindo':
          if (!isGroup) return reply(mess.only.group)
          tuh = fs.readFileSync(`./src/lindos.jpeg`)
          jds = []
          const YDY = groupMembers
          const JSJ = groupMembers
          const TAT = groupMembers
          const SG = YDY[Math.floor(Math.random() * YDY.length)]           
          const SOD = JSJ[Math.floor(Math.random() * JSJ.length)]
          const HDH = TAT[Math.floor(Math.random() * TAT.length)]
          AJ = `●❯──────────❮●\n😳𝚁𝚊𝚗𝚔 𝙳𝚎 𝙻𝚘𝚜 𝙼𝚊𝚜 𝙻𝚒𝚗𝚍𝚘𝚜😘\n@${SG.jid.split('@')[0]} \n😳\n@${SOD.jid.split('@')[0]}\n😘\n@${HDH.jid.split('@')[0]}\n●❯──────────❮●`                  
          jds.push(SG.jid)
          jds.push(SOD.jid)
          jds.push(HDH.jid)
          TurboNtr.sendMessage(from, tuh, MessageType.image, { quoted: mek, caption: `${AJ}`, contextInfo: { forwardingScore: 1000, isForwarded: true , mentionedJid: jds}}) 
        break

					case 'nsfwahegao':
						
							if (!mek.key.fromMe) return reply('*No eres mi dueño Turbo>n<?*')
							res = await fetchJson(`https://meme-api.herokuapp.com/gimme/ahegao`, {method: 'get'})
							buffer = await getBuffer(res.url)
							TurboNtr.sendMessage(from, buffer, image, {quoted: mek, caption: 'Sempai!! Hentai~'})
						
						break
					case 'nsfwthighs':
						
							if (!mek.key.fromMe) return reply('*No eres mi dueño Turbo >n<?*')
							res = await fetchJson(`https://meme-api.herokuapp.com/gimme/animethighss`, {method: 'get'})
							buffer = await getBuffer(res.url)
							TurboNtr.sendMessage(from, buffer, image, {quoted: mek, caption: 'Por que muslos?'})
						
						break

					case 'imgtag':
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : lol
                        filePath = await TurboNtr.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
                        var value = args.join(" ")
                        var group = await TurboNtr.groupMetadata(from)
                        var member = group['participants']
                        var mem = []
                        member.map(async adm => {
                            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                        })
                        var options = {
                            contextInfo: { mentionedJid: mem },
                            quoted: freply
                        }
                        ini_buffer = fs.readFileSync(filePath)
                        TurboNtr.sendMessage(from, ini_buffer, image, options)
                        fs.unlinkSync(filePath)
                    } else {
                        reply(`Tag a una imagen enviada`)
                    }
                    break
                    
                    case 'owner':
                 TurboNtr.sendMessage(from, {displayname: "jeff", vcard: vcard}, MessageType.contact, { quoted: freply})
                 TurboNtr.sendMessage(from, 'Mi creadora UwU, nada de spam o bloqueo UnU:)',text, { quoted: freply} )
                 break
 
        
    			  //********** [ ❗ ] Este Comando Solo Puede Ser Usado En Grupos UnU **********//
        case 'linkgroup':
				case 'linkgrup':
				case 'linkgc':
				    if (!isGroup) return reply(mess.only.group)
				    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				    linkgc = await TurboNtr.groupInviteCode (from)
				    yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
				    TurboNtr.sendMessage(from, yeh, text, {quoted: freply})
			        break
			        
        case 'grup':
        case 'grupo':
					case 'gc':
					case 'group':
					if (!isGroup) return reply(mess.only.group)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args[0] === 'abrir') {
					    reply(`\`\`\`✓abierto con éxito\`\`\` *${groupMetadata.subject}*`)
						TurboNtr.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'cerrar') {
						reply(`\`\`\`✓cerrado con éxito\`\`\` *${groupMetadata.subject}*`)
						TurboNtr.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
					break
					
					case 'chatlist':
				case 'cekchat':
					TurboNtr.updatePresence(from, Presence.composing)
					TurboNtr.sendMessage(from, `Total : ${totalchat.length} Chat`, text, {quoted  : freply})
					break
					
					case 'demote':
			      case 'dm' : 
			    if (!isGroup) return reply(mess.only.group)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tidak jadi admin!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Pedido recibido, no eres administrador :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						TurboNtr.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`Okey Ahora Eres adm ~ UwU ')@${mentioned[0].split('@')[0]} Menjadi Member`, mentioned, true)
						TurboNtr.groupDemoteAdmin(from, mentioned)
					}
					break
					
				case 'listadmins':
				case 'listadmin':
				case 'adminlist':
				case 'adminslist':
					if (!isGroup) return reply(mess.only.group)
					teks = `Lista de facheritos *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
					
					case 'promote':
				case 'pm':
					if (!isGroup) return reply(mess.only.group)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadi admin!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Pedido recibido, te conviertes en administrador :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						TurboNtr.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`Ahora eres admin U~U ✔️') @${mentioned[0].split('@')[0]} Kamu Menjadi Admin Di Group *${groupMetadata.subject}*`, mentioned, true)
						TurboNtr.groupMakeAdmin(from, mentioned)
					}
					break
					
					case 'welcome':
					if (!isGroup) return reply(mess.only.group)
					if (args.length < 1) return reply('Quien eres? 7-7')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('Ya activo ')
						welkom.push(from)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('Activado sempai~ UwU ')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('Desactivada U~U ✔️')
					} else {
						reply('1 para ativar, 0 para desativar')
					}
                    break
                    
					case 'add':
					if (!isGroup) return reply(mess.only.group)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('quien quieres añadir??')
					if (args[0].startsWith('08')) return reply('Usa el código de país sempai')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						TurboNtr.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('No se pudo agregar el objetivo, tal vez porque en privado')
					}
					break
					
			    case 'kick':
					if (!isGroup) return reply(mess.only.group)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Orden recibida, emitida :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						TurboNtr.groupRemove(from, mentioned)
					} else {
						mentions(`Orden recibida, emitida : @${mentioned[0].split('@')[0]}`, mentioned, true)
						TurboNtr.groupRemove(from, mentioned)
					}
					break 
					case 'tts':
					if (args.length < 1) return jere.sendMessage(from, '¿Dónde está el código de idioma??', text, {quoted: mek})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return jere.sendMessage(from, 'y el texto U.U?', text, {quoted: mek})
					dtt = body.slice(9)
					ranm = getRandom('.mp3')
					dtt.length > 600
					? reply('El texto es muy largo T×T')
					: gtts.save(ranm, dtt, function() {
						TurboNtr.sendMessage(from, fs.readFileSync(ranm), audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
						fs.unlinkSync(ranm)
					})
					break
										case 'online':
										  case 'listonline':
                if (!isGroup) return reply(`[ ❗ ] Este Comando Solo Puede Ser Usado En Grupos UnU`)
                let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
                let online = [...Object.keys(TurboNtr.chats.get(ido).presences), TurboNtr.user.jid]
                TurboNtr.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, {
                    quoted: freply,
                    contextInfo: { mentionedJid: online }
                })
                break
                
                case 'infoall':
					if (!isGroup) return reply(mess.only.group)
					var nom = mek.participant
					members_id = []
					teks = '\n'
					for (let mem of groupMembers) {
						teks += `┣❥   @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(`*By :* - [ 𝚃𝚄𝚁𝙱𝙾 𝙽𝚃𝚁-\n*Info :*  ${body.slice(9)}\n*Total Member :* ${groupMembers.length} \n\n┏━━━⟪ *INFORMATION* ⟫━━━┓`+teks+'╚═ *「 𝚃𝚄𝚁𝙱𝙾 𝙽𝚃𝚁 」* ', members_id, true)
					break
					
					case 'edotensei':
					  case 'edotense':
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di edotense!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Se expulso :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						TurboNtr.groupRemove(from, mentioned)
					} else {
						mentions(`Se expulso a : @${mentioned[0].split('@')[0]}`, mentioned, true)
						TurboNtr.groupRemove(from, mentioned)
					}
					break
					
					case 'notif':
if (!isGroup) return reply(mess.only.group)
teks = `Notificacion Dada Por: @${sender.split("@")[0]}\n*El mensaje es: ${body.slice(7)}*`
group = await TurboNtr.groupMetadata(from);
member = group['participants']
jids = [];
member.map(async adm => {
  jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
})
options = {
  text: teks,
  contextInfo: {
mentionedJid: jids
  },
  quoted: freply
}
await TurboNtr.sendMessage(from, options, text)
break

      case 'leave': 
				    if (!isGroup) return reply(mess.only.group)
			    	anu = await TurboNtr.groupLeave(from, `Bye pequeños de *${groupMetadata.subject}*`, groupId)
	                break



				
					  //********** STORAGE **********//
case 'addstik':
				if (!isQuotedSticker) return reply('Responde un sticker')
				svst = body.slice(9)
				if (!svst) return reply('nombre del sticker?')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await TurboNtr.downloadMediaMessage(boij)
				setiker.push(`${svst}`)
				fs.writeFileSync(`./temp/stick/${svst}.webp`, delb)
				fs.writeFileSync('./temp/stik.json', JSON.stringify(setiker))
				TurboNtr.sendMessage(from, `Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststik`, MessageType.text, { quoted: freply })
				break
				
case 'getstik':
				namastc = body.slice(9)
				try {
				result = fs.readFileSync(`./temp/stick/${namastc}.webp`)
				TurboNtr.sendMessage(from, result, sticker,{quoted:freply})
				} catch {
				  reply('Paquete no registrado')
				}
				break
			
			case 'liststik':
				teks = '*Sticker list :*\n\n'
				for (let awokwkwk of setiker) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${setiker.length}*`
				TurboNtr.sendMessage(from, teks.trim(), extendedText, { quoted: freply, contextInfo: { "mentionedJid": setiker } })
				break
				
				case 'addimg':
				if (!isQuotedImage) return reply('Responde una imagen')
				svst = body.slice(8)
				if (!svst) return reply('Nombre de la imagen')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await TurboNtr.downloadMediaMessage(boij)
				imagenye.push(`${svst}`)
				fs.writeFileSync(`./temp/foto/${svst}.jpeg`, delb)
				fs.writeFileSync('./temp/image.json', JSON.stringify(imagenye))
				TurboNtr.sendMessage(from, `Sukses Menambahkan image\nCek dengan cara ${prefix}listimg`, MessageType.text, { quoted: freply })
				break

			case 'getimg':
				namastc = body.slice(8)
				try {
				buffer = fs.readFileSync(`./temp/foto/${namastc}.jpeg`)
				TurboNtr.sendMessage(from, buffer, image, { quoted: freply, caption: `Result From Database : ${namastc}.jpeg` })
				} catch {
				  reply('Paquete no registrado')
				}
				break
				case 'listimg':
				teks = '*Image list :*\n\n'
				for (let awokwkwk of imagenye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${imagenye.length}*`
				TurboNtr.sendMessage(from, teks.trim(), extendedText, { quoted: freply, contextInfo: { "mentionedJid": setiker } })
				break
				case 'addvid':
				if (!isQuotedVideo) return reply('Responde a un video')
				svst = body.slice(8)
				if (!svst) return reply('Nombre del video')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await TurboNtr.downloadMediaMessage(boij)
				imagenye.push(`${svst}`)
				fs.writeFileSync(`./temp/video/${svst}.mp4`, delb)
				fs.writeFileSync('./temp/video.json', JSON.stringify(imagenye))
				TurboNtr.sendMessage(from, `Sukses Menambahkan video\nCek dengan cara ${prefix}listvideo`, MessageType.text, { quoted: freply })
				break
case 'listvid':
				teks = '*List Video :*\n\n'
				for (let awokwkwk of videonye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${videonye.length}* `
				TurboNtr.sendMessage(from, teks.trim(), extendedText, { quoted: freply, contextInfo: { "mentionedJid": imagenye } })
				break
			case 'getvid':
				namastc = body.slice(8)
				try {
				buffer = fs.readFileSync(`./temp/video/${namastc}.mp4`)
				TurboNtr.sendMessage(from, buffer, video, { quoted: freply, caption: `Result From Database : ${namastc}.mp4` })
				} catch {
				  reply('Paquete no registrado')
				}
				break
				case 'addvn':
				if (!isQuotedAudio) return reply('Responde un audio')
				svst = body.slice(7)
				if (!svst) return reply('Nombre del vn')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await TurboNtr.downloadMediaMessage(boij)
				audionye.push(`${svst}`)
				fs.writeFileSync(`./temp/audio/${svst}.mp3`, delb)
				fs.writeFileSync('./temp/vn.json', JSON.stringify(audionye))
				TurboNtr.sendMessage(from, `Sukses Menambahkan Audio\nCek dengan cara ${prefix}listvn`, MessageType.text, { quoted: freply })
				break
case 'getvn':
				namastc = body.slice(7)
				try {
				buffer = fs.readFileSync(`./temp/audio/${namastc}.mp3`)
				TurboNtr.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: freply, ptt: true })
				} catch {
				  reply('Paquete no registrado')
				}
				break
				case 'listvn':
			case 'vnlist':
				teks = '*List Vn:*\n\n'
				for (let awokwkwk of audionye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${audionye.length}*`
				TurboNtr.sendMessage(from, teks.trim(), extendedText, { quoted: freply, contextInfo: { "mentionedJid": audionye } })
				break
				//********** DOWNLOAD **********//
				case 'play':
  
  
  if (args.length < 1) return reply('Escribe el nombre')
  reply(mess.wait)
  play = body.slice(6)
  try {
  anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?q=${play}&apikey=apivinz`)
  if (anu.error) return reply(anu.error)
  infomp3 = `*Audio*\n‣ *Nombre* : ${anu.result.title}\n‣ *Fuente* : ${anu.result.source}\n‣ *Tamaño* : ${anu.result.size}\n\n_El audio se esta mandando, si no llega descargue por el link_\n‣ *Link* : ${anu.result.url_audio}
  `
  buffer = await getBuffer(anu.result.thumbnail)
  lagu = await getBuffer(anu.result.url_audio)
  TurboNtr.sendMessage(from, buffer, image, {
quoted: mek, caption: infomp3
  })
  TurboNtr.sendMessage(from, lagu, audio, {
mimetype: 'audio/mp4', filename: `${anu.result.title}.mp3`, quoted: mek
  })
  
  } catch {
    reply(mess.ferr)
  }
  break
				
				
				
				
				case 'play2':   
				  if (args.length < 1) return reply('*Ingrese el título*')
                TurboNtr.sendMessage(from, mess.wait, text,{quoted : freply})
				play = args.join(" ")
				anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp4?q=${play}&apikey=apivinz`)
				if (anu.error) return reply(anu.error)
				infomp3 = ` *Vídeos encontrados!!!*
				
Título : ${anu.result.title}
Fuente : ${anu.result.source}
				
*_Enviando.._*`
				buffer = await getBuffer(anu.result.thumbnail)
				buffer1 = await getBuffer(anu.result.url_video)
				TurboNtr.sendMessage(from, buffer, image, {quoted: freply, caption: infomp3})
				TurboNtr.sendMessage(from, buffer1, video, {mimetype: 'video/mp4', filename: `${anu.result.video}.mp4`, quoted:freply, caption: 'Aqui tienes 💕🦈'})
					break 
				
        
					
case 'fb':
  if (args.length < 1) return reply('*Url?*')
  query = args.join(" ")
					anu = await fetchJson(`https://videfikri.com/api/fbdl/?urlfb=${query}`, {method: 'get'})
					wing = ` *F A C E B O O K DOWNLOADER*
					
*Título :* ${anu.result.judul}`
					
					TurboNtr.sendMessage(from, mess.wait, text,{quoted : freply})
					buffer = await getBuffer(anu.result.url)
					TurboNtr.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.result.url}.mp4`, quoted: freply, caption: wing})
					break 
					

				case 'ytmp4':
				  if (args.length < 1) return reply('*Url?*')
ini_link = args[0]
					anu = await fetchJson(`https://api.xteam.xyz/dl/ytmp4?url=${ini_link}&APIKEY=${XteamKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					ytt = `「 *YOUTUBE MP4 BY TURBO* 」
					
*Titulo:* ${anu.judul}
*Size:* ${anu.size}
					 
 Se esta enviando...`
					 buff = await getBuffer(anu.thumbnail)
					TurboNtr.sendMessage(from, mess.wait, text,{quoted : freply})
					buffer = await getBuffer(anu.url)
					TurboNtr.sendMessage(from, buff, image, {quoted: freply, caption: ytt})
					TurboNtr.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.url}.mp4`, quoted: freply, caption: 'Nih Gan'})
					break 

				case 'ytmp3':
				  if (args.length < 1) return reply('*Url?*')
                    ini_link = args[0]
                    anu = await fetchJson(`https://api.xteam.xyz/dl/ytmp3?url=${ini_link}&APIKEY=${XteamKey}`)
                    					ytt = `「 *YOUTUBE MP3 BY Turbo* 」
					
*Titulo:* ${anu.judul}
*Size:* ${anu.size}
					 
 espera pls...`
					 buff = await getBuffer(anu.thumbnail)
					TurboNtr.sendMessage(from, mess.wait, text,{quoted : freply})
					buffer = await getBuffer(anu.url)
					TurboNtr.sendMessage(from, buff, image, {quoted: freply, caption: ytt})
					TurboNtr.sendMessage(from, buffer, audio, {mimetype: 'audio/mp3', filename: `${anu.url}.mp3`, quoted: freply})
				break

//********** UPLOAD **********
case 'upswtext':
					TurboNtr.updatePresence(from, Presence.composing)
					TurboNtr.sendMessage('status@broadcast', `${q}`, extendedText)
					TurboNtr.sendMessage(from, `Success Up story wea text ${q}`, text,{quoted : freply})
					break
					
				case 'upswimg':
					TurboNtr.updatePresence(from, Presence.composing)
					if (isQuotedImage) {
						const swsw = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						cihcih = await TurboNtr.downloadMediaMessage(swsw)
						TurboNtr.sendMessage('status@broadcast', cihcih, image, { caption: `${q}` })
					}
					bur = `Subir correctamente la imagen de la historia con título: ${q}`
					TurboNtr.sendMessage(from, bur, text, { quoted: mek })
					break
					
				case 'upswvideo':
					TurboNtr.updatePresence(from, Presence.composing)
					if (isQuotedVideo) {
						const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						cihcih = await TurboNtr.downloadMediaMessage(swsw)
						TurboNtr.sendMessage('status@broadcast', cihcih, video, { caption: `${q}` })
					}
					bur = `Subir correctamente el vídeo de la historia con subtítulo: ${q}`
					TurboNtr.sendMessage(from, bur, text, { quoted: mek })
					break

				default:
					if (isGroup && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
						reply(muehe)
					} else {
						return //console.log(color('[WARN]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
					}
                           }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
}
starts()
