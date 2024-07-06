const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_14_07_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAzMSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE5NixcbiAgICAgICAgOTUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE3LFxuICAgICAgICA5OCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIyLFxuICAgICAgICA2MyxcbiAgICAgICAgMTA0LFxuICAgICAgICA2MCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDc2LFxuICAgICAgICA1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDI2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDk3LFxuICAgICAgICAxODUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyNixcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTcsXG4gICAgICAgIDMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTksXG4gICAgICAgIDc1LFxuICAgICAgICA2NSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjQ4LFxuICAgICAgICA4NCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxODEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMzIsXG4gICAgICAgIDQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjE1LFxuICAgICAgICA2NCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMCxcbiAgICAgICAgNzQsXG4gICAgICAgIDc3LFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgNSxcbiAgICAgICAgOTEsXG4gICAgICAgIDI4LFxuICAgICAgICA4OSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDk3LFxuICAgICAgICAxNzksXG4gICAgICAgIDE0NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDk3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTk2LFxuICAgICAgICA5OSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDk0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNSxcbiAgICAgICAgOCxcbiAgICAgICAgMjI4LFxuICAgICAgICA4MCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDcsXG4gICAgICAgIDM3LFxuICAgICAgICA4NixcbiAgICAgICAgMjExLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxODUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgNCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDEsXG4gICAgICAgIDMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjQyLFxuICAgICAgICA1MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDQxLFxuICAgICAgICA1NixcbiAgICAgICAgMTcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjA2LFxuICAgICAgICA5MCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgOTMsXG4gICAgICAgIDU0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDQxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEzNixcbiAgICAgICAgNzgsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDc3LFxuICAgICAgICAyMzksXG4gICAgICAgIDI0NixcbiAgICAgICAgMTg2LFxuICAgICAgICA4NixcbiAgICAgICAgNjQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDM4LFxuICAgICAgICAxODQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTc4LFxuICAgICAgICA3NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDgwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIxLFxuICAgICAgICAzLFxuICAgICAgICAzMCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjQwLFxuICAgICAgICAzMyxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDEwMlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA1OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDY5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDExMixcbiAgICAgICAgMTI1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNyxcbiAgICAgICAgMTU0LFxuICAgICAgICAzMyxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMDksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjE3LFxuICAgICAgICA1MSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDM5LFxuICAgICAgICAyNDksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDc3LFxuICAgICAgICA3NyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDcwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDM3LFxuICAgICAgICA2NyxcbiAgICAgICAgMTc2LFxuICAgICAgICA3NyxcbiAgICAgICAgMTUsXG4gICAgICAgIDIxMixcbiAgICAgICAgOTEsXG4gICAgICAgIDY4LFxuICAgICAgICA2NSxcbiAgICAgICAgMjksXG4gICAgICAgIDkxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNixcbiAgICAgICAgNDgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDI4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNTQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE5NixcbiAgICAgICAgNjAsXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDYyLFxuICBcImFkdlNlY3JldEtleVwiOiBcInZqRlgzSWZIRFp0ay8wNjdHWS8zbTdxcUpodUp2MWYydUNiR20wUU5SUjQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzNDE1NDA0ODkyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIyRjkzOTczNjc5MUM2QTYzMTI1MTY5MzFDMjVCQjY2NFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTk5MTg4NzZcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjM0MTU0MDQ4OTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjk4NEU5QkZEMUI5QjUwMTYxNUZCMDRCQTIyMEFCNUMzXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxOTkxODg3N1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ3M294bGZ5TlJ0MmRmdld1cmN4TkRBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjlkMjNiOTVmLWQxYmYtNDAxYi05ZTVlLWRhMjdiZWI5NDUzN1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzAsXG4gICAgICA4MSxcbiAgICAgIDc3LFxuICAgICAgMTE5LFxuICAgICAgMTY5LFxuICAgICAgMjQ0LFxuICAgICAgODksXG4gICAgICA1NCxcbiAgICAgIDg5LFxuICAgICAgMTM2LFxuICAgICAgMTM3LFxuICAgICAgMjEyLFxuICAgICAgMjMzLFxuICAgICAgMTgsXG4gICAgICAxOCxcbiAgICAgIDIzMSxcbiAgICAgIDEzMyxcbiAgICAgIDc5LFxuICAgICAgMTgyLFxuICAgICAgNzdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjEsXG4gICAgICAxNzIsXG4gICAgICA5MixcbiAgICAgIDE4OCxcbiAgICAgIDE1NyxcbiAgICAgIDI1NSxcbiAgICAgIDIwNixcbiAgICAgIDIzLFxuICAgICAgMjA1LFxuICAgICAgMjI1LFxuICAgICAgMTYwLFxuICAgICAgMjQyLFxuICAgICAgMjQxLFxuICAgICAgMTg3LFxuICAgICAgMjM4LFxuICAgICAgMjAyLFxuICAgICAgODAsXG4gICAgICAxNjcsXG4gICAgICAxOTYsXG4gICAgICA3MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJFUTkyQkRWWVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzNDE1NDA0ODkyOjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNzQzNjMyNTcxMzk0NDU6MTBAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiTXIuIEFLIPCfmI5cIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKZUtwb2dERUpMQ2o3UUdHQVFnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInllUERsNzdCZ29FRmpPNUlkQ0E3WDc4VCtNNEdjbE5DUXl5NW9yWkZqbXM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZjhRS1FWOXVWQ29WWWZEWEZtT0JGUmdIYjVDYWRNd3o0bkFHWG5jZ3JnM1ZydnVuZnVtbzVBWWlURVI3OVZ3MUxlL1lXNzJJNi9iVm5CU0ZmRmdhQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMEVkeXFGSC9nMEZQNUhBTnJQTGtRU29aZ2ZKV3dxR3VtVFpydk1TQ0lpV1pabmtDODlCYkRyc3pxRVdORG1xbTZINlpFcVl2ZmovLzBWODl1NXRNREE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzNDE1NDA0ODkyOjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMDdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTkxODg3MCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUFzc1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQXNzLmpzb24iOiAie1wia2V5RGF0YVwiOlwiS044MWdIR2ZtSXpndHRDYmZCUnhvQW5ET0RmVVZ3L1BJMTVtZW9YTUdOND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo4MjI3MDc0NzgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
