const searchInput = document.getElementById('timelineSearch');
const events = document.querySelectorAll('.timeline-event');

function filterTimeline() {
    const filterValue = document.querySelector('input[name="timelineFilter"]:checked').value;
    const query = searchInput.value.toLowerCase();

    events.forEach(event => {
        const title = event.querySelector('.event-title').innerText.toLowerCase();
        const preview = event.querySelector('.event-preview').innerText.toLowerCase();
        const details = event.querySelector('.event-details').innerText.toLowerCase();
        const category = event.classList.contains('old-testament') ? 'old-testament' :
                         event.classList.contains('new-testament') ? 'new-testament' : '';

        // Show if matches both category filter and search query
        const matchesCategory = filterValue === 'all' || filterValue === category;
        const matchesQuery = title.includes(query) || preview.includes(query) || details.includes(query);

        event.style.display = (matchesCategory && matchesQuery) ? 'block' : 'none';
    });
}

// Dynamic search filtering
searchInput.addEventListener('input', filterTimeline);

// Enter scroll + highlight
searchInput.addEventListener('keydown', function(event) {
    if(event.key === "Enter") {
        const query = searchInput.value.toLowerCase();
        for(let eventCard of events) {
            const title = eventCard.querySelector('.event-title').innerText.toLowerCase();
            const preview = eventCard.querySelector('.event-preview').innerText.toLowerCase();
            const details = eventCard.querySelector('.event-details').innerText.toLowerCase();

            const filterValue = document.querySelector('input[name="timelineFilter"]:checked').value;
            const category = eventCard.classList.contains('old-testament') ? 'old-testament' :
                             eventCard.classList.contains('new-testament') ? 'new-testament' : '';

            if((title.includes(query) || preview.includes(query) || details.includes(query)) &&
               (filterValue === 'all' || filterValue === category)) {

                eventCard.scrollIntoView({behavior: 'smooth', block: 'center'});
                eventCard.style.backgroundColor = '#fff9c4';
                setTimeout(() => eventCard.style.backgroundColor = '', 2000);
                break;
            }
        }
    }
});

