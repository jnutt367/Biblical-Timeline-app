const tracks = [
    {
        title: "Deep Meditation",
        desc: "Soaking worship pads for prayer and reflection.",
        url: "https://cdn.pixabay.com/download/audio/2022/03/15/audio_3fba1c4ec0.mp3?filename=deep-meditation-112191.mp3"
    },
    {
        title: "Contemplative Ambient",
        desc: "Calm background music for reading Scripture.",
        url: "https://cdn.pixabay.com/download/audio/2023/01/01/audio_59c8d26895.mp3?filename=contemplative-ambient-131746.mp3"
    },
    {
        title: "Inspiring Cinematic Piano",
        desc: "Soft piano worship for devotion and prayer time.",
        url: "https://cdn.pixabay.com/download/audio/2022/03/15/audio_9fc39bdfad.mp3?filename=inspiring-cinematic-piano-112191.mp3"
    },
    {
        title: "Peaceful Sleep Music",
        desc: "Gentle ambient pads perfect for quiet moments.",
        url: "https://cdn.pixabay.com/download/audio/2022/03/03/audio_bf3db59bd4.mp3?filename=peaceful-relaxing-sleep-music-110624.mp3"
    },
    {
        title: "Emotional Ambient",
        desc: "Meditative atmosphere for reflection.",
        url: "https://cdn.pixabay.com/download/audio/2021/09/26/audio_0f9309e10e.mp3?filename=ambient-soft-breeze-11037.mp3"
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
//function playTrack(index) {
 //   const track = tracks[index];
 //   musicPlayer.src = track.url;
//    musicPlayer.play();

 //   alert(`Now Playing: ${track.title}`);
//}
//
function playTrack(index) {
    const track = tracks[index];
    musicPlayer.src = track.url;
    musicPlayer.load();       // important
    musicPlayer.play()
        .then(() => console.log("Playing:", track.title))
        .catch(err => console.error("Play failed:", err));
}
