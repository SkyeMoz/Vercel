// IMPORTANT: keys are UPPERCASE because we use .toUpperCase()
const codes = {
  "DISCORD": "https://discord.gg/n3ZgDEdMZM",
  "MIG2026": "https://www.mediafire.com/file/q2aqrra517gsbvb/%25F0%259D%2597%259C%25F0%259D%2597%25BB%25F0%259D%2597%25B4%25F0%259D%2597%25BC%25F0%259D%2598%2581_%25F0%259D%2597%259A%25F0%259D%2597%25B2%25F0%259D%2597%25BB%25F0%259D%2597%25B2%25F0%259D%2597%25BF%25F0%259D%2597%25AE%25F0%259D%2598%2581%25F0%259D%2597%25BC%25F0%259D%2597%25BF_%25F0%259D%259F%25AD.%25F0%259D%259F%25AC.%25F0%259D%259F%25AC%25F0%259D%2598%2583_%25F0%259F%2592%258E.mcpack/file"
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
