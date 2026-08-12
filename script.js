const openButton = document.getElementById("openButton");
const message = document.getElementById("message");


// กดปุ่มเปิดข้อความ
openButton.addEventListener("click", function () {

    message.classList.toggle("show");

    if (message.classList.contains("show")) {

        openButton.innerHTML = "❤️ รักแม่ที่สุด ❤️";

        createHeartExplosion();

    } else {

        openButton.innerHTML = "💌 กดเพื่อเปิดข้อความ";

    }

});


// สร้างหัวใจลอยด้านหลัง
function createFloatingHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML =
        Math.random() > 0.5 ? "❤️" : "🌸";

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.animationDuration =
        (5 + Math.random() * 5) + "s";

    heart.style.fontSize =
        (15 + Math.random() * 20) + "px";

    document.body.appendChild(heart);


    setTimeout(() => {
        heart.remove();
    }, 10000);
}


// สร้างหัวใจทุก ๆ 700ms
setInterval(createFloatingHeart, 700);


// เอฟเฟกต์หัวใจกระจาย
function createHeartExplosion() {

    const symbols = [
        "❤️",
        "💖",
        "💕",
        "🌸",
        "🌷"
    ];

    for (let i = 0; i < 30; i++) {

        const heart =
            document.createElement("div");

        heart.className =
            "confetti-heart";

        heart.innerHTML =
            symbols[
                Math.floor(
                    Math.random() * symbols.length
                )
            ];

        heart.style.left = "50%";
        heart.style.top = "50%";

        const x =
            (Math.random() - 0.5) * 700;

        const y =
            (Math.random() - 0.5) * 500;

        heart.style.setProperty(
            "--x",
            x + "px"
        );

        heart.style.setProperty(
            "--y",
            y + "px"
        );

        document.body.appendChild(heart);


        setTimeout(() => {
            heart.remove();
        }, 1500);
    }
}