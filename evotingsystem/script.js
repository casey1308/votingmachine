async function castVote(candidate, button) {
  // Display message indicating the voted party
  document.getElementById('message').innerText = 'You voted for ' + candidate.toUpperCase();

  // Display the red light below the button
  const redLight = button.nextElementSibling; // Get the next sibling element, which is the red light
  redLight.style.display = 'block';

  // Adjust the position of the red light
  const buttonRect = button.getBoundingClientRect(); // Get the position of the button
  redLight.style.top = (buttonRect.top + buttonRect.height + 5) + 'px'; // Set the top position of the red light
  redLight.style.left = (buttonRect.left + (buttonRect.width / 2)) + 'px'; // Set the left position of the red light

  // Hide the red light after a delay (e.g., 2 seconds)
  setTimeout(() => {
    redLight.style.display = 'none';
    const allButtons = document.querySelectorAll('.party-item button');
    allButtons.forEach(btn => {
      btn.disabled = false;
    });
  }, 1000); // 2000 milliseconds = 2 seconds

  // Disable all other buttons when one button is pressed
  const allButtons = document.querySelectorAll('.party-item button');
  allButtons.forEach(btn => {
    if (btn !== button) {
      btn.disabled = true;
    }
  });

  const voterAddress = 'user@example.com'; // Replace with actual voter's address

  // Data to send to the backend
  const data = {
    candidate: candidate,
    voterAddress: voterAddress
  };

  // Send a POST request to the backend to record the vote
  try {
    const response = await fetch('http://localhost:3001/api/votes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });



    if (response.ok) {
      // If vote is successfully recorded, display a message (you may adjust this based on your UI)
      console.log('Vote successfully recorded for candidate:', candidate);
    } else {
      // If there's an error, log the error message
      console.error('Error recording vote:', response.statusText);
    }
  } catch (error) {
    console.error('Error recording vote:', error);
  }
}
