const tracks = [
    
    {
        title: "PIXABAY Gospel Worship Christian Church",
        desc: "Gospel Worship Christian Church",
        url: "gospel-worship-christian-church-348450.mp3"
    },
    {
        title: "PHJpianoSolos",
        desc: "Soft piano worship for devotion and prayer time.",
        url: "christian-medley-385017.mp3"
    },
    {
        title: "SDG MUSIC MINISTRY",
        desc: "Shout For Joy!",
        url: "https://www.sdgministry.com/wp-content/uploads/2019/12/01-Shout-For-Joy.mp3"
    },
    {
        title: "SDG MUSIC MINISTRY",
        desc: "Amazing Grace",
        url: "https://www.sdgministry.com/wp-content/uploads/2019/12/10-Amazing-Grace_Nothing-But-the-Blood.mp3"
    },
    {
        title: "Deep Meditation",
        desc: "Meditation/spiritual Healing Music",
        url: "healing-spiritual-music-304095.mp3"
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
