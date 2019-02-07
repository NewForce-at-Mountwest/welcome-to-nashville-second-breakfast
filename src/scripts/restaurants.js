document.querySelector("#searchButton2").addEventListener("click", () => {
  const food = document.querySelector("#searchInput2").value;
  findRestaurants(food);
});

const findRestaurants = value => {
  let restaurantHTML = "";

  fetch(
    `https://developers.zomato.com/api/v2.1/search?entity_id=1138&q=${value}&count=4&sort=rating&order=desc&apikey=83b2f03cc93d8559e02be467e17c3440`
  )
    .then(restaurant => restaurant.json())
    .then(parsedRestaurant => {
        console.log(parsedRestaurant);
        for(let i=0; i <parsedRestaurant.restaurants.length; i++){
        restaurantHTML += `<h3>${parsedRestaurant.restaurants[i].restaurant.name}</h3><p>${parsedRestaurant.restaurants[i].restaurant.url}</p>`
        };
         document.querySelector("#resultsContainer").innerHTML += restaurantHTML;
      });
    };


// document.querySelector("#searchButton2").addEventListener("click", () => {
//   const food = document.querySelector("#searchInput2").value;
//   findRestaurants(food);
// });

// const findRestaurants = value => {
//   let restaurantHTML = "";

//   fetch(
//     `https://developers.zomato.com/api/v2.1/search?entity_id=1138&q=${value}&count=4&sort=rating&order=desc&apikey=83b2f03cc93d8559e02be467e17c3440`
//   )
//     .then(restaurant => restaurant.json())
//     .then(parsedRestaurant => {
//         console.log(parsedRestaurant);
//         for(let i=0; i <restaurants.length; i++){
//         restaurantHTML += `<h3>${restaurants[i].restaurant.name}</h3><p>${restaurants[i].restaurant.url}</p>`
//         };
//          document.querySelector("#resultsContainer").innerHTML += restaurantHTML;
//       });
//     };

const removeButton2 = document.createElement('button2');
    removeButton2.setAttribute("class", "remove-button2");
    removeButton2.innerHTML = "Remove2";
    document.querySelector("#resultsContainer").addEventListener("click", () => {
        console.log("You clicked!");
        const addToItinerary2 = event.target.parentNode;
        if(event.target.id === "save-button2") {
            const itineraryPark2 = addToItinerary2.cloneNode(true);
            document.querySelector("#resultsContainer").innerHTML = "";
            document.querySelector("#parkItineraryContainer2").innerHTML = "";
            document.querySelector("#parkItineraryContainer2").appendChild(itineraryPark2);
            document.querySelector("#save-button2").remove();
            document.querySelector(".individual-park2").appendChild(removeButton2);
        }   
    }
    )

    document.querySelector("#parkItineraryContainer2").addEventListener("click", () => {
        if(event.target.class === "remove-button2") {
            document.querySelector("#parkItineraryContainer2").innerHTML = "";
        }
    })