//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ05TL3VvRjdpdkNUaFZtblREb1dmUndCMU5jdTJGbmUzWktGaEJReFhIMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUW9sdkMxbHZPWXVVN0NjUEF4djFwaWdVRGZqbUdQeHVmM1BpUTRBblpEQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrUDBkMWFJR2dIK1phY2dvM0dYT3RXYWl6aUx4czkzcVpHWnBqblEyeGt3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1QlMrNjZWSUZzYUZML1d2SUJub2VtZ0NqaG5odnNTdmR6dFpmRDNOT1I0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVPUyt0V2JONjU3czd0enRRSE1UejR4TXZiVFJUMlN2cjZmVGtWbkpCRVE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InpibUFHaDNwaXpPQmhZdlVKeGJER0xOUUsrOXZFaWRRVnBXenBIcUVoSDA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUdFU2hOTHJxNUFQQ0ZnYmNHVGgyY1I0YncxMlhXRWpGQndGOWlVQkhrTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWGE4UGw1a2JDYkxYbkVyN0hYRWFrZC9aT1M5Q0NHaXdtZWpIMmVoYkZXND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikh2TDJGMnpQcU1WbnhINnVhQ3ZtaVdwM3ZSNzkrUXRkYTVDOEQ0b2MyajBJbUdTUmowZmZDc2tYRFUyNE5rR3l3MG9UckFadmJ6aFVJdWlkaWg1T0JBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTk5LCJhZHZTZWNyZXRLZXkiOiJGcWhhOUx2RGpQMG1ZTlhjSTduaURJTzloQStNWlBNSW9WSVFLVUJ1Y0s0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzIxMzAyNzYxQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkJENjVEMjFBMDI5MTRGNzdFQzk5REZGMDNDQzNFM0JBIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTUzMzQzOTB9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Inl0UGcwOC10U1htLURuNzRYSnFHVXciLCJwaG9uZUlkIjoiZDAzNzAyODUtYzZhYi00NTU2LWE1NDYtMWRiZjA4OTAwNWE0IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhTeXU0blEyYWtuc2ZqRi80U08yN2hWOUUvZz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzZCszcXRVL3N4NDRXYnlyUlNYQ0YxUERjV009In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRTdLOE01MU0iLCJtZSI6eyJpZCI6Ijk0NzIxMzAyNzYxOjgwQHMud2hhdHNhcHAubmV0IiwibGlkIjoiOTI4ODM1MTY0MDc5NDE6ODBAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNcmxrcnNCRU9lTmdjVUdHQVFnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJIWlpFNjRJVVYySGRzTGxGb0x2STBoOWl6eFpWc1RXbXo2TnhjT21SRUFnPSIsImFjY291bnRTaWduYXR1cmUiOiJ5eFJ5Y1VEU3JNT1lGajhORG5MbnpuNWhxNkFkSElFS3VpZ3VCZXBkeUs1NTkrVjRGZ2J2UjVuNlBjMytiT2ZrdDBXQkFYbXRueXRKN1hlV0NxL25CUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiUVRWNVNxUkExR2xkak1DemVnTmd6VnJvTkgvY1dxMzVGdDROQWlPR1JqWFVvVHZoRU0vL1hPbzR1TWl3cmZKR2hDWGpzV0lud2VNWmZCU0JQeDFQQXc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDcyMTMwMjc2MTo4MEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSMldST3VDRkZkaDNiQzVSYUM3eU5JZllzOFdWYkUxcHMramNYRHBrUkFJIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQTBJQlE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTUzMzQzODksImxhc3RQcm9wSGFzaCI6IlBXazVCIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFGaFEifQ==",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "your account crated number",
  PASSWORD: 
    process.env.PASSWORD || "your password",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
