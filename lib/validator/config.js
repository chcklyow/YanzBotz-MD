"use strict";

const fs = require('fs')
const chalk = require('chalk')
global.ownerNumber = ["085669723793"]
module.exports = {
  sesionName: "session",
  banchats: false,
  autoreadsw: true,
  anticall: true,
  banned: {
   maroko: true,
   india: false,
  },
  botfullname: "Danar",
  botname: "Danar",
  ownername: "Danar",
  author: `'D'\n'a'\n'n'\n'a'\n'r'`,
  packname: `"Danar"\n"Bot whatsapp Multi Device"\n"owner": "wa.me/6285669723793"\n"ig": "https://instagram.com/noturf4v._"`,
  
  modul: {
    qrcode: require('qrcode'),  	
    QrCode: require('qrcode-reader'),  	
    baileys: require("@whiskeysockets/baileys"),
    boom: require('@hapi/boom'),
    chalk: require('chalk'),
    ikyy: require('ikyy'),
    child: require('child_process'),
    fs: require('fs'),
    pino: require("pino"),
    path: require("path"),
    phonenumber: require('awesome-phonenumber'),
    time: require("moment-timezone"),
    jimp: require('jimp'),
    speed: require('performance-now'),
    util: require("util"),
    https: require('https'),
    sizeFormater: require('human-readable'),
    axios: require('axios'),
    ytsr: require('yt-search'),           
    qrcode: require('qrcode'), 
    qrcodereader: require('qrcode-reader'),
    request: require('request'),
   },
  file: {
    load: './connection/starting',
    color: './lib/color',
    move: './lib/simple.js',   
    funct: './lib/function',
    exif: './lib/exif',
    thumb: './storage/image/thumb.jpg',
    list: './lib/list',
    scrapp: './lib/scraper',
  },

}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.yellow(`New ${__filename}`))
	delete require.cache[file]
	require(file)
})
 
 //end
