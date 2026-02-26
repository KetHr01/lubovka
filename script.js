// ВАША дата (рік, місяць-1, день, година, хвилина)
const startDate = new Date(2025, 3, 11, 0, 0);

function updateCounter() {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
}

setInterval(updateCounter, 1000);
updateCounter();


const messages = [
    "Ти — мій спокій у цьому хаотичному світі 🌍",
    "Я обираю тебе щодня. Без пауз. Без сумнівів 💍",
    "Наше кохання сильніше, навіть за кілометри ✨",
    "Ти — моя найкраща історія 🤍",
    "Я люблю тебе сильніше, ніж учора 🥹",
    "З тобою я вдома, де б ми не були 🏡",
    "Твої обійми — моє улюблене місце на Землі 🌌",
    "Ти — мій Всесвіт 💫",
    "Якби було мільйон життів — я б у кожному шукала тебе",
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
    "Безмежно. Шалено. Безтямно."
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