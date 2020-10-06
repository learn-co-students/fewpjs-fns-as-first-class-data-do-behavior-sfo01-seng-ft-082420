/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
  function greet(time) {
  let now = time.split(":")
  let later = now[0].concat(now[1])
  let hour = parseInt(later)

  if (hour < 1200) {
    return "Good Morning"
  }
  else if ((hour >= 1200) && (hour <= 1700)) {
    return "Good Afternoon"
  }
  else (hour > 1700); {
    return "Good Evening"
  }
}

function displayMessage(message) {
  document.getElementById('greeting').innerText = message
}

/*%R - 24-hour time (%H:%M) */