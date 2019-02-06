
const searchConcerts = concertParam => {
    document.querySelector("#resultsContainer").innerHTML = "";


fetch(`https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&stateCode=TN&genre=${concertParam}apikey=7OVjc7Dz2PXDeHNgQ25DgvxAae5oorJM`) // Fetch from the API
    .then(response => response.json())  // Parse as JSON
    .then(parsedEntries => {
        parsedEntries._embedded.events.forEach(entries => {
            document.querySelector("#resultsContainer").innerHTML += `<div><h2>${entries.name}</h2><p>${entries._embedded.venues[0].name}</p></div>`
        })


    })

    
document.querySelector("#searchConcertBtn").addEventListener("click", () => {
    // get the user's input
    const searchTerm = document.querySelector("#searchConcert").value;
    // log it to the console
    searchConcerts(searchTerm);
    document.querySelector("#resultsContainer").innerHTML = searchConcerts();
})