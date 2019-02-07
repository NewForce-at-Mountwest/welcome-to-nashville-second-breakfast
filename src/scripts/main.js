const searchMeetups = meetUpParam => {
    document.querySelector("#resultsContainer").innerHTML = "";   
fetch(`https://www.eventbriteapi.com/v3/events/search/?q=nashville_${meetUpParam}&token=WZJG657L2ZKPAVFFGYPQ`, {
        headers: {
          "Authorization": `Bearer WZJG657L2ZKPAVFFGYPQ`,
          "Accept": "application/json"}}
          )
    .then(function(allMeetups){
        return allMeetups.json()
    })
    .then(function(parsedMeetups) {
        console.log(parsedMeetups);
        parsedMeetups.events.slice(-4).forEach(event =>{
        document.querySelector("#resultsContainer").innerHTML += 
        `<div><h3>${event.name.text}</h3><button id=saveButton>Save</button><p>${event.description.text}</p>`
        // <a href=${event.url}>${event.url}</a></div>`
        })
   
   
}
)}

document.querySelector("#searchButton3").addEventListener("click", () => {
    // get the user's input
    const meetUpParam = document.querySelector("#searchInput3").value;
    // log it to the console
    console.log(meetUpParam);
    searchMeetups(`${meetUpParam}`);
}) 

// document.querySelector("#saveButton").addEventListener("click", () => {
//     // get the user's input
//     const meetUpParam = document.querySelector("#searchInput3").value;
//     // log it to the console
//     console.log(meetUpParam);
//     searchMeetups(`${meetUpParam}`);
// }) 

//try to figure out the save part below here, eventually, maybe
// document.querySelector("#resultsContainer").addEventListener("click", () => {
//     // get the user's input
//     const ItineraryItem = document.querySelector("#resultsContainer");
//     // log it to the console
//     console.log(ItineraryItem);
    
// })
