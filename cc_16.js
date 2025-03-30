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

// Task 3: Fetch Products with async/await
async function fetchProductsAsync() {
    try {
      const response = await fetch("https://www.course-api.com/javascript-store-products"); // Fetch product data asynchronously
      if (!response.ok) { // Check for response errors
        throw new Error("Network response was not ok");
      }
      const products = await response.json(); // Convert the response to JSON format
      displayProducts(products); // Call the function to display products on the webpage
    } catch (error) {
      handleError(error); // Handle errors gracefully
    }
  }
  
  // Editing format of words in product names
  function toTitleCase(str) {
    return str
      .split(" ") // Split string into words
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize the first letter of each word
      .join(" "); // Join the words back together
  }