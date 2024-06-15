async function castVote(candidate, button) {
  document.getElementById('message').innerText = 'You voted for ' + candidate.toUpperCase();

  const redLight = button.nextElementSibling; // Get the next sibling element, which is the red light
  redLight.style.display = 'block';

  const buttonRect = button.getBoundingClientRect(); // Get the position of the button
  redLight.style.top = (buttonRect.top + buttonRect.height + 5) + 'px'; // Set the top position of the red light
  redLight.style.left = (buttonRect.left + (buttonRect.width / 2)) + 'px'; // Set the left position of the red light

  setTimeout(() => {
    redLight.style.display = 'none';
    const allButtons = document.querySelectorAll('.party-item button');
    allButtons.forEach(btn => {
      btn.disabled = false;
    });
  }, 1000); // 2000 milliseconds = 2 seconds

  const allButtons = document.querySelectorAll('.party-item button');
  allButtons.forEach(btn => {
    if (btn !== button) {
      btn.disabled = true;
    }
  });

  const voterAddress = 'user@example.com'; 

  const data = {
    candidate: candidate,
    voterAddress: voterAddress
  };

  try {
    const response = await fetch('http://localhost:3001/api/votes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    
    if (response.ok) {
      console.log('Vote successfully recorded for candidate:', candidate);
    } else {
      // If there's an error, log the error message
      console.error('Error recording vote:', response.statusText);
    }
  } catch (error) {
    console.error('Error recording vote:', error);
  }
}
