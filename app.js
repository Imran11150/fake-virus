let countdown = 5;
const details = document.querySelector(".details");

const interval = setInterval(() => {
    countdown--;
    if (countdown > 0) {
        details.textContent = `${countdown} saniyədən sonra bütün fayllar silinəcək...`;
    } else {
        clearInterval(interval);
        details.textContent = "😂 Zarafat! Kompüterin güvəndədir.";
        document.body.style.backgroundColor = "green";
        document.body.style.color = "white";
        document.querySelector(".warning").textContent = "SİSTEM QORUNDU ✅";
    }
}, 1000);
