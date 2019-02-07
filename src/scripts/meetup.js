const searchMeetups = meetUpParam => {
    document.querySelector("#resultsContainer").innerHTML = "";   
fetch(`https://www.eventbriteapi.com/v3/events/search/?q=nashville_${meetUpParam}&token=WZJG657L2ZKPAVFFGYPQ`, {
        headers: {
          "Authorization": `Bearer WZJG657L2ZKPAVFFGYPQ`,
          "Accept": "application/json"
        }}
)
    .then(function(allMeetups){
        return allMeetups.json()
    })
    .then(function(parsedMeetups) {
        console.log(parsedMeetups);
        parsedMeetups.events.slice(-4).forEach(event =>{
        document.querySelector("#resultsContainer").innerHTML += 
        `<div class="individual-meetup"><h3>${event.name.text}</h3><button id="saveButton3">Save</button></div>`
        // <a href=${event.url}>${event.url}</a></div>`<p>${event.description.text}</p>`
        })
   }
)}

document.querySelector("#searchButton3").addEventListener("click", () => {
    document.querySelector("#resultsContainer").innerHTML = "";
    const meetUpParam = document.querySelector("#searchInput3").value;
    // log it to the console
    console.log(meetUpParam);
    searchMeetups(`${meetUpParam}`);
}) 

const removeButton3 = document.createElement('button');
removeButton3.setAttribute("id", "remove-button3");
removeButton3.innerHTML = "Remove";
document.querySelector("#resultsContainer").addEventListener("click", () => {
    // console.log("You clicked!");
    const addToItinerary3 = event.target.parentNode;
    if(event.target.id === "saveButton3") {
        const itineraryMeetup = addToItinerary3.cloneNode(true);
        document.querySelector("#resultsContainer").innerHTML = "";
        document.querySelector("#meetupItineraryContainer").innerHTML = "";
        document.querySelector("#meetupItineraryContainer").appendChild(itineraryMeetup);
        document.querySelector("#saveButton3").remove();
        document.querySelector(".individual-meetup").appendChild(removeButton3);
    }   
}
)

document.querySelector("#meetupItineraryContainer").addEventListener("click", () => {
    if(event.target.id === "remove-button3") {
        document.querySelector("#meetupItineraryContainer").innerHTML = "";
    }
})
