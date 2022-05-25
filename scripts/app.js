window.onload = () => {

    // Get initial windows loaded into memory
    const welcomeScreen = document.getElementById("welcome");
    const mainScreen = document.getElementById("main-screen");

    // Get enter-site button loaded into memory
    const enterSite = document.getElementById('enter-button');

    // Add an event listener to the enter-site button
    enterSite.addEventListener('click', () => {
        welcomeScreen.style.display = "none";
        mainScreen.style.display = "flex";
    })

    // Load main-screen elements into memory
    const input = document.getElementById("main-input");
    const leetOut = document.getElementById("leet-out");
    const owoOut = document.getElementById("owo-out");

    input.addEventListener("keyup", (e) => {
        owoProcess(input.value)
        console.log("uwu")

        owoReplacements["punctuation"] = owoArray[Math.floor(Math.random() * owoArray.length)]
    })


    // Functions & Variables below here
    const owoPatterns = {
        n_vowel: /([nN])([aeiouAEIOU])/g,
        rl_w: /([RrLl])/g,
        ove: /([Oo][Vv][Ee])/g,
        punctuation: /([!?\.])/g
    };

    const owoReplacements = {
        n_vowel: "$1y$2",
        rl_w: "w",
        ove: "uv",
        punctuation: owoArray[Math.floor(Math.random() * owoArray.length)]
    }

    const owoProcess = (str) => {
        let temp = str;

        temp = temp.replace(owoPatterns["n_vowel"], owoReplacements["n_vowel"])
        temp = temp.replace(owoPatterns["rl_w"], owoReplacements["rl_w"])
        temp = temp.replace(owoPatterns["ove"], owoReplacements["ove"])
        temp = temp.replace(owoPatterns["punctuation"], owoReplacements["punctuation"])

        owoOut.textContent = temp;
        temp = ""
        return null
    }

};

const owoArray = [
    "OwO",
    "Owo ",
    "owO ",
    "ÓwÓ ",
    "ÕwÕ ",
    "@w@ ",
    "ØwØ ",
    "øwø ",
    "uwu ",
    "☆w☆ ",
    "✧w✧ ",
    "♥w♥ ",
    "゜w゜ ",
    "◕w◕ ",
    "ᅌwᅌ ",
    "◔w◔ ",
    "ʘwʘ ",
    "⓪w⓪",
    "ʘw ︠ʘ ",
    "(owo)",
    "𝕠𝕨𝕠",
    "𝕆𝕨𝕆",
    "𝔬𝔴𝔬",
    "𝖔𝖜𝖔",
    "𝓞𝔀𝓞",
    "𝒪𝓌𝒪",
    "𝐨𝐰𝐨",
    "𝐎𝐰𝐎",
    "𝘰𝘸𝘰",
    "𝙤𝙬𝙤",
    "𝙊𝙬𝙊",
    "𝚘𝚠𝚘",
    "σωσ",
    "OɯO",
    "oʍo",
    "oᗯo",
    "๏w๏",
    "o̲wo̲",
    "ᎧᏇᎧ",
    "օաօ",
    "(。O ω O。)",
    "(。O⁄ ⁄ω⁄ ⁄ O。)",
    "(O ᵕ O)",
    "(O꒳O)",
    "ღ(O꒳Oღ)",
    "♥(。ᅌ ω ᅌ。)",
    "(ʘωʘ)",
    "( ʘ ྌ ʘ )",
    "(⁄ʘ⁄ ⁄ ω⁄ ⁄ ʘ⁄)♡",
    "( ͡o ω ͡o )",
    "( ͡o ᵕ ͡o )",
    "( ͡o ꒳ ͡o )",
    "( o͡ ꒳ o͡ )",
    "( °꒳° )",
    "( °ᵕ° )",
    "( °﹏° )",
    "( °ω° )",
    "(ဝ့ ྌ ဝ့)",
    "(ဝ့ ྌྏྏྏྏྏྏྏ ဝ့)",
    "（ ゜ω 。） ",
    "（ 。ω ゜）",
    "OwO *𝘸𝘩𝘢𝘵’𝘴 𝘵𝘩𝘪𝘴*",
    "OwO *𝘯𝘰𝘵𝘪𝘤𝘦𝘴 𝘣𝘶𝘭𝘨𝘦*",
    "𝐎𝐰𝐎 *𝘸𝘩𝘢𝘵’𝘴 𝘵𝘩𝘪𝘴*",
    "๏w๏ *𝘯𝘰𝘵𝘪𝘤𝘦𝘴 𝘣𝘶𝘭𝘨𝘦*",
    "( ͡o ꒳ ͡o )*𝔫𝔬𝔱𝔦𝔠𝔢𝔰 𝔟𝔲𝔩𝔤𝔢*",
    "*𝓌𝒶𝓉𝓈 𝒹𝒾𝓈?*ღ(O꒳Oღ)",
    "*𝓃𝓊𝓏𝓏𝓁𝑒𝓈 𝓎𝑜𝓊*(。O⁄ ⁄ω⁄ ⁄ O。)",
    "(𝐎𝐰𝐎)<𝕣𝕒𝕨𝕣𝕣𝕣)~",
    "‿︵*𝓇𝒶𝓌𝓇*‿︵ ʘwʘ",
    "✼ ҉ (O꒳O) ҉ ✼",
    "✼ ҉♡ (。O⁄ ⁄ω⁄ ⁄ O。) ҉♡ ✼",
    "✧･ﾟ: *✧･ﾟ:*(OwO )*:･ﾟ✧*:･ﾟ✧",
]