function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
  }


function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}


// JavaScript code to smoothly cycle through pastel colors for "ChadBrowser"
const chadBrowserText = document.getElementById("chad-browser");
let hue = 0; // Initialize the hue

function changeColor() {
  // Calculate the next hue value in the range of 0-360 degrees for pastel colors
  hue = (hue + 15) % 360; // Increment by 15 for pastel shades
  // Set the text color using HSL, with a fixed lightness and saturation for pastel colors
  chadBrowserText.style.color = `hsl(${hue}, 50%, 80%)`; // Adjust saturation and lightness for pastel effect
}

// Call changeColor function immediately to set the initial color
changeColor();

// Set an interval to smoothly cycle through pastel colors every 100 milliseconds
setInterval(changeColor, 100);

// JavaScript code to toggle background color
const backgroundToggle = document.getElementById("background-toggle");
const body = document.body;
let isDarkMode = false;


// working on darkmode 
/*
backgroundToggle.addEventListener('click', () => {
  if (isDarkMode) {
    body.style.backgroundColor = 'white'; // Set background to white for light mode
  } else {
    body.style.backgroundColor = 'black'; // Set background to black for dark mode
  }
  isDarkMode = !isDarkMode; // Toggle the mode
});
*/

// script.js

document.addEventListener('DOMContentLoaded', function () {
  const themeToggleBtn = document.getElementById('theme-toggle');

  themeToggleBtn.addEventListener('click', function () {
      document.body.classList.toggle('light-mode');
      document.getElementById('note-section').classList.toggle('light-mode');
      document.getElementById('note-text').classList.toggle('light-mode');
      document.getElementById('save-button').classList.toggle('light-mode');

      if (document.body.classList.contains('light-mode')) {
          themeToggleBtn.textContent = 'Toggle Dark Mode';
      } else {
          themeToggleBtn.textContent = 'Toggle Light Mode';
      }
  });
});
