const q = '```'
const y = '_'
const f = '*'
const c = '~'
const help = (prefix) => {
	return  `┌──「 LIGHT-BOT」───
      

➤⌔ ${f}${prefix}satangrupo${f}
➤⌔ ${f}${prefix}sticker Reply img${f}
➤⌔ ${f}${prefix}rsticker Reply img${f}
➤⌔ ${f}${prefix}stickergif Reply video${f}
➤⌔ ${f}${prefix}stickerwa Query${f}
➤⌔ ${f}${prefix}stickerwm Nama|Author${f}
➤⌔ ${f}${prefix}nobg Reply img${f}
➤⌔ ${f}${prefix}attp Text${f}
➤⌔ ${f}${prefix}ttp Text${f}
➤⌔ ${f}${prefix}take Nama|Author${f}
➤⌔ ${f}${prefix}exif Nama|Author${f}
➤⌔ ${f}${prefix}togif Reply stickergif${f}
➤⌔ ${f}${prefix}tovideo Reply sticker${f}
➤⌔ ${f}${prefix}toimg Reply sticker${f}
➤⌔ ${f}${prefix}slot${f}
➤⌔ ${f}${prefix}slot2${f}
⌸    ﹀﹀﹀﹀﹀﹀﹀﹀﹀﹀     ⌸
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
⌸    ﹀﹀﹀﹀﹀﹀﹀﹀﹀﹀     ⌸
➤⌔ ${f}${prefix}pin${f}
➤⌔ ${f}${prefix}unpin${f}
➤⌔ ${f}${prefix}archive${f}
➤⌔ ${f}${prefix}unarchiveall${f}
➤⌔ ${f}${prefix}readall${f}
➤⌔ ${f}${prefix}delthischat${f}
➤⌔ ${f}${prefix}shutdown${f}
⌸    ﹀﹀﹀﹀﹀﹀﹀﹀﹀﹀     ⌸
➤⌔ ${f}${prefix}hidetag Text${f}
➤⌔ ${f}${prefix}stctag Tag Stc${f}
➤⌔ ${f}${prefix}imgtag Tag Img${f}
➤⌔ ${f}${prefix}kontag Text${f}
➤⌔ ${f}${prefix}kontak 6281xxx Nama${f}
⌸    ﹀﹀﹀﹀﹀﹀﹀﹀﹀﹀     ⌸
➤⌔ ${f}${prefix}setthumb${f}
➤⌔ ${f}${prefix}setreply${f}
➤⌔ ${f}${prefix}setbodymenu${f}
➤⌔ ${f}${prefix}setwelcome${f}
➤⌔ ${f}${prefix}setleave${f}
➤⌔ ${f}${prefix}setpromote${f}
➤⌔ ${f}${prefix}setdemote${f}
⌸    ﹀﹀﹀﹀﹀﹀﹀﹀﹀﹀     ⌸
➤⌔ ${f}${prefix}upswtext${f}
➤⌔ ${f}${prefix}upswimg${f}
➤⌔ ${f}${prefix}upswvideo${f}
⌸    ﹀﹀﹀﹀﹀﹀﹀﹀﹀﹀     ⌸
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
⌸    ﹀﹀﹀﹀﹀﹀﹀﹀﹀﹀     ⌸
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
⌸    ﹀﹀﹀﹀﹀﹀﹀﹀﹀﹀     ⌸
➤⌔ ${f}${prefix}play Query${f}
➤⌔ ${f}${prefix}ig Url${f}
➤⌔ ${f}${prefix}tiktok Url${f}
➤⌔ ${f}${prefix}ytmp3 Url${f}
➤⌔ ${f}${prefix}ytmp4 Url${f}
⌸    ﹀﹀﹀﹀﹀﹀﹀﹀﹀﹀     ⌸
└──「 _*LIGHT-BOT*_  」───`


}

exports.help = help
