const searchInput = document.getElementById('timelineSearch');
const events = document.querySelectorAll('.timeline-event');

searchInput.addEventListener('input', function() {
    const query = searchInput.value.toLowerCase();
    events.forEach(event => {
        const title = event.querySelector('.event-title').innerText.toLowerCase();
        const preview = event.querySelector('.event-preview').innerText.toLowerCase();
        const details = event.querySelector('.event-details').innerText.toLowerCase();

        if(title.includes(query) || preview.includes(query) || details.includes(query)) {
            event.style.display = 'block';
        } else {
            event.style.display = 'none';
        }
    });
});

searchInput.addEventListener('keydown', function(event) {
    if(event.key === "Enter") {
        const query = searchInput.value.toLowerCase();
        for(let eventCard of events) {
            const title = eventCard.querySelector('.event-title').innerText.toLowerCase();
            const preview = eventCard.querySelector('.event-preview').innerText.toLowerCase();
            const details = eventCard.querySelector('.event-details').innerText.toLowerCase();

            if(title.includes(query) || preview.includes(query) || details.includes(query)) {
                eventCard.scrollIntoView({behavior: 'smooth', block: 'center'});
                eventCard.style.backgroundColor = '#fff9c4'; // highlight
                setTimeout(() => eventCard.style.backgroundColor = '', 2000); // remove highlight after 2s
                break; // scroll to first match only
            }
        }
    }
});
