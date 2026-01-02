const codes = {
  "DCS001": "https://discord.gg/n3ZgDEdMZM",
  // add more:
  // "CODE123": "https://yourlink.com/file"
};

const input = document.getElementById("codeInput");
const btn = document.getElementById("redeemBtn");
const toast = document.getElementById("toast");
const loader = document.getElementById("loader");

const clickSound = document.getElementById("clickSound");
const successSound = document.getElementById("successSound");
const errorSound = document.getElementById("errorSound");

function showToast(text, type) {
  toast.textContent = text;
  toast.className = "";
  toast.classList.add("show", type);
  setTimeout(() => toast.classList.remove("show"), 2600);
}

btn.addEventListener("click", () => {
  clickSound.currentTime = 0;
  clickSound.play();

  const code = input.value.trim().toUpperCase();

  if (codes[code]) {
    successSound.play();
    showToast("Found! Link copied to clipboard", "success");
    loader.style.display = "flex";

    const delay = Math.floor(Math.random() * 6000) + 1000;

    setTimeout(async () => {
      loader.style.display = "none";
      try {
        await navigator.clipboard.writeText(codes[code]);
      } catch (e) {
        console.error("Clipboard failed", e);
      }
    }, delay);
  } else {
    errorSound.play();
    showToast("Redemption Not Found", "error");
  }
});
```javascript
const codes = {
  "UGCFAK": "files/capcut.apk",
  // add more like:
  // "CODE123": "files/yourfile.zip",
};

const input = document.getElementById("codeInput");
const btn = document.getElementById("redeemBtn");
const toast = document.getElementById("toast");
const clickSound = document.getElementById("clickSound");

function showToast(text) {
  toast.textContent = text;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2500);
}

btn.addEventListener("click", () => {
  clickSound.currentTime = 0;
  clickSound.play();

  const code = input.value.trim().toUpperCase();

  if (codes[code]) {
    showToast("Found! Installing...");

    setTimeout(() => {
      const a = document.createElement("a");
      a.href = codes[code];
      a.download = "";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }, 1200);
  } else {
    showToast("Redemption Not Found");
  }
});
