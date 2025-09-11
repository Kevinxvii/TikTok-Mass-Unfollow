function startUnfollow() {
    const buttons = Array.from(document.querySelectorAll('[data-e2e="follow-button"]'))
        .filter(btn => btn.innerText.trim() === "Following");

    if (buttons.length === 0) {
        console.log("⚠️ Bottoni non ancora caricati, riprovo tra 1s...");
        setTimeout(startUnfollow, 1000);
        return;
    }

    console.log("🔎 Trovati", buttons.length, "pulsanti Following");

    let i = 0;
    function clickNext() {
        if (i >= buttons.length) {
            console.log("✅ Finito!");
            return;
        }
        buttons[i].click();
        console.log("❌ Unfollow su:", i + 1, "/", buttons.length);
        i++;
        setTimeout(clickNext, 800);
    }

    clickNext();
}

const spanButtonFollowing = document.querySelector('[data-e2e="following"]');
if (spanButtonFollowing) {
    spanButtonFollowing.click();
    console.log("✅ Scheda Following aperta");
}

setTimeout(startUnfollow, 1000);
