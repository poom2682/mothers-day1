const envelope =
    document.getElementById("envelope");

const openButton =
    document.getElementById("openButton");

const enterButton =
    document.getElementById("enterButton");


openButton.addEventListener("click", () => {

    envelope.classList.add("open");

    openButton.style.display = "none";

    setTimeout(() => {

        enterButton.style.display =
            "inline-block";

        createHearts();

    }, 1000);

});


enterButton.addEventListener("click", () => {

   window.location.href = "gift.html";

});


function createHearts() {

    for (let i = 0; i < 25; i++) {

        const heart =
            document.createElement("div");

        heart.innerHTML =
            Math.random() > 0.5
                ? "❤️"
                : "🌸";

        heart.style.position =
            "fixed";

        heart.style.left =
            "50%";

        heart.style.top =
            "50%";

        heart.style.fontSize =
            "25px";

        heart.style.pointerEvents =
            "none";

        heart.style.zIndex =
            "10";

        const x =
            (Math.random() - 0.5) * 600;

        const y =
            (Math.random() - 0.5) * 500;

        heart.animate(
            [
                {
                    transform:
                        "translate(-50%, -50%) scale(0.5)",
                    opacity: 1
                },
                {
                    transform:
                        `translate(${x}px, ${y}px) scale(1.3)`,
                    opacity: 0
                }
            ],
            {
                duration: 1500,
                easing: "ease-out"
            }
        );

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 1500);

    }

}