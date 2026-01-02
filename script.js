// IMPORTANT: keys are UPPERCASE because we use .toUpperCase()
const codes = {
  "DISCORD": "https://discord.gg/n3ZgDEdMZM",
  "BETACRAFT": "loadstring(game:HttpGet('https://raw.githubusercontent.com/ZynixMoz/SkyeMoz/refs/heads/main/MozCraft/Main'))()"
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
  toast.className = "";
  toast.classList.add("show");
  if (type) toast.classList.add(type);
  setTimeout(() => toast.className = "", 2500);
}

btn.onclick = async () => {
  clickSound.currentTime = 0;
  clickSound.play();

  const code = input.value.trim().toUpperCase();

  if (!codes[code]) {
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
    try {
      await navigator.clipboard.writeText(codes[code]);
      showToast("Link copied to clipboard", "success");
    } catch (e) {
      showToast("Clipboard blocked", "error");
    }
  }, delay);
};
