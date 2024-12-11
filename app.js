const fetchButton = document.getElementById('fetchButton');
const factDisplay = document.getElementById('factDisplay');

// Replace with the appropriate API key if required by the API.
const API_URL = 'https://api-ninjas.com/api/facts?limit=1'; 

fetchButton.addEventListener('click', async () => {
    factDisplay.textContent = 'Fetching fact...';
    try {
        const response = await fetch(API_URL, {
            headers: { 'X-Api-Key': 'YOUR_API_KEY_HERE' } 
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        factDisplay.textContent = data[0]?.fact || 'No fact available';
    } catch (error) {
        factDisplay.textContent = `Error fetching fact: ${error.message}`;
    }
});

