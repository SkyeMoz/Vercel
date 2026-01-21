// ===== REDEEM DATABASE =====
const codes = {
  "DISCORD": {
    type: "link",
    value: "https://discord.gg/Ep7v9WTGmW"
  },
  "MIG2026": {
    type: "link",
    value: "https://www.mediafire.com/file/q2aqrra517gsbvb/%25F0%259D%2597%259C%25F0%259D%2597%25BB%25F0%259D%2597%25B4%25F0%259D%2597%25BC%25F0%259D%2598%2581_%25F0%259D%2597%259A%25F0%259D%2597%25B2%25F0%259D%2597%25BB%25F0%259D%2597%25B2%25F0%259D%2597%25BF%25F0%259D%2597%25AE%25F0%259D%2598%2581_%25F0%259D%2597%25BC%25F0%259D%2597%25BF_%25F0%259D%259F%25AD.%25F0%259D%259F%25AC.%25F0%259D%259F%25AC%25F0%259D%2598%2583_%25F0%259F%2592%258E.mcpack/file"
  },
  "ACTIONSTUFFLATEST": {
    type: "file",
    value: "files/𝗔𝗰𝘁𝗶𝗼𝗻 𝗮𝗻𝗱 𝘀𝘁𝘂𝗳𝗳 𝟭.𝟵 (𝗠𝗼𝘇 𝗜𝗻𝘀𝘁𝗮𝗹𝗹𝗲𝗿) 💵.mcpack"
  },
  "MOZHIVE": {
    type: "file",
    value: "files/𝗠𝗼𝘇𝗛𝗶𝘃𝗲 𝗧𝗲𝘅𝘁𝘂𝗿𝗲 𝗣𝗮𝗰𝗸 𝟭.𝟬.𝟬𝘃.mcpack"
    },
  "DYNAMICMCPE": {
    type: "file",
    value: "files/𝗗𝘆𝗻𝗮𝗺𝗶𝗰 𝗧𝗼𝗿𝗰𝗵.mcaddon"
  }
};

const input = document.getElementById("codeInput");
const btn = document.getElementById("redeemBtn");
const toast = document.getElementById("toast");
const loader = document.getElementById("loader");

const clickSound = document.getElementById("clickSound");
const successSound = document.getElementById("successSound");
const errorSound = document.getElementById("errorSound");

function showToast(msg, type) {
  toast.textContent = msg;
  toast.className = "show " + (type || "");
  setTimeout(() => toast.className = "", 2500);
}

btn.onclick = () => {
  clickSound.currentTime = 0;
  clickSound.play();

  const code = input.value.trim().toUpperCase();
  const data = codes[code];

  if (!data) {
    errorSound.currentTime = 0;
    errorSound.play();
    showToast("Redemption Not Found", "error");
    return;
  }

  successSound.currentTime = 0;
  successSound.play();
  showToast("Found! Fetching…", "success");
  loader.style.display = "flex";

  const delay = Math.floor(Math.random() * 6000) + 1000;

  setTimeout(async () => {
    loader.style.display = "none";

    if (data.type === "link") {
      try {
        await navigator.clipboard.writeText(data.value);
        showToast("Link copied to clipboard", "success");
      } catch {
        showToast("Clipboard blocked", "error");
      }
    }

    if (data.type === "file") {
      const a = document.createElement("a");
      a.href = data.value;
      a.download = "";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      showToast("File downloading…", "success");
    }

    input.value = "";
  }, delay);
};
