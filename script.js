// Hint button logic with dropdown animation
function showHint() {
  const hintBox = document.getElementById("hintArea");
  const hintText = document.getElementById("hintText");

   hintText.innerText = "Need help? Inspecting elements and checking the console might come in handy...";

  if (hintBox.classList.contains("hint-shown")) {
    hintBox.classList.remove("hint-shown");
  } else {
    hintBox.classList.add("hint-shown");
  }
}

const d = "U3VwZXJfTm90X1RoZV9GbGFn";
const e = "Q1RGeydHMDBkX0owOF95MHVf"; 

console.log("Need help? Base64 can be decoded, but not all clues are real...");

document.cookie = "mislead=U29ycnlfbm90X3RoaXNfb25l"; 

setTimeout(() => {
  document.cookie = "ctfHint=sbhaQ_gur3_s14T!}"; 
}, 3000); 

// Obfuscated local storage logic
(function () {
  const x = ["_f0unD", "th3"];
  localStorage.setItem("midFlag", `${x[0]}_${x[1]}_`);
})();
