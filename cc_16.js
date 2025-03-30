// Task 2: Fetch Products with .then()
function fetchProductsThen() {
    fetch("https://www.course-api.com/javascript-store-products") // Fetch product data from the API
      .then((response) => {
        if (!response.ok) { // Check if the response is successful
          throw new Error("Network response was not ok");
        }
        return response.json(); // Convert the response to JSON format
      })
      .then((products) => {
        products.forEach((product) => console.log(toTitleCase(product.fields.name))); // Log each product's name in title case
      })
      .catch((error) => handleError(error)); // Catch and log any errors
  }