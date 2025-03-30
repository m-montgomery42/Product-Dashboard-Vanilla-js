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

// Task 4: Display the Products
function displayProducts(products) {
    const container = document.getElementById("product-container"); // Select the product container div
    container.innerHTML = ""; // Clear container before appending new products
  
    products.slice(0, 5).forEach((product) => { // Loop through the first 5 products
      const productElement = document.createElement("div"); // Create a div for each product
      productElement.classList.add("product"); // Add a class for styling
  
      // Modify price by adding a random value between $5 - $15
      const modifiedPrice = (product.fields.price / 100) + (Math.floor(Math.random() * 11) + 5); 
  
      // Set the product HTML content with image, title-cased name, and modified price
      productElement.innerHTML = `
        <img src="${product.fields.image[0].url}" alt="${toTitleCase(product.fields.name)}" />
        <h2>${toTitleCase(product.fields.name)}</h2>
        <p>$${modifiedPrice.toFixed(2)}</p>
      `;
  
      container.appendChild(productElement); // Append the product element to the container
    });
  }