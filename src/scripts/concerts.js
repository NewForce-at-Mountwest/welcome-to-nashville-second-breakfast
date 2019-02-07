
const searchConcerts = (concertParam) => {
    let concertHTML = "";

    fetch(`https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&stateCode=TN&keyword=${concertParam}&apikey=7OVjc7Dz2PXDeHNgQ25DgvxAae5oorJM`) // Fetch from the API
        .then(response => response.json())  // Parse as JSON
        .then(parsedEntries => {
            parsedEntries._embedded.events.slice(-4).forEach(entries => {

                concertHTML += `<div class="individual-concert"><h3>${entries.name} at ${entries._embedded.venues[0].name}</h3><button id="save-button4">Save</button></div>`
            })

            document.querySelector("#resultsContainer").innerHTML += concertHTML;
        });
}



document.querySelector("#searchConcertBtn").addEventListener("click", () => {
    document.querySelector("#resultsContainer").innerHTML = "";
    const searchTerm = document.querySelector("#searchConcert").value;
    searchConcerts(searchTerm);
});


const removeButtonConcert = document.createElement('button');
removeButtonConcert.setAttribute("id", "remove-button4");
removeButtonConcert.innerHTML = "Remove";
document.querySelector("#resultsContainer").addEventListener("click", () => {
    const addToItinerary4 = event.target.parentNode;
    if (event.target.id === "save-button4") {
        const itineraryConcert = addToItinerary4.cloneNode(true);
        document.querySelector("#resultsContainer").innerHTML = "";
        document.querySelector("#concertItineraryContainer").innerHTML = "";
        document.querySelector("#concertItineraryContainer").appendChild(itineraryConcert);
        document.querySelector("#save-button4").remove();
        document.querySelector(".individual-concert").appendChild(removeButtonConcert);
    }
}
)

document.querySelector("#concertItineraryContainer").addEventListener("click", () => {
    if (event.target.id === "remove-button4") {
        document.querySelector("#concertItineraryContainer").innerHTML = "";
    }
})
