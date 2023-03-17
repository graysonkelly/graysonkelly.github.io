// Fetch 25 random nouns from the API
const fetchNouns = async () => {
    const nouns = [];
    for (let i = 0; i < 25; i++) {
      try {
        const response = await fetch('https://random-word-form.herokuapp.com/random/noun');
        const [noun] = await response.json();
        nouns.push(noun.toUpperCase());
      } catch (error) {
        console.log(error);
      }
    }
    return nouns;
  };
  
  // Display the nouns in a 5x5 grid
  const displayNouns = async () => {
    const nouns = await fetchNouns();
    // Get the grid container element
    const gridContainer = document.getElementById('grid-container');
    // Shuffle the nouns
    nouns.sort(() => Math.random() - 0.5);
    // Loop through the rows of the grid
    for (let i = 0; i < 5; i++) {
      // Create a new row element
      const row = document.createElement('div');
      row.classList.add('row');
      // Loop through the columns of the row
      for (let j = 0; j < 5; j++) {
        // Create a new box element
        const box = document.createElement('div');
        box.classList.add('box');
        // Set the text content of the box to a random noun from the array of nouns
        box.innerHTML = `<div class="cardTop">${nouns[i * 5 + j]}</div><br><div class="cardBottom">${nouns[i * 5 + j]}</div>`;
        // Append the box to the row
        row.appendChild(box);
      }
      // Append the row to the grid container
      gridContainer.appendChild(row);
    }
  };
  
  // Call the displayNouns function when the page is loaded
  window.addEventListener('load', displayNouns);
  