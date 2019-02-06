// const printRestaurantCard = () => {
//     const YES = "This is doing something";
//     document.querySelector(
//       "#search-results"
//     ).innerHTML += YES;
// }

const rS = document.querySelector("#search-results2").value;

const searchRestaurants = (value) => {
    document.querySelector("#search-results2").innerHTML;
    fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=1138&q=${value}&count=4&sort=rating&order=desc&apikey=83b2f03cc93d8559e02be467e17c3440`
    )
      .then(search  => search.json()) // convert them to a JS object
      .then(restaurantSearch => {
            restaurantSearch.forEach(rS => {
                parkHTML += `<p>${rS.restaurant.name}</p><button>Add</button`
            })
            document.querySelector("#resultsContainer").innerHTML += parkHTML;
      });
  };

  document.querySelector("#search-results2").addEventListener("click", searchRestaurants);

  console.log(searchRestaurants(rS));
  console.log(rS);