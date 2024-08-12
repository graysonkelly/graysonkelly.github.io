const prepColors = async () => {
  const colors = [];
  colors.push("death");
  for(i = 0; i < 7; i++){
    colors.push("neutral");
  }
  for(i = 0; i < 8; i++){
    colors.push("red");
    colors.push("blue");
  }
  colors.push(Math.random() < 0.5 ? "red" : "blue");
  return colors;
};

// Display the colors in a 5x5 grid
const displayColors = async () => {
  const colors = await prepColors();
  // Get the grid container element
  const gridContainer = document.getElementById('grid-container');
  // Shuffle the colors
  colors.sort(() => Math.random() - 0.5);
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
      // Set the colors
      box.innerHTML = `<div class="${colors[i * 5 + j]}"></div>`;
      // Append the box to the row
      row.appendChild(box);
    }
    // Append the row to the grid container
    gridContainer.appendChild(row);
  }
};

window.addEventListener('load', displayColors);
