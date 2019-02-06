const searchParks = (taco) => {
    let parkHTML = "";
    
    fetch(`https://data.nashville.gov/resource/xbru-cfzi.json?$$app_token=VYe8wkkThsk0EjGHsubsD5hTx&&${taco}=Yes`)
        .then(parks => parks.json())
        .then(parsedParks => {
            parsedParks.forEach(parkInfo => {
                parkHTML += `<p>${parkInfo.park_name} ${parkInfo.mapped_location_address}</p><button id="save-button">Save</button>`
            })
            document.querySelector("#resultsContainer").innerHTML += parkHTML;

        });
    }
    
    
    
    document.querySelector("#searchButton1").addEventListener("click", () => {
        const parkSearch = document.querySelector("#searchInput1").value;
        searchParks(parkSearch);
    });



    document.querySelector("#resultsContainer").addEventListener("click", () => {
        const parkSearch = document.querySelector("#searchInput1").value;
        console.log("You clicked!");
        if(event.target.id === "save-button") {
            document.querySelector("#itineraryContainer").innerHTML = searchParks(parkSearch);
            document.querySelector("#resultsContainer").innerHTML = "";
        }
    }
    )