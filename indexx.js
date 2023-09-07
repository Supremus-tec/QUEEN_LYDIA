const fs = require('fs');
const { default: makeWASocket, useMultiFileAuthState } = require('@whiskeysockets/baileys');
const pino = require('pino');
const getMenuText = require('./commandes/menu.js'); // Importez la fonction getMenuText depuis menu.js
const prefix = '♰'; // Préfixe personnalisé

async function bot() {
    const auth = await useMultiFileAuthState('session');
    const socket = makeWASocket({
        printQRInTerminal: true,
        browser: ['Supremus-Bot-MD', 'safari', '1.0.0'],
        auth: auth.state,
        logger: pino({ level: "silent" })
    });

    socket.ev.on("creds.update", auth.saveCreds);
    socket.ev.on("connection.update", ({ connection }) => {
        if (connection === "open") {
            console.log("le projet est réussi...!");
        }
        if (connection === "close") {
            bot();
        }
    });

    socket.ev.on("messages.upsert", async ({ messages }) => {
        const bebas = messages[0];
        const cmd = bebas.message.conversation.toLowerCase();

        function reply(text) {
            socket.sendMessage(bebas.key.remoteJid, { text: text }, {
                quoted: bebas
            });
        }

        switch (cmd) {
            case '♰ping': {
                reply("pong");
                break;
            }
            case '♰bot': {
                reply("le bot supremus-md est en cours de développement pour l'instant");
                break;
            }
            case '♰menu': {
                // Utilisez getMenuText et fournissez le nom ou le pseudo de l'utilisateur
                const sessionInfo = socket.getSessionInfo(bebas.key.remoteJid);
                const userName = sessionInfo.pushname || sessionInfo.username  ||'Arnold Dragneel';
                const personalizedMenu = getMenuText(userName);
                reply(personalizedMenu);
                break;
            }
            case '♰owner': {
                reply("le propriétaire de ce bot est Arnold Dragneel");
                break;
            }
            default:
        }
    });
}

bot();
