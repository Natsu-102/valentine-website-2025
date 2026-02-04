const config = window.VALENTINE_CONFIG || {};
config.valentineName = "Leonie(BabyGirl)";

document.title = config.pageTitle || "Valentine 💝";

window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("valentineTitle").textContent = config.valentineName;

    document.getElementById("question1Text").textContent = config.questions.first.text;
    document.getElementById("yesBtn1").textContent = config.questions.first.yesBtn;
    document.getElementById("noBtn1").textContent = config.questions.first.noBtn;
    document.getElementById("secretAnswerBtn").textContent = config.questions.first.secretAnswer;

    document.getElementById("question2Text").textContent = config.questions.second.text;
    document.getElementById("startText").textContent = config.questions.second.startText;
    document.getElementById("nextBtn").textContent = config.questions.second.nextBtn;

    document.getElementById("question3Text").textContent = config.questions.third.text;
    document.getElementById("yesBtn3").textContent = config.questions.third.yesBtn;
    document.getElementById("noBtn3").textContent = config.questions.third.noBtn;

    createFloatingElements();
    setupMusic();
});

function createFloatingElements() {
    const container = document.querySelector(".floating-elements");
    if (!container) return;

    [...config.floatingEmojis.hearts, ...config.floatingEmojis.bears].forEach(e => {
        const div = document.createElement("div");
        div.textContent = e;
        div.className = "floating";
        div.style.left = Math.random() * 100 + "vw";
        div.style.animationDuration = 10 + Math.random() * 20 + "s";
        container.appendChild(div);
    });
}

function setupMusic() {
    if (!config.music.enabled) return;

    const audio = document.getElementById("bgMusic");
    audio.src = config.music.musicUrl;
    audio.volume = config.music.volume;

    if (config.music.autoplay) {
        audio.play().catch(() => {});
    }
}

