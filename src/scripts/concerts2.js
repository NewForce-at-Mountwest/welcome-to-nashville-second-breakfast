let dropdown = document.getElementById("resultsContainer");
dropdown.length = 0;

let defaultOption = document.createElement("option");
defaultOption.text = "Choose Concert";

dropdown.add(defaultOption);
dropdown.selectedIndex = 0;

fetch(
  "https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=343&apikey=7OVjc7Dz2PXDeHNgQ25DgvxAae5oorJM"
)
  .then(response => response.json()) // Parse as JSON
  .then(parsedEntries => {
    parsedEntries._embedded.events.forEach(entries => {
      // console.log(entries.name)
      let option;

      // for (let i = 0; i < entries.name.length; i++) {
      option = document.createElement("option");
      option.text = entries.name;
      option.value = entries.name;
      dropdown.add(option);
      console.log(option);
    });
  });
