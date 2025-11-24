// Firebase Firestore Reference for Prayer Requests
const prayerRef = db.collection("prayerRequests");

// Submit Prayer Request
document.getElementById("prayerForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("prayerName").value.trim();
    const text = document.getElementById("prayerText").value.trim();

    if (!name || !text) return;

    await prayerRef.add({
        name,
        text,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });

    // Clear form
    document.getElementById("prayerForm").reset();
});

// Real-time Listener (instantly updates the UI)
prayerRef
    .orderBy("timestamp", "desc")
    .onSnapshot((snapshot) => {
        const container = document.getElementById("prayerContainer");
        container.innerHTML = "";

        snapshot.forEach((doc) => {
            const data = doc.data();

            const card = document.createElement("div");
            card.className = "prayer-card";

            card.innerHTML = `
                <h3>${data.name}</h3>
                <p>${data.text}</p>
            `;

            container.appendChild(card);
        });
    });
