export default function textToSpeech(text) {
    let utterence = new SpeechSynthesisUtterance(text);
    let synth = window.speechSynthesis;
    let voices = synth.getVoices();
    voices.forEach(v => {
        if (v.name === "English") {
            utterence.voice = v;
            utterence.rate = 0.95;
            utterence.pitch = 0;
        }
    })
    // synth.speak(utterence);
}
