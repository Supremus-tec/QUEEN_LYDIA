const prefix = '♰'; // Préfixe personnalisé

// Créez une fonction qui prend le nom ou pseudo en argument
function getMenuText(userName) {
    return `
🌟 𝑆𝑢𝑝𝑟𝑒𝑚𝑢𝑠-𝐵𝑜𝑡-𝑀𝐷 𝑀𝑒𝑛𝑢 🌟

𝑆𝑎𝑙𝑢𝑡 ${userName} 𝐽𝑒 𝑠𝑢𝑖𝑠 𝑙𝑒 𝐵𝑜𝑡 𝑊ℎ𝑎𝑡𝑠𝐴𝑝𝑝 
𝑆𝑢𝑝𝑟𝑒𝑚𝑢𝑠-𝐵𝑜𝑡-𝑀𝐷, 𝑐𝑟𝑒𝑒 𝑝𝑎𝑟 𝐴𝑟𝑛𝑜𝑙𝑑 
𝑎𝑙𝑖𝑎𝑠 +𝟹𝟸_𝑆𝑢𝑝𝑟𝑒𝑚𝑢𝑠-𝑇𝑒𝑐ℎ.

╭──❰ 📋 *𝑀𝑒𝑛𝑢 𝑃𝑟𝑖𝑛𝑐𝑖𝑝𝑎𝑙* 📋 ❱
│ ➤ ${prefix} 𝑙𝑖𝑠𝑡
│ ➤ ${prefix} 𝑑𝑜𝑤𝑛𝑙𝑎𝑑𝑚𝑒𝑛𝑢
│ ➤ ${prefix} 𝑔𝑟𝑜𝑢𝑝𝑚𝑒𝑛𝑢
│ ➤ ${prefix} 𝑠𝑒𝑎𝑟𝑐ℎ𝑚𝑒𝑛𝑢
│ ➤ ${prefix} 𝑟𝑎𝑛𝑑𝑜𝑚𝑚𝑒𝑛𝑢 
│ ➤ ${prefix} 𝑓𝑢𝑛𝑚𝑒𝑛𝑢
│ ➤ ${prefix} 𝑣𝑜𝑖𝑐𝑒𝑚𝑒𝑛𝑢
│ ➤ ${prefix} 𝑚𝑖𝑠𝑐𝑚𝑒𝑛𝑢
│ ➤ ${prefix} 𝑡𝑒𝑥𝑡𝑙𝑜𝑔𝑜
│ ➤ ${prefix} 𝑜𝑤𝑛𝑒𝑟𝑚𝑒𝑛𝑢
│ ➤ ${prefix} 𝑎𝑏𝑜𝑢𝑡
╰──────────

𝐵𝑜𝑛𝑛𝑒 𝑈𝑡𝑖𝑙𝑖𝑠𝑎𝑡𝑖𝑜𝑛 ! 🌈`
;
}

module.exports = getMenuText;