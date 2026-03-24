// =========================
// ELEMENTOS
// =========================
const card = document.getElementById("card");
const confettiContainer = document.querySelector(".confetti-container");
const stickersContainer = document.querySelector(".stickers");

// =========================
// DETECTAR MOBILE
// =========================
const isMobile = window.innerWidth < 600;

// =========================
// LISTA DE STICKERS
// =========================
const images = [
    "assets/stickers/html5.png",
    "assets/stickers/css3.png",
    "assets/stickers/JS.png",
    "assets/stickers/dookie.jpg",
    "assets/stickers/AmericanIdiot.jpg",
    "assets/stickers/python.png",
    "assets/stickers/IF.png",
    "assets/stickers/dstm.png",
    "assets/stickers/quenn.jpg",
    "assets/stickers/std.png",
    "assets/stickers/bill.png",
    "assets/stickers/bt.png",
    "assets/stickers/ds.png",
    "assets/stickers/cubo.png",
    "assets/stickers/fh.png",
    "assets/stickers/marvel.png",
    "assets/stickers/AmericanIdiot.jpg",
    "assets/stickers/Wish_You_Were_Here.jpg",
    "assets/stickers/C_Logo.png",
];

// =========================
// LIMITAR STICKERS NO MOBILE
// =========================
const imagesToUse = isMobile ? images.slice(0, 8) : images;

// =========================
// GERAR STICKERS
// =========================
imagesToUse.forEach((src) => {
    const img = document.createElement("img");
    img.src = src;
    img.classList.add("sticker");

    let x, y;

    // zona central proibida (onde fica o card)
    const centerX = 50;
    const centerY = 50;
    const safeZone = isMobile ? 30 : 25; // maior no mobile

    do {
        x = Math.random() * 100;
        y = Math.random() * 100;
    } while (
        x > centerX - safeZone &&
        x < centerX + safeZone &&
        y > centerY - safeZone &&
        y < centerY + safeZone
    );

    // rotação estilo sticker colado
    const rotate = Math.random() * 40 - 20;

    // tamanho dinâmico (profundidade)
    const size = isMobile
        ? Math.random() * 30 + 60   // menor no mobile
        : Math.random() * 60 + 80;

    img.style.left = x + "%";
    img.style.top = y + "%";
    img.style.width = size + "px";
    img.style.setProperty("--rotate", rotate + "deg");

    // profundidade visual
    img.style.zIndex = Math.random() > 0.5 ? 1 : 2;
    img.style.opacity = Math.random() * 0.3 + 0.7;

    // leve blur em alguns
    if (!isMobile && Math.random() > 0.7) {
        img.style.filter = "blur(1px)";
    }

    stickersContainer.appendChild(img);
});

// =========================
// CLIQUE NO CARD
// =========================
card.addEventListener("click", () => {
    const isOpening = !card.classList.contains("open");

    card.classList.toggle("open");

    // =========================
    // CONFETE
    // =========================
    if (isOpening) {
        const confettiCount = isMobile ? 40 : 100;

        for (let i = 0; i < confettiCount; i++) {
            const confetti = document.createElement("div");
            confetti.classList.add("confetti");

            confetti.style.top = "-10px";
            confetti.style.left = Math.random() * 100 + "%";

            // cores neutras elegantes
            confetti.style.background =
                Math.random() > 0.5 ? "#000" : "#555";

            // delay leve
            confetti.style.animationDelay = Math.random() * 0.3 + "s";

            // duração variada
            const duration = Math.random() * 1 + 2;
            confetti.style.animation = `confettiFall ${duration}s linear forwards`;

            confettiContainer.appendChild(confetti);

            setTimeout(() => confetti.remove(), duration * 1000);
        }
    }
});