const searchParks = (taco) => {
    let parkHTML = "";

    fetch(`https://data.nashville.gov/resource/xbru-cfzi.json?$$app_token=VYe8wkkThsk0EjGHsubsD5hTx&&${taco}=Yes`)
        .then(parks => parks.json())
        .then(parsedParks => {
            console.log(parsedParks);
            parsedParks.slice(-4).forEach(parkInfo => {
                parkHTML += `<div class="individual-park"><h3>${parkInfo.park_name}</h3> <p>${parkInfo.mapped_location_address}</p><button id="save-button">Save</button></div>`
            })
            document.querySelector("#resultsContainer").innerHTML += parkHTML;

        });
    }


    document.querySelector("#searchButton1").addEventListener("click", () => {
        document.querySelector("#resultsContainer").innerHTML = "";
        const parkSearch = document.querySelector("#searchInput1").value;
        searchParks(parkSearch);
    });


    const removeButton = document.createElement('button');
    removeButton.setAttribute("id", "remove-button");
    removeButton.innerHTML = "Remove";
    document.querySelector("#resultsContainer").addEventListener("click", () => {
        console.log("You clicked!");
        const addToItinerary = event.target.parentNode;
        if(event.target.id === "save-button") {
            const itineraryPark = addToItinerary.cloneNode(true);
            document.querySelector("#resultsContainer").innerHTML = "";
            document.querySelector("#parkItineraryContainer").innerHTML = "";
            document.querySelector("#parkItineraryContainer").appendChild(itineraryPark);
            document.querySelector("#save-button").remove();
            document.querySelector(".individual-park").appendChild(removeButton);
        }   
    }
    )

    document.querySelector("#parkItineraryContainer").addEventListener("click", () => {
        if(event.target.id === "remove-button") {
            document.querySelector("#parkItineraryContainer").innerHTML = "";
        }
    })



