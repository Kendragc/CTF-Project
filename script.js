// Hidden base64 clue
const encodedMessage = "Q1RGeydHMDBkX0owOF95MHVf"; // CTF{'G00d_J08_y0u_
console.log("Hint: Decode the base64 string in script.js for the first part of the flag.");

// Cookie clue (rot13 encoded)
document.cookie = "ctfHint=sbhaQ_gur3_s14T!}"; // rot13 -> found_the3_f14G!}

// Local Storage clue (middle part of flag)
localStorage.setItem("midFlag", "_f0unD_th3_");
