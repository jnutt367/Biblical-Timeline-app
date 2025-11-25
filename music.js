// Worship Music Playlist
const tracks = [
    {
        title: "Still Waters",
        desc: "Calm instrumental worship for prayer and reflection.",
        url: "https://cdn.openai.com/gpt-music/samples/ii/01.mp3"
    },
    {
        title: "Peace in His Presence",
        desc: "Ambient prayer atmosphere for meditation and reading scripture.",
        url: "https://cdn.openai.com/gpt-music/samples/ii/02.mp3"
    },
    {
        title: "Abide With Me",
        desc: "Soft piano worship for devotion time.",
        url: "https://cdn.openai.com/gpt-music/samples/ii/03.mp3"
    },
    {
        title: "He Restores My Soul",
        desc: "Healing ambient pad music for quiet times.",
        url: "https://cdn.openai.com/gpt-music/samples/ii/04.mp3"
    }
];

const playlistContainer = document.getElementById("playlistContainer");
const musicPlayer = document.getElementById("musicPlayer");

// Create cards dynamically
tracks.forEach((track, index) => {
    const card = document.createElement("div");
    card.className = "music-card";
    card.innerHTML = `
        <div class="music-title">${track.title}</div>
        <div class="music-desc">${track.desc}</div>
        <button class="play-btn" onclick="playTrack(${index})">Play</button>
    `;
    playlistContainer.appendChild(card);
});

// Play selected track
function playTrack(index) {
    const track = tracks[index];
    musicPlayer.src = track.url;
    musicPlayer.play();

    alert(`Now Playing: ${track.title}`);
}
