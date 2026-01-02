const codes = {
  "UGCFAK": "https://example.com/capcut.apk",
  "SEN67J": "https://example.com/zenodual"
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
  toast.className = type ? `show ${type}` : "show";
  setTimeout(() => toast.className = "", 2500);
}

btn.onclick = async () => {
  clickSound.play();
  const code = input.value.trim().toUpperCase();

  if (!codes[code]) {
    errorSound.play();
    showToast("Redemption Not Found", "error");
    return;
  }

  successSound.play();
  showToast("Found! Installing…", "success");
  loader.style.display = "flex";

  const delay = Math.floor(Math.random() * 6000) + 1000;

  setTimeout(async () => {
    loader.style.display = "none";
    await navigator.clipboard.writeText(codes[code]);
    showToast("Link copied to clipboard", "success");
  }, delay);
};
