textbox = document.getElementById("speech")
const voice = document.getElementById("speak")


async function textDisplay(text) {
    for (let i = 0; i < text.length; i++) {
        let letter = text.charAt(i);
        textbox.textContent += letter
        voice.play()
        document.title = textbox.textContent
        await new Promise(r => setTimeout(r, 800));
        voice.pause()
        voice.currentTime = 0;
      }
}

async function textClear() {
    await textDisplay();
    console.log("works")
    for (let i = textbox.length; i > 0; i--) {
        textbox.textContent[i] = " "
        await new Promise(r => setTimeout(r, 100));
    }
}

textDisplay("ARE YOU THERE?")

// find a way to make a text display using synchronious functions - as one can't run after another. how does the deltarune website do it???? lmfao