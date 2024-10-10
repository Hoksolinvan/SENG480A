let deadlines = [];

async function webscrape() {
  try {
    const request = await fetch('https://seng480a-production.up.railway.app/webscrape', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (request.ok) {
      const result = await request.json();
      deadlines = result.deadlines;  // Ensure you assign the correct data
      console.log(deadlines);        // Print the deadlines after receiving the data
    } else {
      console.error('Error submitting webscrape:', request.statusText);  // Updated to request.statusText
    }
  } catch (error) {
    console.error('Failed to obtain webscrape data:', error.message);  // Updated to log the error message
  }
}

// Call the function
webscrape();

console.log(deadlines)