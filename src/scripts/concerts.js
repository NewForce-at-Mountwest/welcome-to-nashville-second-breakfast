
const searchConcerts = (concertParam) => {
    let concertHTML = "";

    fetch(`https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&stateCode=TN&keyword=${concertParam}&apikey=7OVjc7Dz2PXDeHNgQ25DgvxAae5oorJM`) // Fetch from the API
        .then(response => response.json())  // Parse as JSON
        .then(parsedEntries => {
            parsedEntries._embedded.events.slice(-4).forEach(entries => {

                concertHTML += `<h4>${entries.name} at ${entries._embedded.venues[0].name}</h4><button id="save-button">Save</button>`
            })

            document.querySelector("#resultsContainer").innerHTML += concertHTML;
        });
}



document.querySelector("#searchConcertBtn").addEventListener("click", () => {
    const searchTerm = document.querySelector("#searchConcert").value;
    searchConcerts(searchTerm);
});



// document.querySelector("#resultsContainer").addEventListener("click", () => {
//     const searchTerm = document.querySelector("#searchConcert").value;
//     if (event.target.id === "save-button") {
//         document.querySelector("#itineraryContainer").innerHTML = searchConcerts(searchTerm);
//         document.querySelector("#resultsContainer").innerHTML = "";
//     }
// }
// )

document.querySelector("#resultsContainer").addEventListener("click", () => {
    const concertSearch =  event.target.parentNode;
    if(event.target.id === "save-button"){
        console.log("You clicked on the button!");
        const concertCard = concertSearch.cloneNode(true);
        document.querySelector("#itineraryContainer").appendChild(concertCard);
        concertSearch.remove();
    // } else if (event.target.id === "not-btn"){
    //     console.log("you clicked on the not button!")
    //     concertSearch.remove()
    }
})