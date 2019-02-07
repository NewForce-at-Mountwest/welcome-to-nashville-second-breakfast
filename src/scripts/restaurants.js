// const printRestaurantCard = () => {
//     const YES = "This is doing something";
//     document.querySelector(
//       "#search-results"
//     ).innerHTML += YES;
// }

// const rS = document.querySelector("#search-results2").value;

// const searchRestaurants = (value) => {
//     document.querySelector("#search-results2").innerHTML;
//     fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=1138&q=${value}&count=4&sort=rating&order=desc&apikey=83b2f03cc93d8559e02be467e17c3440`
//     )
//       .then(search  => search.json()) // convert them to a JS object
//       .then(restaurantSearch => {
//             restaurantSearch.forEach(rS => {
//                 parkHTML += `<p>${rS.restaurant.name}</p><button>Add</button`
//             })
//             document.querySelector("#resultsContainer").innerHTML += parkHTML;
//       });
//   };

//   document.querySelector("#search-results2").addEventListener("click", searchRestaurants);

//   console.log(searchRestaurants(rS));
//   console.log(rS);

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
// document.querySelector("#resultsContainer").addEventListener("click", () => {
//   const parkSearch = document.querySelector("#searchInput2").value;
//   if (event.target.id === "save-button") {
//     document.querySelector("#itineraryContainer").innerHTML = searchParks(
//       parkSearch
//     );
//     document.querySelector("#resultsContainer").innerHTML = "";
//   }
// });
