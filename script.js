// ВАША дата (рік, місяць-1, день, година, хвилина)
const startDate = new Date(2025, 2, 8, 9, 38);

let anniversaryShown = false;

function updateCounter() {
    const now = new Date();
    const diff = now - startDate;

    if (diff < 0) return;

    const totalDays = Math.floor(diff / (1000 * 60 * 60 * 24));

    const years = Math.floor(totalDays / 365);
    const days = totalDays % 365;

    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    if (years > 0) {
        document.getElementById("years-block").style.display = "block";
        document.getElementById("years").innerText = years;
    }

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    checkAnniversary(now, years);
}

setInterval(updateCounter, 1000);
updateCounter();

function checkAnniversary(now, years) {
    const isAnniversary =
        now.getDate() === startDate.getDate() &&
        now.getMonth() === startDate.getMonth();

    if (isAnniversary && years >= 1) {

        document.querySelector(".real-time").innerText =
            `Сьогодні нам ${years} ${yearWord(years)} 💞`;

        showAnniversary(years);

    } else {
        document.querySelector(".real-time").innerText =
            "насправді трішки довше";
    }
}

function showAnniversary(years) {
    if (anniversaryShown) return;
    anniversaryShown = true;

    const modal = document.getElementById("anniversary-modal");
    const text = document.getElementById("anniversary-text");

    text.innerText = `Нам ${years} ${yearWord(years)} 🤍`;

    modal.style.display = "flex";

    launchFireworks();

    setTimeout(() => {
        modal.style.display = "none";
    }, 30000);
}

function yearWord(years) {
    if (years % 10 === 1 && years % 100 !== 11) return "рік";
    if ([2,3,4].includes(years % 10) && ![12,13,14].includes(years % 100)) return "роки";
    return "років";
}

const messages = [
    "Ти — мій спокій у цьому хаотичному світі 🌍",
    "Я обираю тебе щодня. Без пауз. Без сумнівів 💍",
    "Наше кохання сильніше, навіть за кілометри ✨",
    "Ти — моя найкраща історія 🤍",
    "Я люблю тебе сильніше, ніж учора 🥹",
    "З тобою я вдома, де б ми не були 🏡",
    "Твої обійми — моє улюблене місце на Землі 🌌",
    "Ти — мій Всесвіт 💫",
    "Якби я мала мільйон життів — я б у кожному шукала тебе",
    "Моє серце належить тобі ❤️",
    "Ти — моя найкраща залежність",
    "Поки є ти — є сенс у всьому",
    "Я закохуюсь у тебе знову і знову",
    "Ти — моє море, в якому я хочу тонути 🌊",
    "Мені байдуже де ми, поки є ми",
    "Ти — моє найбажаніше майбутнє",
    "Світ стає тихішим, коли ти поруч",
    "Ти — найкрасивіша дівчинка ❤️",
    "Я завжди поряд 🤍",
    "З тобою навіть тиша звучить красиво",
    "Ти - мій дім ❤️",
    "Моя сім'я ❤️",
    "Моя ohana ❤️",
    "Моє серце б’ється спокійніше, коли ти поруч",
    "Світ стає світлішим, коли ти посміхаєшся",
    "Я хочу ділити з тобою навіть найзвичайніші дні",
    "Я б знайшла тебе у будь-якому місті, у будь-якому житті",
    "Ти — моє щастя",
    "Я хочу прокидатися поруч із тобою щодня впродовж життя",
    "Ти — моє найбезпечніше місце",
    "Мені не потрібен ідеальний світ. Мені потрібна ти.",
    "Я хочу тримати твою руку завжди",
    "Ти — моє світло навіть у найтемніші дні.",
    "Безмежно. Шалено. Безтямно.",
    "Можна вічно дивитись як тече вода, горить вогонь і як палає моє серце від кохання до тебе"
];

function showLove() {
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById("message").innerText = randomMessage;

    for (let i = 0; i < 12; i++) {
        const heart = document.createElement("div");
        heart.innerText = "💗";
        heart.className = "floating-heart";
        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.top = "65%";
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 2500);
    }
}

function launchFireworks() {

    const centerY = window.innerHeight * 0.42; 
    const leftX = window.innerWidth * 0.4;
    const rightX = window.innerWidth * 0.6;

    function explodeSide(originX) {
        for (let i = 0; i < 35; i++) {

            const firework = document.createElement("div");
            firework.className = "firework";

            const angle = Math.random() * Math.PI * 2;
            const radius = Math.random() * 120;

            const x = Math.cos(angle) * radius + "px";
            const y = Math.sin(angle) * radius + "px";

            firework.style.left = originX + "px";
            firework.style.top = centerY + "px";

            firework.style.setProperty("--x", x);
            firework.style.setProperty("--y", y);

            firework.style.background =
                `hsl(${Math.random() * 360}, 100%, 60%)`;

            document.body.appendChild(firework);

            setTimeout(() => firework.remove(), 900);
        }
    }

    // Стріляє 4 рази
    let count = 0;
    const interval = setInterval(() => {
        explodeSide(leftX);
        explodeSide(rightX);

        count++;
        if (count >= 7) clearInterval(interval);
    }, 600);
}

function activateNightMode() {
    const hour = new Date().getHours();

    if (hour >= 21 || hour < 6) {
        document.body.classList.add("night");
        document.querySelector("h1").innerText =
            "Навіть коли темно — ти моє світло ✨";

        createStars();
    }
}

function createStars() {
    for (let i = 0; i < 60; i++) {
        const star = document.createElement("div");
        star.className = "stars";
        star.style.left = Math.random() * window.innerWidth + "px";
        star.style.top = Math.random() * window.innerHeight + "px";
        star.style.animationDelay = Math.random() * 2 + "s";
        document.body.appendChild(star);
    }
}

activateNightMode();

function createBackgroundHearts() {
    setInterval(() => {
        const heart = document.createElement("div");
        heart.className = "background-heart";
        heart.innerText = "💖";
        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.fontSize = 12 + Math.random() * 20 + "px";

        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 12000);
    }, 2000);
}

createBackgroundHearts();




